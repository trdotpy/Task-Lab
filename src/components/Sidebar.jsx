import { useUser } from "@auth0/nextjs-auth0/client";
import {
  IconBook,
  IconBrandAsana,
  IconCalendar,
  IconChevronDown,
  IconChevronUp,
  IconCircleDashed,
  IconCreditCard,
  IconHome,
  IconLayoutKanban,
  IconSettings,
  IconUser,
  IconUserCircle,
  IconLogout,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarItem = ({ icon: Icon, text, href }) => (
  <li>
    <Link href={href || "#"}>
      <div className="flex items-center gap-x-3.5 rounded-md py-2 px-2.5 text-sm text-jet-100 hover:bg-jet-600">
        <Icon className="h-4 w-auto" />
        {text}
      </div>
    </Link>
  </li>
);

const SidebarAccordion = ({ titleIcon: TitleIcon, title, children }) => (
  <li
    className="hs-accordion"
    id={`${title.toLowerCase().replace(/ /g, "-")}-accordion`}
  >
    <div className="hs-accordion-toggle flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-2.5 text-sm text-jet-100 hover:bg-jet-600 hs-accordion-active:text-bitter-500 hs-accordion-active:hover:bg-transparent">
      <TitleIcon className="h-4 w-auto" />
      {title}
      <IconChevronUp className="ml-auto hidden h-5 w-5 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-gray-400" />
      <IconChevronDown className="ml-auto block h-5 w-5 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-gray-400" />
    </div>
    <div
      id={`${title.toLowerCase().replace(/ /g, "-")}-accordion`}
      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
    >
      <ul
        className="hs-accordion-group pl-3 pt-2"
        data-hs-accordion-always-open
      >
        {children}
      </ul>
    </div>
  </li>
);

export default function Sidebar() {
  // const router = useRouter();

  // const handleLogout = async () => {
  //   router.push("/api/auth/logout");
  // };

  const { user } = useUser();

  return (
    <>
      <div
        id="docs-sidebar"
        className="hs-overlay scrollbar-y fixed top-0 left-0 bottom-0 z-[60] w-60 -translate-x-full transform overflow-y-auto bg-jet-800 pt-4 pb-10 transition-all duration-300 hs-overlay-open:translate-x-0 sm:right-auto sm:bottom-0 sm:block sm:translate-x-0"
      >
        <div className="px-6">
          <Link className="flex items-center" href="/">
            <IconCircleDashed className="h-7 w-auto text-bitter-500" />
            <h1 className="flex-none rounded px-3 py-1 text-xl font-semibold tracking-tight text-snow-100 hover:bg-gray-600">
              TaskLab
            </h1>
          </Link>
        </div>

        <nav
          className="hs-accordion-group flex w-full flex-col flex-wrap p-6"
          data-hs-accordion-always-open
        >
          <h2 className="my-4 text-sm font-medium text-jet-100">Home</h2>
          <ul className="space-y-1.5">
            <SidebarItem icon={IconHome} text="Dashboard" href="/" />

            <SidebarAccordion titleIcon={IconBrandAsana} title="Projects">
              <SidebarItem
                icon={IconLayoutKanban}
                text="Project Boards"
                href="/boards"
              />
              <SidebarItem
                icon={IconSettings}
                text="Project Settings"
                href="/projects/settings"
              />
            </SidebarAccordion>

            <SidebarAccordion titleIcon={IconUser} title="Account">
              <SidebarItem
                icon={IconSettings}
                text="Account Settings"
                href="/account"
              />
            </SidebarAccordion>

            <SidebarItem icon={IconCalendar} text="Calendar" href="/calendar" />

            <SidebarItem
              icon={IconBook}
              text="Documentation"
              href="https://github.com/trdotpy/Task-Lab"
            />
          </ul>

          <div>
            <h2 className="mt-8 mb-4 text-sm font-medium text-jet-100">Tags</h2>
            <ul className="grid">
              <li className="flex cursor-pointer items-center rounded-lg py-2 px-4 text-center hover:bg-jet-600">
                <span className="mr-2 h-2 w-2 rounded-sm bg-red-500"></span>
                <span className="text-sm text-jet-200">Red</span>
              </li>
              <li className="flex cursor-pointer items-center rounded-lg py-2 px-4 text-center hover:bg-jet-600">
                <span className="mr-2 h-2 w-2 rounded-sm bg-green-500"></span>
                <span className="text-sm text-jet-200">Green</span>
              </li>
              <li className="flex cursor-pointer items-center rounded-lg py-2 px-4 text-center hover:bg-jet-600">
                <span className="mr-2 h-2 w-2 rounded-sm bg-purple-500"></span>
                <span className="text-sm text-jet-200">Purple</span>
              </li>
              <li className="flex cursor-pointer items-center rounded-lg py-2 px-4 text-center hover:bg-jet-600">
                <span className="mr-2 h-2 w-2 rounded-sm bg-yellow-500"></span>
                <span className="text-sm text-jet-200">Yellow</span>
              </li>
              <li className="flex cursor-pointer items-center rounded-lg py-2 px-4 text-center hover:bg-jet-600">
                <span className="mr-2 h-2 w-2 rounded-sm bg-orange-500"></span>
                <span className="text-sm text-jet-200">Orange</span>
              </li>
            </ul>
          </div>

          <ul className="absolute bottom-0 w-full border-t border-jet-700 py-3">
            <UserAccordion title="Account" user={user}>
              <SidebarItem
                icon={IconLogout}
                text="Logout"
                href="/api/auth/logout"
              />
            </UserAccordion>
          </ul>
        </nav>
      </div>
    </>
  );
}

const UserAccordion = ({ title, children, user }) => (
  <li
    className="hs-accordion"
    id={`${title.toLowerCase().replace(/ /g, "-")}-accordion`}
  >
    <div className="hs-accordion-toggle flex cursor-pointer items-center gap-x-3 rounded-md py-2 px-2 text-sm text-jet-100 hover:bg-jet-600">
      <Image
        src={user?.picture}
        alt={user?.name}
        className="rounded"
        height={20}
        width={20}
      />
      <div className="grid">
        <p className="text-sm font-medium text-jet-100">{user?.name}</p>
      </div>
      <IconChevronDown className="ml-4 hidden h-5 w-5 text-jet-200 hs-accordion-active:block" />
      <IconChevronUp className="ml-4 block h-5 w-5 text-jet-200  hs-accordion-active:hidden" />
    </div>
    <div
      id={`${title.toLowerCase().replace(/ /g, "-")}-accordion`}
      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
    >
      <ul
        className="hs-accordion-group pl-3 pt-2"
        data-hs-accordion-always-open
      >
        {children}
      </ul>
    </div>
  </li>
);
