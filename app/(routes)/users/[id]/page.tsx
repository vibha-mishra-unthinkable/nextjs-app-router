import dynamic from "next/dynamic";
import { Suspense } from "react";
// import UserDetails from './../../../views/UserDetails/UserDetails';

const UserDetails = dynamic(
  () => import("../../../../views/UserDetails/UserDetails"),
  {
    ssr: false, // Ensure this component is server-side rendered
  }
);
type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
};
async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("User not found");
  return res.json();
}
//only for server components
//if you want to use this in client components, you need to use a different approach like SWR or React Query
//or you can use the same fetchUser function in client components but it will not be server-side rendered
//and will not have the benefits of server-side rendering like SEO and performance
export async function generateMetadata({ params }: any) {
  const user = await fetchUser(params.id);
  return {
    title: `User ${user.name}`,
    description: `Details for user ${user.name} with email ${user.email}.`,
  };
}
export default async function UserPage({ params }: any) {
  const user = await fetchUser(params.id);

  return (
    <Suspense fallback={null}>
      <UserDetails user={user} />
    </Suspense>
  );
}
