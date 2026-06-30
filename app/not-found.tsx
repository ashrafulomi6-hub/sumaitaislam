import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-semibold text-primary">404</p>
      <h1 className="mt-4 font-display text-xl tracking-tight text-primary">Page not found</h1>
      <p className="mt-2 max-w-sm text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-primary px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
      >
        Back to home
      </Link>
    </main>
  );
}
