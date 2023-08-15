import { usePortal } from "@ibnlanre/portal";
import { Avatar, Indicator } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { HamburgerButton } from "./hamburger";
import { useDisclosure } from "@mantine/hooks";
import { DrawerContent } from "../dashboard/drawer";

interface ClientDetailsProps {
  email: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
  token: string;
}

interface ModalType {
  opened: boolean;
  close: () => void;
}

export function ClientDetails() {
  const [counter, setCounter] = usePortal.local<ClientDetailsProps | undefined>(
    "key",
    undefined
  );
  const [openDrawer, { open: opened, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <div className="flex gap-40 items-center">
      <section className="w-44 h-44 rounded-full p-1 bg-[#FAF5FF]">
        <Indicator inline color="red" withBorder processing size={10}>
          <Avatar size="30" src="/bell.svg" />
        </Indicator>
      </section>

      <div className="flex gap-30 items-center">
        <section className="flex gap-12 items-center">
          <figure className="relative w-44 h-44 rounded-full">
            <Image
              src={counter?.profile_picture}
              alt="Client Name"
              fill
              className="!rounded-full"></Image>
          </figure>
          <figcaption className="text-[var(--secondary-500)] text-16 font-semibold">
            {counter?.first_name} {counter?.last_name}
          </figcaption>
        </section>
        <section>
          <figure className="relative w-20 h-20 aspect-square max-[768px]:hidden">
            <Image src="/arrow-down.png" alt="arrow down icon" fill></Image>
          </figure>
          <button className="min-[768px]:hidden">
            <HamburgerButton onClick={opened} />
          </button>
        </section>
        <DrawerContent opened={openDrawer} close={closeDrawer} />
      </div>
    </div>
  );
}
