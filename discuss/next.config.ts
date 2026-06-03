import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* Shouldn't really be disabled in a real application, but it bothers me. */
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
