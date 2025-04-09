// // //
import Image from "next/image";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "./TextExpander";

export default function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid grid-cols-[3fr_4fr] gap-10 border-2 border-[var(--color-primary-800)] py-3 px-10 mb-24 rounded-md shadow shadow-gray-600">
      <div className="relative aspect-square w-full max-w-[400px] scale-[1.15] -translate-x-8">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover rounded-md shadow shadow-gray-500"
        />
      </div>

      <div>
        <h3 className="text-[var(--color-accent-100)] font-black text-7xl mb-5 translate-x-[-254px] bg-[var(--color-primary-950)] p-6 pb-1 w-[150%] rounded-l-md">
          Cabin {name}
        </h3>

        <p className="text-xl text-[var(--color-primary-300)] mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-[var(--color-primary-600)]" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-[var(--color-primary-600)]" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-[var(--color-primary-600)]" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
