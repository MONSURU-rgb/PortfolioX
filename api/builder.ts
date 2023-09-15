import { createBuilder } from "@ibnlanre/portal";
import { API, APIInstance } from "./axios-config";
import { LoggedInUserProps } from "@/components/login/login-form";

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
    // My details api is expecting an id argument ,this is how we intaporlate your endpoint
  },
});

//builder.use().api.sign_in()
