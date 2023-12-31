"use client";
import { cookieStorage, usePortal } from "@ibnlanre/portal";
import { Avatar, Burger, Indicator } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HamburgerButton } from "./hamburger";
import { useDisclosure } from "@mantine/hooks";
import { DrawerContent } from "../dashboard/drawer";

interface ClientDetailsProps {
  email?: string;
  first_name?: string;
  last_name?: string;
  token: string;
}

interface ModalType {
  opened: boolean;
  close: () => void;
}

export function ClientDetails() {
  const [openDrawer, { open, close }] = useDisclosure(false);
  const [counter, setCounter] = useState<ClientDetailsProps>();
  useEffect(() => {
    const myUser = cookieStorage.getItem("my-user");
    setCounter(JSON.parse(myUser as string));
  }, []);

  return (
    <div className="flex gap-40 items-center">
      <section className="w-44 h-44 rounded-full p-1 bg-[#FAF5FF]">
        <Indicator inline color="red" withBorder processing size={10}>
          <Avatar size="30" src="/bell.svg" />
        </Indicator>
      </section>

      <div className="flex gap-30 items-center">
        <section className="flex gap-12 items-center">
          <Image
            src="/clientname.png"
            alt="Client Name"
            fill
            className="!relative !rounded-full !w-44 !h-44"></Image>

          <figcaption className="text-[var(--secondary-500)] text-16 font-semibold">
            {counter?.first_name} {counter?.last_name}
          </figcaption>
        </section>
        <section>
          <figure className="relative w-20 h-20 aspect-square max-[768px]:hidden">
            <Image src="/arrow-down.png" alt="arrow down icon" fill></Image>
          </figure>
          <button className="md:hidden">
            {/* <span onClick={open}>menu</span> */}
            <HamburgerButton onClick={open} />
            {/* <Burger opened={opened} onClick={open} /> */}
          </button>
        </section>
        <DrawerContent opened={openDrawer} close={close} />
      </div>
    </div>
  );
}
