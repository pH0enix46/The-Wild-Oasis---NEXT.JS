// // //
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_library/server/serverAction";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 bg-[var(--color-primary-900)] hover:bg-[var(--color-primary-800)] text-[var(--color-primary-200)] transition-all flex items-center gap-4 font-semibold w-full rounded-l-lg shadow shadow-gray-500 cursor-pointer">
        <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}
