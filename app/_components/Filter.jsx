//----------------------- 👤 CLIENT 👤 -----------------------//
"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams(); // note
  const router = useRouter(); // note for navigation
  const pathname = usePathname(); // note
  const activeFilter = searchParams.get("capacity") ?? "all"; // note how we can get or more?

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams); // note
    params.set("capacity", filter); // note
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    // note, ? for query
  }

  return (
    <div className="border-2 border-[var(--color-primary-800)] flex rounded-md overflow-hidden shadow shadow-gray-700 gap-1.5 transition-all">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>

      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>

      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>

      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-[var(--color-primary-700)] cursor-pointer ${
        filter === activeFilter
          ? "bg-[var(--color-primary-800)] text-[var(--color-primary-100)]"
          : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
//----------------------- 👤 CLIENT 👤 -----------------------//
