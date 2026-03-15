import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> test</button>
      <UserButton />
   </div>
  );
}
