import Link from "next/link";
export default function OutlinedLink({ children, link }) {
  return (
    <Link
      href={link}
      className="hover:underline flex items-start justify-center bg-indigo-700/0 hover:bg-indigo-700 border border-indigo-700 text-indigo-700 hover:text-white active:scale-95 p-2 font-bold rounded active:bg-indigo-700 transition-all"
    >
      {children}
    </Link>
  );
}
