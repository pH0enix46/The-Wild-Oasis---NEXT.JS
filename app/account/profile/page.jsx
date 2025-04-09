//----------------------- 🌍 SERVER 🌍 -----------------------//
import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_library/auth/auth";
import { getGuest } from "@/app/_library/database/data-service";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div>
      <h2 className="font-semibold text-3xl text-[var(--color-accent-400)] mb-4 border-b-2 w-fit border-b-[var(--color-accent-600)]">
        Update your guest profile
      </h2>

      <p className="text-xl mb-8 text-[var(--color-primary-200)]">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        {/* passing server component children prop inside a client component, note*/}
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-[var(--color-primary-300)] text-[var(--color-primary-800)] w-full rounded-sm shadow shadow-gray-400"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
//----------------------- 🌍 SERVER 🌍 -----------------------//
