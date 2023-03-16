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
} from "@tabler/icons-react";
import Link from "next/link";

const SidebarItem = ({ icon: Icon, text, href }) => (
  <li>
    <Link href={href || "#"}>
      <div className="flex items-center gap-x-3.5 rounded-md py-2 px-2.5 text-sm text-slate-700 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300">
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
    <div className="hs-accordion-toggle flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-2.5 text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:hs-accordion-active:text-white">
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
  return (
    <>
      <div
        id="docs-sidebar"
        className="hs-overlay scrollbar-y dark:scrollbar-y fixed top-0 left-0 bottom-0 z-[60] -translate-x-full transform overflow-y-auto bg-gray-800 pt-4 pb-10 transition-all duration-300 hs-overlay-open:translate-x-0 lg:right-auto lg:bottom-0 lg:block lg:translate-x-0"
      >
        <div className="px-6">
          <Link className="flex items-center space-x-4" href="/">
            <IconCircleDashed className="h-8 w-auto text-violet-400" />
            <h1 className="text-xl font-semibold tracking-tight text-gray-700">
              Task Lab
            </h1>
          </Link>
        </div>
        <nav
          className="hs-accordion-group flex w-full flex-col flex-wrap p-6"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <SidebarItem icon={IconHome} text="Dashboard" href="/" />

            <SidebarAccordion titleIcon={IconBrandAsana} title="Projects">
              <SidebarItem
                icon={IconLayoutKanban}
                text="Task Management"
                href="/projects"
              />
              <SidebarItem
                icon={IconSettings}
                text="Project Settings"
                href="/project-settings"
              />
            </SidebarAccordion>

            <SidebarAccordion titleIcon={IconUser} title="Account">
              <SidebarItem icon={IconSettings} text="Account Settings" />
              <SidebarItem
                icon={IconUserCircle}
                text="Profile"
                href="/account"
              />

              <SidebarItem
                icon={IconCreditCard}
                text="Billing"
                href="/billing"
              />
            </SidebarAccordion>

            <SidebarItem icon={IconCalendar} text="Calendar" href="/calendar" />

            <SidebarItem
              icon={IconBook}
              text="Documentation"
              href="https://github.com/trdotpy/tasklab"
            />
          </ul>

          <h2 className="mt-8 mb-4 text-sm font-medium text-gray-400">Tags</h2>
          <ul className="grid">
            <li className="flex items-center rounded-lg py-2 px-4 text-center dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300">
              <span className="mr-2 h-2 w-2 rounded-sm bg-red-500"></span>
              <span className="text-sm text-gray-400">Red</span>
            </li>
            <li className="flex items-center rounded-lg py-2 px-4 text-center dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300">
              <span className="mr-2 h-2 w-2 rounded-sm bg-green-500"></span>
              <span className="text-sm text-gray-400">Green</span>
            </li>
            <li className="flex items-center rounded-lg py-2 px-4 text-center dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300">
              <span className="mr-2 h-2 w-2 rounded-sm bg-purple-500"></span>
              <span className="text-sm text-gray-400">Purple</span>
            </li>
            <li className="flex items-center rounded-lg py-2 px-4 text-center dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300">
              <span className="mr-2 h-2 w-2 rounded-sm bg-yellow-500"></span>
              <span className="text-sm text-gray-400">Review</span>
            </li>
            <li className="flex items-center rounded-lg py-2 px-4 text-center dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300">
              <span className="mr-2 h-2 w-2 rounded-sm bg-orange-500"></span>
              <span className="text-sm text-gray-400">Meetings</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
