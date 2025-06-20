"use client";

import { useState } from "react";

export default function TestErrorPage() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("This is a test error triggered during render.");
  }
  const handleClick = () => {
    throw new Error("This is a test error from /test-error");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Test Error Page</h2>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded"
        onClick={() => setShouldThrow(true)}
      >
        Trigger Error
      </button>
    </div>
  );
}
