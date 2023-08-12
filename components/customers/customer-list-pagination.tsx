import React, { useState } from "react";
import { customerDataList } from "./customer-data-list";
import { Pagination } from "@mantine/core";

export function CustomerListPagination() {
  const [activePage, setPage] = useState(1);

  const itemsPerPage = 10; // Number of items to display per page

  // Calculate the start and end indices of the items to display
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = customerDataList.slice(startIndex, endIndex);
  return (
    <div>
      <Pagination
        value={activePage}
        onChange={setPage}
        total={Math.ceil(customerDataList.length / itemsPerPage)}
        styles={(theme) => ({
          control: {
            "&[data-active]": {
              backgroundImage: theme.fn.gradient({
                from: "#000",
                to: "#000",
              }),
              border: 0,
            },
          },
        })}
      />
    </div>
  );
}
