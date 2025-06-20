"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const UserDetails = ({ user }) => {
  const searchParams = useSearchParams();
  useEffect(() => {
    fetch(`jdshj`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming you want to update the user state with fetched data
        // This is just a placeholder, as the user prop is passed from the parent component
        console.log("Fetched User Data:", data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const isActive = searchParams.get("isActive");
  console.log("isActive", typeof isActive, isActive);
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <Link href={"/users"}>
        <h1 className="text-3xl font-bold mb-4">Go to Users</h1>
      </Link>
      <h1 className="text-3xl font-bold mb-4">{user?.name}</h1>
      <div className="bg-white shadow rounded-lg p-6 space-y-2">
        <p>
          <span className="font-semibold text-emerald-400">Username:</span>{" "}
          {user?.username}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {user?.phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span> {user?.website}
        </p>
        <p>
          <span className="font-semibold">Company:</span> {user.company.name}
        </p>
        <p>
          <span className="font-semibold">Catch Phrase:</span>{" "}
          {user.company.catchPhrase}
        </p>
        <p>
          <span className="font-semibold text-orange-500">Address:</span>{" "}
          {user.address.suite}, {user.address.street}, {user.address.city} -{" "}
          {user.address.zipcode}
        </p>
        <p>
          <span className={"font-semibold text-orange-500"}>Status:</span>{" "}
          <span
            className={`font-semibold text-orange-500 ${
              isActive === "true" ? "text-green-800" : "text-red-800"
            }`}
          >
            {isActive === "true" ? "Active" : "Inactive"}
          </span>
        </p>
      </div>
    </main>
  );
};

export default UserDetails;
