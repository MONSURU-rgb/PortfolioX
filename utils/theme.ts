import { MantineThemeOverride, rem } from "@mantine/core";

//To use headers in mantine, use the title component wwith the order attribute

export const theme: MantineThemeOverride = {
  primaryColor: "blue",

  colors: {
    grey: ["#ffffff", "#ffffff", "#ffffff"],
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
        action(themes) {
          return {
            root: {
              background: "#000 !important",
              marginTop: "10px !important",
              textDecoration: "uppercase",
              textAlign: "center",
              paddingBlock: "20px",
              fontWeight: "bold",
              borderRadius: "5px !important",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              height: "fit-content",
              //for your custom color to work while having padding block on your Button component, you have to set the height to fit-content.

              "&:hover": {
                opacity: "0.7",
              },
              "&disabled": {
                opacity: "0.75",
              },
            },
          };
        },
      },
    },
  },
};

//"uppercase text-white text-center text-20 font-bold rounded bg-[var(--violet)] py-20 hover:opacity-70 flex gap-4 justify-center items-center disabled:opacity-75"

//To style a pseudoElement you have to append the amperand character in a string and input the styles in an object.
