import React from "react";
import { Drawer, Button, Group } from "@mantine/core";
import { FirstSidebarList } from "../sidebar/first-side-bar-list";
import { SecondSideBarList } from "../sidebar/second-side-bar-list";
interface ModalType {
  opened: boolean;
  close: () => void;
  placeholder?: string;
}

export function DrawerContent({ opened, close }: ModalType) {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      title=""
      overlayProps={{ opacity: 0.5, blur: 4 }}
      size="260px"
      styles={{
        body: {
          height: "100%",
        },
      }}
      transitionProps={{
        duration: 0,
      }}>
      <div className="flex justify-between min-h-[calc(100%-56px)] flex-col">
        <FirstSidebarList />
        <SecondSideBarList />
      </div>
    </Drawer>
  );
}
