import Logout from "@/public/logout";
import Settings from "@/public/settings";
import { cookieStorage } from "@ibnlanre/portal";
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

const listItem = sideBarFooterList;

export function SecondSideBarList() {
  const { push, asPath } = useRouter();
  const activeCheck = (link: string) => link === asPath;
  return (
    <div className="px-[10px] flex flex-col gap-24">
      <span
        className={`flex gap-18 w-full pl-18 items-center rounded cursor-pointer ${
          activeCheck(listItem[0].path)
            ? "text-[var(--violet)] bg-[#F8F5FF]"
            : "text-[#A6ACB8]"
        }`}
        key={listItem[0].title}>
        <figure
          className={`relative w-20 h-20 ${
            activeCheck(listItem[0].path)
              ? "text-[var(--violet)]"
              : "text-[#A6ACB8]"
          }`}>
          {listItem[0].icon}
          {/* <Image src={listItem.icon} fill alt="dashboard Image"></Image> */}
        </figure>
        <h2 className="text-18 font-medium">{listItem[0].title}</h2>
      </span>
      <span
        className={`flex gap-18 w-full pl-18 items-center rounded text-[#A6ACB8] cursor-pointer`}
        key={listItem[1].title}
        onClick={() => {
          cookieStorage.clear();
          push("/");
        }}>
        <figure
          className={`relative w-20 h-20 ${
            activeCheck(listItem[1].path)
              ? "text-[var(--violet)]"
              : "text-[#A6ACB8]"
          }`}>
          {listItem[1].icon}
          {/* <Image src={listItem.icon} fill alt="dashboard Image"></Image> */}
        </figure>
        <h2 className="text-18 font-medium">{listItem[1].title}</h2>
      </span>
    </div>
  );
}
