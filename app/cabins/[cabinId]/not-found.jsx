// // //
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This cabin could not be found 😥
      </h1>
      <Link
        href="/cabins"
        className="inline-block bg-[var(--color-accent-600)] text-[var(--color-primary-800)] px-6 py-3 text-xl rounded-md shadow shadow-gray-400 cursor-pointer font-semibold hover:bg-[var(--color-accent-500)] transition-all"
      >
        Back to all cabins
      </Link>
    </main>
  );
}
