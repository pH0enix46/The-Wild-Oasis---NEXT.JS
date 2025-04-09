// // //
import Link from "next/link";

// note, its here for all route inside root app.. but specific vabe kono route k korte gele tar folder er vitore name name e khulte hobe.. simple logix.. note

export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This page could not be found 😥
      </h1>
      <Link
        href="/"
        className="inline-block bg-[var(--color-accent-600)] text-[var(--color-primary-800)] px-6 py-3 text-xl rounded-md shadow shadow-gray-400 cursor-pointer font-semibold hover:bg-[var(--color-accent-500)] transition-all"
      >
        Go back home
      </Link>
    </main>
  );
}
