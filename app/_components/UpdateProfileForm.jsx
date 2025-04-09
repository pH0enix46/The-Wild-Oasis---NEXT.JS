//----------------------- 👤 CLIENT 👤 -----------------------//
"use client";
import { useFormStatus } from "react-dom";
import { updateGuest } from "../_library/server/serverAction";
import SubmitButton from "./SubmitButton";

export default function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      className="bg-[var(--color-primary-900)] py-8 px-12 text-lg flex gap-6 flex-col rounded-lg shadow shadow-gray-600 border-2 border-gray-600       text-[var(--color-primary-100)]"
      action={updateGuest}
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          name="fullName" // database er name onijai e dibo,, note
          defaultValue={fullName}
          className="px-5 py-3 bg-primary-200 text-[var(--color-primary-800)] w-full rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 shadow shadow-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          name="email"
          defaultValue={email}
          className="px-5 py-3 bg-primary-200 text-[var(--color-primary-800)] w-full rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 shadow shadow-gray-400"
        />
      </div>

      <div className="space-y-2 font-semibold">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {countryFlag ? (
            <img
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          ) : (
            ""
          )}

          {/* <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          /> */}
        </div>

        {children}
      </div>

      <div className="space-y-2 font-semibold">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-5 py-3 bg-[var(--color-primary-300)] text-[var(--color-primary-800)] w-full rounded-sm shadow shadow-gray-400"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  );
}
//----------------------- 👤 CLIENT 👤 -----------------------//
