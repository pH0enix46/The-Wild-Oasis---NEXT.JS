// // //
import Header from "./_components/Header";
import "@/app/_styles/globals.css"; // ⏺ In Next.js, @/app is an alias that refers to the app directory, enabling us to import components or modules from app folder easily without using relative paths
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_context/ReservationContext";

const josefin = Josefin_Sans({
  // note
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    // note
    template: "%s / The Wild Oasis`",
    default: "Welcome / The Wild Oasis`",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-[var(--color-primary-950)] text-[var(--color-primary-100)] min-h-screen overflow-x-hidden flex flex-col antialiased relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            {/* here children can be client or server but ReservationProvider is pure client so we passing here server/client inside a client compoennt, note */}
            {/* Yes, it’s possible. The code is valid because children can be either client or server-side content, and since ReservationProvider is a pure client-side component, wrapping it inside a client component ensures that it will be properly rendered on the client side. In Next.js, you can mix server and client components, and this setup ensures that the ReservationProvider runs only on the client side, while the rest of the layout can still handle server-side rendering. Yes, ReservationProvider will only work for client-side children not server-side children*/}
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
