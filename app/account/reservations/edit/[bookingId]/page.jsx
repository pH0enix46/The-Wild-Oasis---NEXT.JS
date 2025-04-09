// // //
import SubmitButton from "@/app/_components/SubmitButton";
import { getBooking, getCabin } from "@/app/_library/database/data-service";
import { updateBooking } from "@/app/_library/server/serverAction";

export default async function Page({ params }) {
  const { bookingId } = await params;
  const { numGuests, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-[var(--color-accent-400)] mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        className="bg-[var(--color-primary-900)] py-8 px-12 text-lg flex gap-6 flex-col rounded-lg shadow shadow-gray-500"
        action={updateBooking}
      >
        <input type="hidden" value={bookingId} name="bookingId" />
        {/* note why hiddne */}

        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="px-5 py-3 bg-[var(--color-primary-200)] text-[var(--color-primary-800)] w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-5 py-3 bg-[var(--color-primary-200)] text-[var(--color-primary-800)] w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
