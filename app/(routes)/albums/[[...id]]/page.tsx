import React from 'react';
// optional catch all route
// This will match any route like /users/1, /users/2, /users/3, etc.
// and will pass the IDs as an array to the component
// e.g. /users/1/2/3 will pass { id: ['1', '2', '3'] } to the component
// also it will match /users/0, /users/1, /users/2, etc.

export default function Alubms({ params }: { params: { id: string[] } }) {
    console.log('Album All IDs:', params);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Optional Catch All Album Path</h1>
      <p className="mt-2 text-gray-700">
        IDs from the URL: <strong>{params.id?.join(', ')}</strong>
      </p>
    </div>
  );
}