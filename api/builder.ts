import { createBuilder } from "@ibnlanre/portal";
import { API, APIInstance, JsonServer } from "./axios-config";
import { LoggedInUserProps } from "@/components/login/login-form";
import { AddClientDetails } from "@/components/add-client/main-content-section";

export interface LoginData {
  email: string;
  password: string;
}

export const builder = createBuilder({
  account: {
    api: {
      sign_in: (data: Record<"email" | "password", string>) =>
        API.post<LoggedInUserProps>("/client/login/", data),
      forgot_password: (data: Record<"email" | "password", string>) =>
        API.post("/accounts/api/sign_in", data),
    },
  },
  users: {
    fetch: () => APIInstance.get("/client/client_list"),
    create: (data: AddClientDetails) =>
      APIInstance.post<AddClientDetails>(
        "/client/create_client_portfolio/",
        data
      ),
    fetch_id: (id: string) => APIInstance.get(`/client/client_list/${id}`),

    porfolio_list: () => JsonServer.get("/portfolio"),
    porfolio_transaction_list: () => JsonServer.get("/transaction_history"),
    // My details api is expecting an id argument ,this is how we intaporlate your endpoint
  },
});

//builder.use().api.sign_in()
