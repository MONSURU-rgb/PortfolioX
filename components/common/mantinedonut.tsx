import { Box, Flex, Group, RingProgress, Text } from "@mantine/core";

export const detailslist = [
  { color: "black", text: "Civil Service" },

  { color: "#FF805D", text: "Service" },

  { color: "#FF9E2C", text: "Trading" },

  { color: "#C3FF44", text: "IT" },
];

export default function Donut({ size }: { size: number }) {
  return (
    <Group position="center">
      <RingProgress
        size={size}
        thickness={32}
        styles={{
          root: {
            display: "flex",
            justifyContent: "center !important",
            alignItems: "center",
            width: "100%",
          },
        }}
        label={
          <Text size="xs" align="center" px="xs" sx={{ pointerEvents: "none" }}>
            Top 4 Sector
          </Text>
        }
        sections={[
          { value: 40, color: "black", tooltip: "Civil Service" },
          { value: 25, color: "#FF805D", tooltip: "Service" },
          { value: 20, color: "#FF9E2C", tooltip: "Trading" },
          { value: 15, color: "#C3FF44", tooltip: "IT" },
        ]}
      />
    </Group>
  );
}

export function PieList() {
  return (
    <Flex
      direction="column"
      gap="16px"
      justify="center"
      wrap="wrap"
      className="!flex-cols max-[460px]:flex-row">
      {detailslist.map((item, idx) => (
        <Flex key={idx} align="center" gap="8px">
          <Box bg={item.color} w={17} h={17} className="rounded-[3px]"></Box>

          <Text>{item.text}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
