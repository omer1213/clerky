// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       Omer Yahya
//       <Link href="/contact">
//         <button className="ml-20 border-4 bg-amber-400">
//           contact
//         </button>
//       </Link>
//       <h1 className="mt-20 border-1 border-b">the main page without authentivation...</h1>
//     </div>
//   );
// }


import Link from "next/link";

export default function Home() {
  return (
    <div>
      Omer Yahya
      <Link href="/contact">
        <button className="ml-20 border-4 bg-amber-400">
          Contact
        </button>
      </Link>


      <h1 className="mt-20 border-1 border-b">The main page without authentication...</h1>
    </div>
  );
}
