import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Dashboard",
    description: "Overview of your application’s performance and activity.",
  };
}

export default function Dashboard() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Users", value: "1,245", route: "/users" },
          { title: "Sales", value: "$38,400", route: "/sales" },
          { title: "Sessions", value: "4,203", route: "/sessions" },
        ].map((item, idx) => (
          <Link href={item.route} key={item as any}>
            <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-2xl font-semibold mt-1 ">{item.value}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Recent Activity */}
      <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500 border-b">
            <tr>
              <th className="pb-2">User</th>
              <th className="pb-2">Activity</th>
              <th className="pb-2">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              { user: "Alice", activity: "Logged in", date: "2025-06-19" },
              { user: "Bob", activity: "Purchased plan", date: "2025-06-18" },
              { user: "Charlie", activity: "Signed up", date: "2025-06-17" },
            ].map((entry, idx) => (
              <tr key={idx}>
                <td className="py-2">{entry.user}</td>
                <td className="py-2">{entry.activity}</td>
                <td className="py-2">{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
