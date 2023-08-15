import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dispatch, SetStateAction } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface IAuthUser {
  first_name?: string;
  is_active?: boolean;
  last_name?: string;
  email?: string;
  user_picture?: string;
  token?: string;
}

const queryClient = new QueryClient();

export interface IContextType {
  authUser: IAuthUser | null;
  setAuthUser: Dispatch<SetStateAction<IAuthUser | null>>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <PortalProvider>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Component {...pageProps} />
      </QueryClientProvider>
    </MantineProvider>
    // </PortalProvider>
  );
}
