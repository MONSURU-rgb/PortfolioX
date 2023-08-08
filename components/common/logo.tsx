import Image from "next/image";
import React, { ComponentProps } from "react";

interface DivProps extends ComponentProps<"div"> {}

export function Logo({ className }: DivProps): React.ReactElement {
  return (
    <div className={`flex gap-2 !items-center justify-center", ${className}`}>
      <figure className="relative w-24 h-24">
        <Image src="/Vector.png" alt="logo" fill></Image>
      </figure>
      <h2 className="text-24 font-semibold text-[var(--violet)]">PortfoliX</h2>
    </div>
  );
}
