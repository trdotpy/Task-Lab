import {
  IconUserPlus,
  IconLogout,
  IconUsers,
  IconUser,
} from "@tabler/icons-react";

export default function NavDropdown({ toggleNavDropdown, navDropdown }) {
  return (
    <>
      <div className="relative inline-block ">
        <div
          className={`absolute right-0 z-[60] mt-2 w-56 origin-top-right overflow-hidden rounded bg-white py-2 shadow-xl  ${
            navDropdown ? "block" : "hidden"
          }`}
          onClick={toggleNavDropdown}
        >
          <a
            href="#"
            className="flex transform items-center p-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100"
          >
            <IconUser className="mx-1 h-4 w-4" />
            <span className="mx-1">View profile</span>
          </a>

          <a
            href="#"
            class="flex transform items-center p-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100"
          >
            <IconUsers class="mx-1 h-5 w-5" />
            <span class="mx-1">Team</span>
          </a>

          <a
            href="#"
            class="flex transform items-center p-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100"
          >
            <IconUserPlus class="mx-1 h-5 w-5" />
            <span class="mx-1">Invite colleagues</span>
          </a>

          <hr class="border-gray-200 dark:border-gray-700 " />

          <a
            href="#"
            class="flex transform items-center p-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100"
          >
            <IconLogout class="mx-1 h-5 w-5" />
            <span class="mx-1">Sign Out</span>
          </a>
        </div>
      </div>
    </>
  );
}
