// // //
import { signInAction } from "../_library/server/serverAction";

export default function SignInButton() {
  return (
    // thhis is server compnntn its dont llow any action so, we sue form so frpm will travel any interactivity to that specific logic.. more in note
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border-2 border-[var(--color-primary-600)] px-10 py-4 font-medium cursor-pointer rounded-lg shadow shadow-gray-500">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}
