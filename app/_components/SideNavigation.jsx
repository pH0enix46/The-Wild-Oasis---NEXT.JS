// // //
"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-[var(--color-primary-500)]" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: (
      <CalendarDaysIcon className="h-5 w-5 text-[var(--color-primary-500)]" />
    ),
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-[var(--color-primary-500)]" />,
  },
];

export default function SideNavigation() {
  const pathname = usePathname(); // note here
  // console.log(pathname);

  return (
    <nav className="border-r-2 border-[var(--color-primary-800)] -pr-2">
      <ul className="flex flex-col gap-4 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5  bg-[var(--color-primary-900)] hover:bg-[var(--color-primary-800)] text-[var(--color-primary-200)] transition-all flex items-center gap-4 font-semibold cursor-pointer rounded-l-md shadow shadow-gray-500 ${
                pathname === link.href ? "bg-[var(--color-primary-700)]!" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
