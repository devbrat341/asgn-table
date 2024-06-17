import Image from "next/image";
import Table from "./component/Table";

const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/user", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function Home() {
  const { users } = await getUsers();
  return (
    <main className="container mx-auto py-4">
      <Table data= {users} />
    </main>
  );
}
