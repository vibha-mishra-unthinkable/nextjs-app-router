// 'use client';

import Link from 'next/link';
import { convertToUpper } from './utils';

// import { useEffect } from 'react';
export default async function About() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });
  const posts = await res.json();
  return (
    <div>
      <h1>About(SSG)</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/blog">Blog</Link>
      <ul>
        {posts?.slice(0, 5)?.map((post: any) => (
          <li key={post}>{post.title}</li>
        ))}
      </ul>
      <h3>{convertToUpper('vibhamishra')}</h3>
    </div>
  );
}
