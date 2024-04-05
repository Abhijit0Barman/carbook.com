import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>CarBook.com</h2>
      <div className="h-screen">
        <UserButton />
      </div>
    </div>
  );
}