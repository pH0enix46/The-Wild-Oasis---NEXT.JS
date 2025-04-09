//----------------------- 🌍 SERVER 🌍 -----------------------//
import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const metadata = {
  title: "Cabins",
};

// note, caching
// export const revalidate = 0; // dynamic
export const revalidate = 3600; // static, refetching data 1 per hour, note

export default async function Page({ searchParams }) {
  // console.log(searchParams); // note, only avaliable in all page.jsx, note why await
  const filter = (await searchParams)?.capacity ?? "all"; // using awai tmake it route dynamic more note

  return (
    <div>
      <h1 className="text-4xl mb-5 text-[var(--color-accent-400)] font-medium border-b-2 w-fit border-b-[var(--color-accent-600)]">
        Our Luxury Cabins
      </h1>
      <p className="text-[var(--color-primary-200)] text-xl mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      {/* note, streaming UI with suspense , here its ppr note, why key notegive use loding spinner note */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
//----------------------- 🌍 SERVER 🌍 -----------------------//
