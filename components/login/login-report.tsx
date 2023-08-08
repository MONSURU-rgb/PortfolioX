import Image from "next/image";
import React from "react";
import { ArrowUpward } from "./up-arrow";
import Link from "next/link";

export function LoginReport() {
  return (
    <div className="grid gap-[70px] max-[860px]:hidden w-1/2">
      <div className="self-center">
        <div className="flex flex-col gap-44 bg-[#FCFDFF] px-[50px]">
          <section
            className="flex flex-col gap-20 w-fit pt-40 px-24 drop-shadow-lg"
            style={{ borderTop: "1px dashed #757575" }}>
            <article className="flex flex-col gap-24">
              <h3 className="flex gap-32">
                <span className="text-18 text-[var(--violet)]">
                  Return on Investment (ROI){" "}
                </span>
                <span className="bg-[#F8F5FF] p-[6px] rounded">
                  <ArrowUpward />
                </span>
              </h3>
              <h2 className="flex items-baseline gap-4">
                <span className="text-[34px] text-[#18014A]">$79,760.00 </span>
                <span className="text-[14px] text-[var(--secondary-color)] align-bottom">
                  (USD)
                </span>
              </h2>
            </article>
            <p className="text-[12px] text-[var(--violet)] whitespace-nowrap pb-24">
              <span className="text-[#88BA29]">20%</span> increase compared to
              last week
            </p>
            <Link
              href="https://wintecprodpublicwebsite.blob.core.windows.net/sitefinity-storage/docs/default-source/student-life-documents/portfolio-example.pdf?sfvrsn=d6f0e033_4"
              download="portfolioX"
              className="text-white text-18 px-24 py-3 self-center whitespace-nowrap bg-[#18014A] rounded-lg hover:opacity-80 hover:scale-y-110 duration-500">
              Generate Report
            </Link>
          </section>
        </div>
      </div>

      <div className="grid gap-44">
        <div className="flex gap-32">
          <div className="rounded-xl bg-[var(--violet)] p-12 w-[50px] h-[50px] flex justify-center items-center aspect-square">
            <figure className="relative w-24 h-24">
              <Image src="/data.svg" alt="data icon" fill></Image>
            </figure>
          </div>

          <section className="flex flex-col gap-12">
            <h2 className="text-[var(--secondary-900)] text-24 font-semibold">
              Easy access to Data
            </h2>
            <p className="text-[var(--secondary-400)] text-16 max-w-[clamp(270px,30vw,408px)]">
              Easy access to investment data assists in making crucial
              investment decisions on behalf of the investors
            </p>
          </section>
        </div>

        <div className="flex gap-32">
          <div className="rounded-xl bg-[var(--violet)] p-12 !w-[50px] !h-[50px] flex justify-center items-center aspect-square">
            <figure className="relative !w-24 h-[24px]">
              <Image src="/card.svg" alt="data icon" fill></Image>
            </figure>
          </div>

          <section className="flex flex-col gap-12">
            <h2 className="text-[var(--secondary-900)] text-24 font-semibold">
              Use of multi-card payments
            </h2>
            <p className="text-[var(--secondary-400)] text-16 max-w-[clamp(270px,30vw,408px)]">
              Have more than one debit or credit card? Don't worry, we support
              payments using more than one card.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
