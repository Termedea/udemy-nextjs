'use client';
import Link from 'next/link';
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-4">Error Creating Snippet</h2>
      <p className="text-red-500 mb-4">{error.message}</p>
      <button onClick={reset} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
        Try Again
      </button>
    </div>
  );
}
