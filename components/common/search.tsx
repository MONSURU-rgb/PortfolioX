import React from "react";
import { SearchIcon } from "./search-icon";
import { Input, TextInput } from "@mantine/core";

export function Search() {
  return (
    <div>
      <Input.Wrapper required maw={264}>
        <TextInput
          icon={<SearchIcon />}
          placeholder="Search by customer..."
          max={264}
          // max="clamp(200px,16.5vw,264px)"
          classNames={{
            wrapper: "rounded-[5px] border border-[#CDCFD4]",
          }}
          styles={{
            input: {
              color: "#131212",
              "&::placeholder": "color: var(--search-input-color)]",
            },
          }}
        />
      </Input.Wrapper>
    </div>
  );
}
