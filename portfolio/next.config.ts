/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: If you plan to use Next.js <Image /> components later, 
  // you must disable server-side image optimization for GitHub Pages:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;