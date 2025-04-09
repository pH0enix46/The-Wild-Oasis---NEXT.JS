// // //
import { auth } from "../_library/auth/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  // console.log(session);
  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className="font-semibold text-3xl text-[var(--color-accent-400)] mb-7 border-b-2 w-fit border-b-[var(--color-accent-600)]">
      Welcome, {firstName}
    </h2>
  );
}
