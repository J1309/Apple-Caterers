import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 text-center">
      <div className="mx-auto max-w-xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-maroon">404</p>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900">Page not found</h1>
        <p className="text-gray-500">
          The page you are looking for is unavailable. You can return home or browse our menu.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
          <Link
            href="/"
            className="rounded-full bg-maroon px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#5a1f28]"
          >
            Go Home
          </Link>
          <Link
            href="/menu"
            className="rounded-full border border-maroon px-8 py-4 text-sm font-bold uppercase tracking-wider text-maroon transition-colors hover:bg-maroon hover:text-white"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
