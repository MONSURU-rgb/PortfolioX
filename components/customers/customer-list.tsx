import Image from "next/image";
import React from "react";
import { customerDataList } from "./customer-data-list";
import { CustomerListPagination } from "./customer-list-pagination";

function CustomerList() {
  return (
    <>
      <div className="py-40 px-34 flex gap-x-28 gap-y-30 flex-wrap justify-center">
        {customerDataList.map((data) => (
          <div
            className="pt-22 pl-20 pb-28 pr-30 bg-white flex flex-col gap-16 w-200 rounded-[10px] basis-[23.4%]"
            key={data.name}>
            <section className="flex gap-12 items-center justify-between">
              <figure className="relative w-44 h-44 rounded-full">
                <Image src="/clientname.png" fill alt="client Image"></Image>
              </figure>
              <h2 className="text-[var(--secondary-500)] text-16 font-semibold">
                {data.name}
              </h2>
            </section>
            <section className="flex items-start justify-between">
              <article className="flex flex-col gap-1">
                <h3 className="text-[var(--violet)] text-[10px] font-semibold">
                  {data.amount}
                </h3>
                <h4 className="text-[var(--violet)] text-[8.25px] font-normal">
                  {data["stock-type"]}
                </h4>
              </article>

              <figure className="relative w-[14px] h-2">
                <Image
                  src={
                    data.status === "credit"
                      ? "/green-arrow.svg"
                      : "/red-arrow.svg"
                  }
                  fill
                  alt="Customer Status"></Image>
              </figure>
            </section>
          </div>
        ))}
      </div>
      <CustomerListPagination />
    </>
  );
}

export default CustomerList;
