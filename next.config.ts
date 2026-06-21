import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <-- Esta línea le dice a Next.js que genere HTML/CSS estático
  images: {
    unoptimized: true, // Requerido por Next.js para exportaciones estáticas
  },
};

export default nextConfig;