// import React, { useEffect, useMemo, useState } from "react";
// import {
//   MaterialReactTable,
//   type MRT_ColumnDef,
//   type MRT_ColumnFiltersState,
//   type MRT_PaginationState,
//   type MRT_SortingState,
// } from "material-react-table";
// import { ThemeProvider, createTheme } from "@mui/material";

// type UserApiResponse = {
//   data: Array<User>;
//   meta: {
//     totalRowCount: number;
//   };
// };

// type User = {
//   firstName: string;
//   lastName: string;
//   address: string;
//   state: string;
//   phoneNumber: string;
// };

// const Example = () => {
//   const defaultMaterialTheme = createTheme();
//   //data and fetching state
//   const [data, setData] = useState<User[]>([]);
//   const [isError, setIsError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isRefetching, setIsRefetching] = useState(false);
//   const [rowCount, setRowCount] = useState(0);

//   //table state
//   const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
//     []
//   );
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [sorting, setSorting] = useState<MRT_SortingState>([]);
//   const [pagination, setPagination] = useState<MRT_PaginationState>({
//     pageIndex: 0,
//     pageSize: 10,
//   });

//   //if you want to avoid useEffect, look at the React Query example instead
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!data.length) {
//         setIsLoading(true);
//       } else {
//         setIsRefetching(true);
//       }

//       const apiUrl =
//         "http://web-production-9c5b.up.railway.app/api/card/expert_cards/";

//       const url = new URL(apiUrl);
//       url.searchParams.set(
//         "start",
//         `${pagination.pageIndex * pagination.pageSize}`
//       );
//       url.searchParams.set("size", `${pagination.pageSize}`);
//       url.searchParams.set("filters", JSON.stringify(columnFilters ?? []));
//       url.searchParams.set("globalFilter", globalFilter ?? "");
//       url.searchParams.set("sorting", JSON.stringify(sorting ?? []));

//       //   const baseUrl =
//       //     process.env.NODE_ENV === "production"
//       //       ? "https://www.material-react-table.com"
//       //       : "http://localhost:3000";

//       //   const relativePath = "/api/data";
//       //   const url = new URL(relativePath, baseUrl);

//       //   const url = new URL(
//       //     "/api/data",
//       //     process.env.NODE_ENV === "production"
//       //       ? "https://www.material-react-table.com"
//       //       : "http://localhost:3000"
//       //   );
//       //   url.searchParams.set(
//       //     "start",
//       //     `${pagination.pageIndex * pagination.pageSize}`
//       //   );
//       //   url.searchParams.set("size", `${pagination.pageSize}`);
//       //   url.searchParams.set("filters", JSON.stringify(columnFilters ?? []));
//       //   url.searchParams.set("globalFilter", globalFilter ?? "");
//       //   url.searchParams.set("sorting", JSON.stringify(sorting ?? []));

//       const token =
//         localStorage.getItem("my-user") !== null
//           ? JSON.parse(localStorage.getItem("my-user") as string).token
//           : null;
//       console.log(token);

//       try {
//         const response = await fetch(url.href, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const json = (await response.json()) as UserApiResponse;
//         console.log(json);
//         setData(json.data);
//         setRowCount(json.meta.totalRowCount);
//       } catch (error) {
//         setIsError(true);
//         console.error(error);
//         return;
//       }
//       setIsError(false);
//       setIsLoading(false);
//       setIsRefetching(false);
//     };
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [
//     columnFilters,
//     globalFilter,
//     pagination.pageIndex,
//     pagination.pageSize,
//     sorting,
//   ]);

//   const columns = useMemo<MRT_ColumnDef<User>[]>(
//     () => [
//       {
//         accessorKey: "firstName",
//         header: "First Name",
//       },
//       //column definitions...
//       {
//         accessorKey: "lastName",
//         header: "Last Name",
//       },
//       {
//         accessorKey: "address",
//         header: "Address",
//       },
//       {
//         accessorKey: "state",
//         header: "State",
//       },
//       {
//         accessorKey: "phoneNumber",
//         header: "Phone Number",
//       },
//       //end
//     ],
//     []
//   );

//   return (
//     <ThemeProvider theme={defaultMaterialTheme}>
//       <MaterialReactTable
//         columns={columns}
//         data={data}
//         enableRowSelection
//         getRowId={(row) => row.phoneNumber}
//         initialState={{ showColumnFilters: true }}
//         manualFiltering
//         manualPagination
//         manualSorting
//         muiToolbarAlertBannerProps={
//           isError
//             ? {
//                 color: "error",
//                 children: "Error loading data",
//               }
//             : undefined
//         }
//         onColumnFiltersChange={setColumnFilters}
//         onGlobalFilterChange={setGlobalFilter}
//         onPaginationChange={setPagination}
//         onSortingChange={setSorting}
//         rowCount={rowCount}
//         state={{
//           columnFilters,
//           globalFilter,
//           isLoading,
//           pagination,
//           showAlertBanner: isError,
//           showProgressBars: isRefetching,
//           sorting,
//         }}
//       />
//     </ThemeProvider>
//   );
// };

// export default Example;
