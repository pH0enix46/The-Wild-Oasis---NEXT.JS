// // //
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png"; // import korte hobe kno note

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* short note Image */}
      {/* <Image
        src="/logo.png"
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        className="shadow shadow-gray-300 rounded-full"
        priority // note
      /> */}

      <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        className="shadow shadow-gray-300 rounded-full"
        priority // note
        quality={100} // note
      />
      <span className="text-xl font-semibold text-[var(--color-primary-100)] text-shadow-sm">
        The Wild Oasis
      </span>
    </Link>
  );
}
