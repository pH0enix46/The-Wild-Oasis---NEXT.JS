// // //
import Link from "next/link";
import { auth } from "../_library/auth/auth";

export default async function Navigation() {
  const session = await auth(); // its makes the route dynamic because it fetches data at request time, not build time. more note, aba er navigation website er sob jaygay ache so all the route is dynamic becuse of this fetching more in note
  // console.log(session);

  return (
    <nav className="z-10 text-lg font-semibold">
      <ul className="flex gap-10 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-[var(--color-accent-400)] py-3 px-4 bg-[var(--color-primary-800)] transition-all rounded-md shadow shadow-gray-500 border-2 border-gray-600"
          >
            Cabins
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="hover:text-[var(--color-accent-400)] py-3 px-4 bg-[var(--color-primary-800)] transition-all rounded-md shadow shadow-gray-500 border-2 border-gray-600"
          >
            About
          </Link>
        </li>

        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-[var(--color-accent-400)] py-3 px-4 bg-[var(--color-primary-800)] transition-all rounded-md shadow shadow-gray-500 border-2 border-gray-600 flex items-center gap-4"
            >
              <img
                className="h-7 rounded-full shadow shadow-gray-500"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer" // note
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-[var(--color-accent-400)] py-3 px-4 bg-[var(--color-primary-800)] transition-all rounded-md shadow shadow-gray-500 border-2 border-gray-600"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
