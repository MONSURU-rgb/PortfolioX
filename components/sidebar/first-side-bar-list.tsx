import { useRouter } from "next/router";
import { sideBarList } from "./sidebarlist";
import Link from "next/link";
import { AddClientButton } from "..";
import { ReactNode } from "react";

type ListItem = {
  title: string;
  icon: ReactNode;
  path: string;
};

export function FirstSidebarList() {
  const { push, asPath } = useRouter();
  const activeCheck = (link: string) => link === asPath;

  return (
    <div>
      <div className="pt-51 px-[10px] flex flex-col gap-1">
        {sideBarList.map((listItem: ListItem) => (
          <Link href={listItem.path} key={listItem.title}>
            <span
              className={`flex gap-18 w-full pl-18 py-12 items-center rounded ${
                activeCheck(listItem.path)
                  ? "text-[var(--violet)] bg-[#F8F5FF]"
                  : "text-[#A6ACB8]"
              }`}>
              <figure
                className={`relative w-20 h-20 ${
                  activeCheck(listItem.path)
                    ? "text-[var(--violet)]"
                    : "text-[#A6ACB8]"
                }`}>
                {listItem.icon}
              </figure>
              <h2 className="text-18 font-medium">{listItem.title}</h2>
            </span>
          </Link>
        ))}
      </div>

      <section className="pl-28 pt-[25px]">
        <AddClientButton />
      </section>
    </div>
  );
}
