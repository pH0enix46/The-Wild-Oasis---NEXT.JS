// // //
// dynamic route er jonno folder e [] use korte hobe.. more in note
import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_library/database/data-service";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  // note generateMetadata
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return { title: `Cabin ${name}` };
}

// note, making dynamic pages to static(SSG), best for performance
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  // console.log(ids);
  return ids;
}

export default async function Page({ params }) {
  // console.log(params); // note params for dynamic routing
  // const { cabinId } = await params;
  const cabin = await getCabin((await params)?.cabinId); // whyw await note
  // // console.log(cabin);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-[var(--color-accent-400)]">
          Reserve {cabin.name} today. Pay on arrival
        </h2>

        {/* strraming, note think why we do it like this */}
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
