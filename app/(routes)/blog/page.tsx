// 'use client';

import Link from 'next/link';

// import { useEffect } from 'react';
export default async function Blog() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });
  const posts = await res.json();
  return (
    <div>
      <h1>Blog Posts(SSG)</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>

      <ul>
        {posts?.slice(10, 15)?.map((post: any) => (
          <li key={post}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
