import Link from "next/link";

export default function HomeRightSide() {
  return (
    <div className="lg:flex hidden flex-col gap-3">
      <div className="flex rounded overflow-hidden gap-[.1em] flex-col">
        <div className="img">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--oZIXSLEi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hzpzbmsxkn9gwh2tv0xa.png"
            alt=""
          />
        </div>
        <div className="font-bold py-2 px-3  bg-zinc-900">
          Lindone x DEV hackathon
        </div>
        {[
          "Announcing the Linode + DEV Hackathon!",
          "Community Discussion Thread — Linode + DEV Hackathon",
          "Linode + DEV Hackathon Help Thread",
          "Unique Project Ideas for the Linode + DEV Hackathon",
        ].map((i, index) => (
          <Link
            key={index}
            className="py-2 hover:text-indigo-600 hover:underline transition-all px-3 text-xs text-zinc-300 bg-zinc-900"
            href={i}
          >
            {i}
          </Link>
        ))}
      </div>
      <div className="flex rounded overflow-hidden gap-[.1em] flex-col">
        <div className="flex items-center justify-between p-2 bg-zinc-900">
          <div className="font-bold">Listings</div>

          <Link href="/listings" className="text-sm text-blue-600 underline">
            see all{" "}
          </Link>
        </div>
        {[
          "💥 Maximize your model's performance with Jina AI's Finetuner 🚀. Try it now!",
          "PageRank Algorithm for Graph Databases",
          "Machine Learning / AI InsurTech Project Help",
          "Learning GitHub",
          "Talk to people who are on the same site | 🌐",
        ].map((i, index) => (
          <Link
            key={index}
            className="py-2 hover:text-indigo-600 hover:underline transition-all px-3 text-xs text-zinc-300 bg-zinc-900"
            href={i}
          >
            {i}
          </Link>
        ))}

        <Link
          href={"/"}
          className="p-2 text-sm  hover:!bg-indigo-700 transition-all hover:underline text-zinc-400 bg-zinc-900 text-center hover:!text-white"
        >
          create a listing
        </Link>
      </div>
    </div>
  );
}
