/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: blob: https://images.unsplash.com; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self'; form-action 'self';",
          },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  env: {
    NEXT_PUBLIC_CREATE_BASE_URL: process.env.NEXT_PUBLIC_CREATE_BASE_URL,
    NEXT_PUBLIC_CREATE_HOST: process.env.NEXT_PUBLIC_CREATE_HOST,
    NEXT_PUBLIC_PROJECT_GROUP_ID: process.env.NEXT_PUBLIC_PROJECT_GROUP_ID,
  },
  serverExternalPackages: ['@neondatabase/serverless', 'ws'],
  rewrites() {
    return [
      {
        source: '/fontawesome/:path*',
        destination: 'https://ka-p.fontawesome.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
