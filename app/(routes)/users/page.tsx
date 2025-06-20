// app/users/page.tsx
import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
};

export async function generateMetadata() {
  return {
    title: "Users",
    description: "List of users in the application.",
  };
}

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 transition"
          >
            <Link href={`/users/${user.id}?isActive=${false}`}>
              <div className="text-lg font-semibold text-blue-600 hover:underline">
                {user.name}
              </div>
              <p className="text-sm text-gray-600">{user.email}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
