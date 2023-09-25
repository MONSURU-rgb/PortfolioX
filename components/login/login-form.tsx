import Link from "next/link";
import React, { ComponentProps, Ref, useEffect, useState } from "react";
import { Loader, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { cookieStorage, usePortal } from "@ibnlanre/portal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";

interface ButtonProps extends ComponentProps<"button"> {
  text?: string;
  loading?: boolean;
}

export interface LoggedInUserProps {
  email: string;
  first_name: string;
  last_name: string;
  token: string;
}

export interface LogIn {
  email: string;
  password: string;
}

export function Button(props: ButtonProps) {
  const { loading, ...rest } = props;
  const buttonRef: Ref<HTMLButtonElement> = React.createRef();

  return (
    <>
      <button
        type="submit"
        ref={buttonRef}
        className="uppercase text-white text-center text-20 font-bold rounded bg-[var(--violet)] py-20 hover:opacity-70 flex gap-4 justify-center items-center disabled:opacity-75"
        disabled={loading}>
        <span>Continue</span> {loading && <Loader size="sm" />}
      </button>
    </>
  );
}

interface IProgress {
  email: string;
  password: string;
}

export function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [authUser, setAuthUser] = usePortal.cookie<{}>("key", {});

  const { push } = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values: IProgress) => ({
      email: values.email.match(/^\S+@email\.com$/) ? null : "Invalid email",
      password:
        values.password.length > 8
          ? null
          : "Password must contain eight characters including one uppercase letter, one lowercase letter, and one number or special character.",
    }),
  });

  const values = form.values;

  const { mutate, isLoading } = useMutation({
    mutationFn: async (values: LogIn) =>
      await builder.use().account.api.sign_in(values),
    mutationKey: builder.account.api.sign_in.get(),
    onSuccess: (values) => {
      cookieStorage.setItem("my-user", JSON.stringify(values?.data));
      toast.success("Logged in successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
      push("/dashboard");
    },
  });

  return (
    <div className="min-[860px]:w-1/2 flex flex-col pt-56 gap-69 !justify-center h-[calc(100vh-88px)] overflow-clip">
      <section className="grid gap-[clamp(13px,1.2vw,19px)]">
        <article>
          <h3 className="text-20 font-semibold text-[var(--semibold-color)]">
            Welcome to Portfoliox,
          </h3>
          <h2 className="font-bold text-35 text-[var(--violet)]">
            Sign in to your Dashboard
          </h2>
        </article>
        <h3 className="text-20 font-semibold text-[var(--semibold-color)]">
          Input your admin email and password.
        </h3>
      </section>

      <section className="flex flex-col gap-40">
        <form
          className="flex flex-col gap-60"
          onSubmit={form.onSubmit((values) => {
            mutate(values);
          })}>
          <section className="flex flex-col gap-40">
            <TextInput
              type="email"
              label="Email"
              placeholder="Enter email"
              classNames={{
                label: "text-[var(--violet)] text-20 font-semibold",
                wrapper: "!py-2  rounded border border-[var(--violet)]",
              }}
              styles={{
                root: {
                  display: "flex !important",
                  flexDirection: "column",
                  gap: "10px !important",
                },
                input: {
                  color: "black !important",
                  "&::placeholder": {
                    color: "black !important",
                  },
                  "&outlined": {
                    outline: "none",
                  },
                },
              }}
              {...form.getInputProps("email")}
            />

            <PasswordInput
              error={values.password}
              label="Password"
              placeholder="Enter password"
              classNames={{
                label: "text-[var(--violet)] text-20 font-semibold",
                wrapper: "!py-2 rounded border border-[var(--violet)]",
              }}
              styles={{
                root: {
                  display: "flex !important",
                  flexDirection: "column",
                  gap: "10px !important",
                  "&::error": {
                    border: "1px solid red !important",
                  },
                },
                innerInput: {
                  color: "black !important",
                  "&::placeholder": {
                    color: "black !important",
                  },
                },
                wrapper: {
                  error: {
                    outline: "none !important",
                  },
                },
                error: {
                  wrapper: {
                    border: "1px solid red !important",
                  },
                },
              }}
              {...form.getInputProps("password")}
            />
          </section>
          <Button loading={isLoading} type="submit" />
        </form>

        <Link
          href="/"
          className="text-[var(--violet)] text-20 font-semibold text-center">
          Forgot your password?
        </Link>

        <ToastContainer />
      </section>
    </div>
  );
}
