// // //
"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

export default function DeleteReservation({ bookingId, onDelete }) {
  // function deleteReservation() {
  //   "use server";
  //   // for doing this, this function is our server action, more in note so server action inside server component, does it possible for client compoennt?? note, but all the server action k alda kore library te likha valo, note

  //   // code....
  // }

  const [isPending, startTransition] = useTransition(); // note

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      className="group flex items-center gap-2 uppercase text-xs font-bold text-[var(--color-primary-300)] flex-grow px-3 hover:bg-[var(--color-accent-600)] transition-colors hover:text-[var(--color-primary-900)] cursor-pointer"
      onClick={handleDelete}
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-[var(--color-primary-600)] group-hover:text-[var(--color-primary-800)] transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}
