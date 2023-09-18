import { MantineThemeOverride, rem } from "@mantine/core";

//To use headers in mantine, use the title component wwith the order attribute

export const theme: MantineThemeOverride = {
  primaryColor: "blue",

  colors: {
    grey: [],
  },
  headings: {
    sizes: {
      h1: {
        fontSize: rem(40),
        fontWeight: "700",
        lineHeight: "140%",
      },
      h2: {
        fontSize: rem(30),
        fontWeight: "600",
        lineHeight: "120%",
      },
    },
  },

  components: {
    TextInput: {
      variants: {
        primary(theme) {
          return {
            root: {
              display: "flex !important",
              flexDirection: "column",
              gap: "10px !important",
              flexGrow: 1,
              background: "#f8f8f8",
            },
            input: {
              color: "black !important",
              background: "#f8f5ff !important",
              paddingInline: "10px !important",
              "&::placeholder": {
                color: "black !important",
              },
              "&outlined": {
                outline: "none",
              },
            },
            label: {
              color: "#000",
              fontSize: "clamp(15px,1.4,20px)",
              fontWeight: 600,
            },
            wrapper: {
              paddingBlock: "8px",
              borderRadius: "4px",
              border: "1px solid #000",
            },
          };
        },
      },
    },

    Button: {
      variants: {
        white(themes) {
          return {
            root: {
              background: "#f8f8f8 !important",
              color: "black !important",
              marginTop: "10px !important",
            },
          };
        },
      },
    },
  },
};
