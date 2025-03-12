import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Omer Yahya
      <Link href="/contact">
        <button className="ml-20 border-4 bg-amber-400">
          contact
        </button>
      </Link>
    </div>
  );
}
