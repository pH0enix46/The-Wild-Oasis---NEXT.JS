// // //
"use client";
const { useFormStatus } = require("react-dom");

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus(); // note, also ask chat gpt why we create Button componnt outside for using this hook??, and this hook need to be clinet compoemnt

  return (
    <button
      className="bg-[var(--color-accent-600)] px-5 py-4 text-[var(--color-primary-800)] text-lg font-semibold hover:bg-[var(--color-accent-500)] transition-all rounded-md shadow shadow-gray-300 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
