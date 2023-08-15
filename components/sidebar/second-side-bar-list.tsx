import Logout from "@/public/logout";
import Settings from "@/public/settings";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type ListItem = {
  title: string;
  icon: ReactNode;
  path: string;
};

const sideBarFooterList = [
  {
    title: "Settings",
    icon: <Settings />,
    path: "/settings",
  },
  {
    title: "Log Out",
    icon: <Logout />,
    path: "/logout",
  },
];

export function SecondSideBarList() {
  const { push, asPath } = useRouter();
  const activeCheck = (link: string) => link === asPath;
  return (
    <div className="px-[10px] flex flex-col gap-16 pb-88">
      {sideBarFooterList.map((listItem: ListItem) => (
        <span
          className={`flex gap-18 w-full pl-18 items-center rounded ${
            activeCheck(listItem.path)
              ? "text-[var(--violet)] bg-[#F8F5FF]"
              : "text-[#A6ACB8]"
          }`}
          key={listItem.title}>
          <figure
            className={`relative w-20 h-20 ${
              activeCheck(listItem.path)
                ? "text-[var(--violet)]"
                : "text-[#A6ACB8]"
            }`}>
            {listItem.icon}
            {/* <Image src={listItem.icon} fill alt="dashboard Image"></Image> */}
          </figure>
          <h2 className="text-18 font-medium">{listItem.title}</h2>
        </span>
      ))}
    </div>
  );
}
