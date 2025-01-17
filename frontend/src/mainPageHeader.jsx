import { Search } from "../assets/search";
import { Dark } from "../assets/nightmod";
import { Light } from "../assets/lightmod";
import { Profile } from "../assets/profile";

export function MainHeader({ isDark,setDark}) {
  return (
    <header className="bg-blue-400 w-full h-20 flex items-center justify-between px-6 md:px-10 ">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="../assets/logo.jpg" alt="logo" className="w-12 h-12 object-cover" />
        <b className="ml-3  text-lg">100x Devs</b>
      </div>

      {/* Search, Theme Toggle, and Profile Section */}
      <div className="flex items-center gap-4">
        <div className="cursor-pointer w-8">
        <Search/>

        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => {
            document.querySelector("html").classList.toggle("dark");
            setDark(!isDark)
          }}
          className="cursor-pointer flex items-center justify-center w-8"
          aria-label="Toggle Theme"
        >
          {isDark ? <Light /> : <Dark />}
        </button>

        {/* Profile Section */}
        <div className="w-10 h-10 flex items-center justify-center">
          <Profile />
        </div>
      </div>
    </header>
  );
}
