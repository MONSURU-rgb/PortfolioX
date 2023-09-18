import { NavBarCommon } from "@/components";
import { Sidebar } from "../sidebar/sidebar";

export function IndustriesMain() {
  return (
    <div className="bg-[var(--light-bg)] flex">
      <Sidebar />
      <div className="ml-260 !w-full bg-[var(--lightbg)] max-[768px]:!ml-0">
        <NavBarCommon />
        <IndustriesMainPage />
      </div>
    </div>
  );
}

export function IndustriesMainPage() {
  return <div className="p-30">tsqdtfwdw</div>;
}

//STEPS TO SET UP YOUR BUILDER

/* create an env file and put your baseurl their
create an axios instance for your localhost backend
create a builder or add to your existing builder, the endpoint to get list of users from your local db
use useQuery to fetch list of users in your users.tsx file and them map through the data to render li elements in a ul tag
At the top of your page before the ul, create a form to take first_name, last_name, email and department and a button to submit the form
use useMutation for the post request to your local backend
have a queryClient.invalidateQueries() to refetch your users get endpoint onSucces

To use the tanstack react table;
import and render the BMS table component where you want to render the table
Create the table data,
create the table columns {
  we are exporting the data and the column.
  in the table your accessor key should match the data key's
}

HOW TO BRING THE DATA AND THE COLUMNS into the bms table

You should not touch the bms table

just pass the table output from useCustomTable as a table prop to the bmsTable

declare const {table} = useCustomTable({
  tableData: licenseData, //table data variable
  columns: licenseColumns, //column
}), which takes in an object as a paramter

*/
