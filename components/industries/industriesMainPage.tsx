import { builder } from "@/api/builder";
import { Button, Flex, Modal } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { IndustryModal } from "./industriesModal";
import IndustryTable from "../data/industryTable";

export interface CreateIndustryModalProps {
  opened: boolean;
  component: ReactNode;
}

export function IndustriesMainPage() {
  const [industryList, setIndustryList] = useState([]);
  const [createIndustryModal, setCreateIndustryModal] =
    useState<CreateIndustryModalProps>({
      opened: false,
      component: null,
    });
  const { data } = useQuery({
    queryFn: () => builder.use().users.industry_list(),
    queryKey: builder.users.industry_list.get(),
    select: (data) => data?.data?.data,
  });

  return (
    <Flex
      bg="#f8f5ff"
      direction="column"
      className="flex-1 w-full"
      align="center"
      justify="center">
      <Button
        variant="action"
        className="text-white"
        c="grey.0"
        my={30}
        onClick={() => {
          setCreateIndustryModal({
            opened: true,
            component: <IndustryModal setClose={setCreateIndustryModal} />,
          });
        }}>
        Create New Industry
      </Button>
      <IndustryTable industryList={data} />
      <Modal
        opened={createIndustryModal.opened}
        onClose={() => {
          setCreateIndustryModal({
            opened: false,
            component: null,
          });
        }}>
        {createIndustryModal.component}
      </Modal>
    </Flex>
  );
}
