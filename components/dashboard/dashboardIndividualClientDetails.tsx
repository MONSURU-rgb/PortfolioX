import { Avatar, Indicator } from "@mantine/core";
import Image from "next/image";

export function DashboardIndividualClientDetails({ name }: { name: string }) {
  return (
    <>
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
              className="!relative !rounded-full !w-44 !h-44"
            />

            <figcaption className="text-[var(--secondary-500)] text-16 font-semibold">
              {name}
            </figcaption>
          </section>
          <section>
            <figure className="relative w-20 h-20 aspect-square max-[768px]:hidden">
              <Image src="/arrow-down.png" alt="arrow down icon" fill></Image>
            </figure>
          </section>
        </div>
      </div>
    </>
  );
}
