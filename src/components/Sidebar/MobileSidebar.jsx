import { useUser } from "@auth0/nextjs-auth0/client";
import {
  IconBook,
  IconBrandAsana,
  IconCalendar,
  IconChevronDown,
  IconChevronUp,
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

const MobileSidebarItem = ({ icon: Icon, href }) => (
  <li>
    <Link href={href || "#"}>
      <div className="flex items-center justify-center rounded-md p-2 text-jet-100 hover:bg-jet-100">
        <Icon className="h-4 w-auto" />
      </div>
    </Link>
  </li>
);

export default function MobileSidebar() {
  const { user } = useUser();

  return (
    <>
      <div
        id="mobile-sidebar"
        className="fixed top-0 left-0 bottom-0 z-[60] block w-20 transform bg-jet-800 pt-4 pb-10 transition-all duration-300 sm:right-auto sm:bottom-0 sm:hidden sm:translate-x-0"
      >
        <div className="mb-6 flex flex-col items-center">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/drij60fru/image/upload/v1679461574/tasklab-white_p7r8mt.png"
              alt="TaskLab"
              height={25}
              width={25}
            />
          </Link>
        </div>
        <nav className="flex w-full flex-col flex-wrap p-6">
          <ul className="space-y-1.5">
            <MobileSidebarItem icon={IconHome} href="/" />
            <MobileSidebarItem icon={IconBrandAsana} href="/projects" />
            <MobileSidebarItem icon={IconLayoutKanban} href="/boards" />
            <MobileSidebarItem icon={IconSettings} href="/projects/settings" />
            <MobileSidebarItem icon={IconUser} href="/account" />
            <MobileSidebarItem icon={IconCalendar} href="/calendar" />
            <MobileSidebarItem
              icon={IconBook}
              href="https://github.com/trdotpy/Task-Lab"
            />
            <MobileSidebarItem icon={IconLogout} href="/api/auth/logout" />
          </ul>

          <section className="absolute bottom-0 w-full border-t border-jet-700 py-3 pl-1">
            {user && (
              <Image
                src={user.picture}
                alt={user.name}
                className="my-2 rounded"
                height={20}
                width={20}
              />
            )}
          </section>
        </nav>
      </div>
    </>
  );
}
