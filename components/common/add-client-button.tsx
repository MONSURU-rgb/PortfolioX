import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export function AddClientButton() {
  const { push } = useRouter();
  return (
    <button
      className="pl-12 py-10 bg-[var(--violet)] rounded flex gap-1 text-white text-14 pr-35 items-center"
      onClick={() => push("/add-client")}>
      <figure className="relative w-24 h-24">
        <Image src="/plus-sign.svg" fill alt="plus icon"></Image>
      </figure>
      <span>Add new Clients</span>
    </button>
  );
}
