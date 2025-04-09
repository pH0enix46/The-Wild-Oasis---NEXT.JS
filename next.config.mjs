// // //
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseHost = new URL(supabaseUrl).hostname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⏺ We use images in next.config.js to allow loading external images (like from Supabase) using next/image, more in note
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: supabaseHost,
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },

  // output: "export", // for ssg, note here
};

export default nextConfig;
