import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-5 space-y-4">
      <h2 className="text-xl font-bold">MyApp</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/users" className="hover:underline">
          Users
        </Link>
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/blog" className="hover:underline">
          Blogs
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/test-error" className="hover:underline">
          Test Error
        </Link>
        <Link href="/not-found" className="hover:underline">
          Not Found
        </Link>

        <Link href="/random-page">Broken Link</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
