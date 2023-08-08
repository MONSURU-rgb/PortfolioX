import { usePortal } from "@ibnlanre/portal";
import { Avatar, Indicator } from "@mantine/core";
import Image from "next/image";
import React from "react";

interface ClientDetailsProps {
  email: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
  token: string;
}

export function ClientDetails() {
  const [counter, setCounter] = usePortal<ClientDetailsProps>("key");
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
        <figure className="relative w-20 h-20 aspect-square">
          <Image src="/arrow-down.png" alt="arrow down icon" fill></Image>
        </figure>
      </div>
    </div>
  );
}
