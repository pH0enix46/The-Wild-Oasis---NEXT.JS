// // //
import Image from "next/image";
import Link from "next/link";
import bgImage from "@/public/bg.png";

export default function Page() {
  return (
    <div className="mt-24">
      <Image
        src={bgImage}
        alt="Mountains and forests with two cabins"
        fill // note
        placeholder="blur" // note only import image
        quality={80} // note only import image??
        className="object-cover object-top"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-[var(--color-primary-100)] mb-10 tracking-tight font-normal text-shadow-lg">
          Welcome to paradise
        </h1>
        <Link
          href="/cabins"
          className="bg-[var(--color-accent-600)] px-6 py-5 text-[var(--color-primary-800)] text-lg font-semibold hover:bg-[var(--color-accent-500)] transition-all rounded-md shadow shadow-gray-300"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
