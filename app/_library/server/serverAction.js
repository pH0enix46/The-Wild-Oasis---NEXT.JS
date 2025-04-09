// // //
"use server"; // note, its for server actions
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "../auth/auth";
import { supabase } from "../database/supabase";
import { getBookings } from "../database/data-service";
import { redirect } from "next/navigation";

// note why we use it
export async function signInAction() {
  // go /api/auth/providers the see the name "google"
  //  note, when user succcessfully login then go this route(/account)
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  // console.log(formData);
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const regex = /^[a-zA-Z0-9]{6,12}$/; // note
  if (!regex.test(nationalID))
    throw new Error("Please provide a valid national ID!");

  const updateData = {
    nationality,
    countryFlag,
    nationalID,
  };
  // console.log(updateData);

  const { data, error } = await supabase
    .from("Guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated!");

  // note, clear
  revalidatePath("/account/profile");

  // there is some proble is that the country selelcta nd update then the country selection go back previous one.. need to solve but update is correct,, select probelm or somehing don;t know
}

export async function deleteBooking(bookingId) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in!");

  //  these 3 is important note here watch jonas video
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You aren't allow to delete this booking!");

  const { error } = await supabase
    .from("Bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted !");

  revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
  // console.log(formData);

  const bookingId = +formData.get("bookingId");

  // athentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  // authorization
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You aren't allow to update this booking!");

  // building update data
  const updateData = {
    numGuests: +formData.get("numGuests"),
    observations: formData.get("observations").slice(0, 200),
  };

  // mutation
  const { error } = await supabase
    .from("Bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  // error handling
  if (error) throw new Error("Booking could not be updated");

  // revaidate before redirecting
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");

  //  redirecting
  redirect("/account/reservations");
}

export async function createBooking(bookingData, formData) {
  // console.log(formData);

  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: +formData.get("numGuests"),
    observations: formData.get("observations").slice(0, 200),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  // console.log(newBooking);

  const { error } = await supabase.from("Bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}
