import Link from "next/link";

export default function HomeLeftSide() {
  return (
    <div className="p-2 rounded sm:flex flex-col hidden">
      <div className="flex flex-col gap-2">
        {[
          "🏘️ Home",
          "📙 Listings",
          "🎙️ Podcasts",
          "🎥 Videos",
          "🏷️ Tags",
          "🙋 FAQ",
          "📮 Sponsors",
          "📙 About",
          "📞 Contact",
          "🏆 Guides",
          "‍💻 Software comparisons",
        ].map((i, index) => (
          <Link
            href="/"
            key={index}
            className="p-2 text-sm rounded hover:!bg-indigo-700 transition-all hover:underline bg-indigo-100/0 text-zinc-400 hover:!text-white"
          >
            {i}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="text-sm font-bold">Other</div>
        {["🏘️ Code of Conduct", "📙 Privacy Policy", "🎙️ Terms of use"].map(
          (i, index) => (
            <Link
              href="/"
              key={index}
              className="p-2 text-sm rounded hover:!bg-indigo-700 transition-all hover:underline bg-indigo-100/0 text-zinc-400 hover:!text-white"
            >
              {i}
            </Link>
          )
        )}
      </div>

      <div className="flex mt-3 gap-2">
        {["➤", "😺", "😋", "👌", "😍"].map((i, index) => (
          <Link
            key={index}
            href="/"
            className="p-2 text-sm rounded hover:!bg-indigo-700 transition-all hover:underline bg-indigo-100/0 text-zinc-400 hover:!text-white"
          >
            {i}
          </Link>
        ))}

      </div>

      <div className="flex flex-col bg-zinc-900 rounded p-2 border  mt-3 border-zinc-800">
        <p className="text-lg font-bold">
          Easiest way to help the DEV community feel more like a community?
        </p>
        <p className="text-sm mt-1">
          Head over to our{" "}
          <span className="text-blue-600 underline">Welcome Thread</span> greet
          some new DEV members!
        </p>
      </div>
    </div>
  );
}
