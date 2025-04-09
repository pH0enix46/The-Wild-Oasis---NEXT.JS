// // //
import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_library/auth/auth";
import { getBookings } from "@/app/_library/database/data-service";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div>
      <h2 className="font-semibold text-3xl text-[var(--color-accent-400)] mb-7 border-b-2 w-fit border-b-[var(--color-accent-600)]">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-xl">
          You have no reservations yet. Check out our{" "}
          <Link
            className="underline text-[var(--color-accent-500)]"
            href="/cabins"
          >
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
