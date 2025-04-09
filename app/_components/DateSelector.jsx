// // //
"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "../_context/ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

export default function DateSelector({ settings, bookedDates, cabin }) {
  // all note
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from); // note
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  // console.log(bookedDates);

  return (
    <div className="flex flex-col justify-between">
      {/* style it and  change those MF button */}
      <h2>THis MF daypicker is bad,, I'll update it soon, But it works fine</h2>
      <DayPicker
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        startDate={new Date()}
        endMonth={new Date(new Date().getFullYear() + 5, 11)} // December of the year 5 years from now
        numberOfMonths={2}
        // note
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
        captionLayout="dropdown"
        selected={displayRange}
        onSelect={setRange}
        className="pt-12"
        classNames={{
          months: "flex flex-col lg:flex-row gap-4",
          month: "bg-[var(--color-primary-800)] p-2 rounded-lg shadow-lg",
          table: "w-full border-collapse",
          head_row: "flex",
          // head_cell:
          //   "w-10 h-10 text-sm font-semibold text-center text-gray-600",
          // row: "flex w-full",
          // cell: "w-10 h-10 text-center p-1",
          // day: "w-10 h-10 flex items-center justify-center rounded-full transition hover:bg-blue-100",
          day_selected: "bg-blue-500 text-white",
          day_range_middle: "bg-blue-200 text-black",
          day_today: "border border-blue-500",
          nav_button: "text-blue-600 hover:text-blue-800",
        }}
      />

      <div className="flex items-center justify-between px-8 bg-[var(--color-accent-500)] text-[var(--color-primary-800)] h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-[var(--color-primary-700)]">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-[var(--color-accent-600)] px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border-2 border-[var(--color-primary-600)] py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
