import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import OutlinedLink from "../buttons/OutlinedLink";
import { MdNotificationsNone } from "react-icons/md";
import OpenSideBarButton from "../buttons/OpenSideBarButton";
import NavbarAccountDropDown from "../dropdowns/NavbarAccountDropDown";

export default function NavBar() {
  return (
    <div className="flex shadow-xl items-center bg-zinc-900 border-b border-zinc-800 p-2 sticky top-0 left-0 w-full z-40">
      <div className="max-w-5xl flex items-center justify-between relative w-full mx-auto">
        <div className="flex items-center gap-3">
          <div className="sm:hidden">
            <OpenSideBarButton />
          </div>

          <div className="logo relative md:w-[6em] w-[5em] md:h-10 h-8">
            <Image
              alt="logo"
              src="/images/logo.svg"
              fill
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>

          <div className="relative sm:w-max w-0 overflow-hidden transition-all h-full">
            <input
              type="text"
              className="bg-black text-sm text-zinc-500 px-3 rounded border border-zinc-700 max-w-xs w-full py-2 h-full"
              placeholder="search for posts"
            />
            <div className="absolute top-2.5 right-2">
              <BiSearch size={17} className="fill-zinc-700" />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="sm:block hidden">
            <OutlinedLink link={"/"}>create post</OutlinedLink>
          </div>
          <div className="sm:hidden">
            <OutlinedLink link="/">
              <BiSearch size={22} />
            </OutlinedLink>
          </div>
          <OutlinedLink link={"/"}>
            <MdNotificationsNone size={22} />
          </OutlinedLink>

          <div>
            {/* The Avatar is inside navbar dropdown component */}
            <NavbarAccountDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
