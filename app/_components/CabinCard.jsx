// // //
import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  // console.log(image);

  return (
    <div className="flex border-[var(--color-primary-900)] border-2 rounded-md overflow-hidden shadow shadow-gray-500">
      <div className="flex-1 relative">
        {/* image optimizaion niye valo kore note kori */}
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="border-r-2 border-[var(--color-primary-800)] object-cover shadow shadow-gray-600"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-[var(--color-primary-900)]">
          <h3 className="text-[var(--color-accent-500)] font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-[var(--color-primary-600)]" />
            <p className="text-lg text-[var(--color-primary-200)]">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-[var(--color-primary-600)]">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-[var(--color-primary-200)]">/ night</span>
          </p>
        </div>

        <div className="bg-[var(--color-primary-950)] border-t-2 border-t-[var(--color-primary-800)] text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l-2 border-[var(--color-primary-800)] py-4 px-6 inline-block hover:bg-[var(--color-accent-500)] transition-all hover:text-[var(--color-primary-900)]"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
