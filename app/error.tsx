"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center h-screen text-center">
        <div>
          <h1 className="text-3xl font-bold text-red-600">
            Something went wrong
          </h1>
          <p className="mt-4">{error.message}</p>
          <button
            onClick={() => reset()}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
