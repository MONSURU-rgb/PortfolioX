import Image from "next/image";
import React from "react";
import { CustomerListPagination } from "./customer-list-pagination";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";

function CustomerList() {
  const { data } = useQuery({
    queryFn: async () => await builder.use().users.fetch(),
    queryKey: builder.users.fetch.get(),
  });
  const customerList = data?.data?.data;
  console.log(data?.data?.data);
  return (
    <>
      <div className="py-40 px-34 flex gap-x-28 gap-y-30 flex-wrap justify-center">
        {customerList?.map((item?: any) => (
          <div
            className="pt-22 pl-20 pb-28 pr-30 bg-white flex flex-col gap-16 w-200 rounded-[10px] max-[403px]:flex-grow"
            key={item?.name}>
            <section className="flex gap-12 items-center justify-between">
              <figure className="relative w-44 h-44 rounded-full">
                <Image src="/clientname.png" fill alt="client Image"></Image>
              </figure>
              <h2 className="text-[var(--secondary-500)] text-16 font-semibold">
                {item?.client_first_name} {item?.client_last_name}
              </h2>
            </section>
            <section className="flex items-start justify-between">
              <article className="flex flex-col gap-1">
                <h3 className="text-[var(--violet)] text-[10px] font-semibold">
                  {item?.total_investment}
                </h3>
                <h4 className="text-[var(--violet)] text-[8.25px] font-normal">
                  {item?.client_industry?.industry_name}
                </h4>
              </article>

              <figure className="relative w-[14px] h-2">
                <Image
                  src={
                    item?.status === true
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
      {/* <CustomerListPagination /> */}
    </>
  );
}

export default CustomerList;
