// // //
import Link from "next/link";

export default function LoginMessage() {
  return (
    <div className="grid bg-[var(--color-primary-700)">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link href="/login" className="underline text-[var(--color-accent-500)">
          login
        </Link>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}
