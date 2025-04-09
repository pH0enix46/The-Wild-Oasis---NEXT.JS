// // //
"use client";

// note error page
export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-4xl font-semibold">Something went wrong!</h1>
      <p className="text-lg text-red-400 font-bold">{error.message}</p>

      <button
        className="inline-block bg-[var(--color-accent-600)] text-[var(--color-primary-800)] px-6 py-3 text-xl rounded-md shadow shadow-gray-400 cursor-pointer font-semibold hover:bg-[var(--color-accent-500)] transition-all"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
