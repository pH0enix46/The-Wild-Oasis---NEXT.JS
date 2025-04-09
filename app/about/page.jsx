// // //
import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/about-1.jpg";
import { getCabins } from "../_library/database/data-service";

export const metadata = {
  title: "About",
};

export const revalidate = 86400; // 1 per day, caching

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-[var(--color-accent-400)] font-medium border-b-2 w-fit border-b-[var(--color-accent-600)]">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8 text-[var(--color-primary-200)] text-xl">
          <p>
            Where nature's beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it's not just about the luxury cabins.
            It's about the experience of reconnecting with nature and enjoying
            simple pleasures with family
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you'll find in the surrounding mountains. Wander
            through lush forests, breathe in the fresh air, and watch the stars
            twinkle above from the warmth of a campfire or your hot tub
          </p>
          <p>
            This is where memorable moments are made, surrounded by nature's
            splendor. It's a place to slow down, relax, and feel the joy of
            being together in a beautiful setting
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          className="shadow shadow-gray-500 rounded-lg border-2 border-gray-500"
          placeholder="blur"
          quality={80}
        />
      </div>

      {/* note */}
      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-2.jpg"
          fill
          alt="Family that manages The Wild Oasis"
          className="shadow shadow-gray-500 rounded-lg border-2 border-gray-500 object-cover"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-[var(--color-accent-400)] font-medium border-b-2 w-fit border-b-[var(--color-accent-600)]">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8 text-[var(--color-primary-200)] text-xl">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment
          </p>
          <p>
            Over the years, we've maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you're not just a
            guest; you're part of our extended family. So join us at The Wild
            Oasis soon, where tradition meets tranquility, and every visit is
            like coming home
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-[var(--color-accent-600)] px-6 py-5 text-[var(--color-primary-800)] text-lg font-semibold hover:bg-[var(--color-accent-500)] transition-all rounded-md shadow shadow-gray-300"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
