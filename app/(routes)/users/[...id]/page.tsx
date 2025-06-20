import React from 'react';
//catch-all route for dynamic user IDs
//This will match any route like /users/1, /users/2, /users/3, etc.
//and will pass the IDs as an array to the component
//e.g. /users/1/2/3 will pass { id: ['1', '2', '3'] } to the component

//This is a catch-all route, so it will match any number of segments after /users/
//If you want to match only one segment, use [id].tsx instead of [...id].tsx
export default function UserIdsPage({ params }: { params: { id: string[] } }) {
    console.log('User IDs:', params);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Catch All Dynamic Users Path</h1>
      <p className="mt-2 text-gray-700">
        IDs from the URL: <strong>{params.id?.join(', ')}</strong>
      </p>
    </div>
  );
}

//Next.js routing follows this precedence:

// Static > Dynamic > Catch-all > Optional Catch-all