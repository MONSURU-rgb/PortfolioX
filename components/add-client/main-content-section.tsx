import { builder } from "@/api/builder";
import { Box, PasswordInput, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import router, { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
// import { TextInputComponent } from "../common/textInput";

interface AddClientDetails {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  security_question: string;
  security_answer: string;
}

export function MainContentSection() {
  const { push } = useRouter();
  const { mutate } = useMutation({
    mutationFn: async (values: AddClientDetails) =>
      await builder.use().account.api.sign_in(values),
    mutationKey: builder.account.api.sign_in.get(),
    onSuccess: (values) => {
      console.log(values?.data);
      toast.success("Logged in successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      push("/customer");
    },
  });
  const form = useForm({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      security_question: "",
      security_answer: "",
    },

    validate: (values: AddClientDetails) => ({
      first_name: values.first_name.match(/^[a-zA-Z]/)
        ? null
        : "Enter your first name",
      last_name: values.last_name.match(/^[a-zA-Z]/gi)
        ? null
        : "Enter your last name",
      email: values.email.match(/^\S+@email\.com$/) ? null : "Invalid email",
      password:
        values.password.length > 8
          ? null
          : "Password must contain eight characters including one uppercase letter, one lowercase letter, and one number or special character.",
      security_question: values.security_question.match(/^[a-zA-Z ]*$/)
        ? null
        : "please select the right response",
      answer: values.security_answer.match(/^[a-zA-Z]/)
        ? null
        : "Invalid Answer",
    }),
  });

  const values = form.values;

  return (
    <div className="bg-[var(--light-bg)] grid place-content-center flex-grow">
      <form
        onSubmit={form.onSubmit((values) => {
          mutate(values);
          console.log(values);
        })}
        className="flex flex-col gap-24 w-[clamp(240px,45vw,650px)] pt-30">
        {" "}
        <article className="flex gap-24 flex-wrap">
          <TextInput
            type="text"
            label="First Name"
            placeholder="Enter first name"
            classNames={{
              label: "text-[var(--violet)] text-20 font-semibold",
              wrapper: "!py-2  rounded border border-[var(--violet)]",
            }}
            styles={{
              root: {
                display: "flex !important",
                flexDirection: "column",
                gap: "10px !important",
                flexGrow: 1,
              },
              input: {
                color: "black !important",
                background: "#f8f5ff !important",
                "&::placeholder": {
                  color: "black !important",
                },
                "&outlined": {
                  outline: "none",
                },
              },
            }}
            {...form.getInputProps("first_name")}
          />
          <TextInput
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
            classNames={{
              label: "text-[var(--violet)] text-20 font-semibold",
              wrapper: "!py-2  rounded border border-[var(--violet)]",
            }}
            styles={{
              root: {
                display: "flex !important",
                flexDirection: "column",
                gap: "10px !important",
                flexGrow: 1,
              },
              input: {
                color: "black !important",
                background: "#f8f5ff !important",
                "&::placeholder": {
                  color: "black !important",
                },
                "&outlined": {
                  outline: "none",
                },
              },
            }}
            {...form.getInputProps("last_name")}
          />
        </article>
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
              background: "#f8f5ff !important",
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
              background: "#f8f5ff !important",
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
        <article className="flex w-full gap-24 flex-wrap">
          <Select
            label="Security Question"
            placeholder="What is your security question"
            data={[
              { value: "mother", label: "What is your mother's maiden name" },
              { value: "Unique", label: "What is your primary school name" },
            ]}
            // className="!w-1/2 !truncate text-[var(--violet)] text-20 font-semibold rounded"
            classNames={{
              label: "text-[var(--violet)] text-20 font-semibold",
              wrapper: "!py-2  rounded border border-[var(--violet)]",
            }}
            styles={{
              root: {
                display: "flex !important",
                flexDirection: "column",
                gap: "10px !important",
                borderRadius: "5px !important",
                flexGrow: 1,
              },
              wrapper: { background: "#f8f5ff !important" },
              input: {
                color: "black !important",
                height: "100% !important",
                "&::placeholder": {
                  color: "black !important",
                },
                "&outlined": {
                  outline: "none",
                },
              },
            }}
            {...form.getInputProps("security_question")}
          />
          <TextInput
            type="text"
            label="Answer"
            placeholder="Enter your answer"
            classNames={{
              label: "text-[var(--violet)] text-20 font-semibold",
              wrapper: "!py-2  rounded border border-[var(--violet)]",
            }}
            styles={{
              root: {
                display: "flex !important",
                flexDirection: "column",
                gap: "10px !important",
                flexGrow: 1,
              },
              input: {
                color: "black !important",
                background: "#f8f5ff !important",
                "&::placeholder": {
                  color: "black !important",
                },
                "&outlined": {
                  outline: "none",
                },
              },
            }}
            {...form.getInputProps("security_answer")}
          />
        </article>
        <button
          type="submit"
          className="w-full rounded py-20 bg-[var(--violet)] mt-20 text-white">
          Add client
        </button>
        <Box
          onClick={goBack}
          sx={(theme) => ({
            display: "block",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            color:
              theme.colorScheme === "dark"
                ? theme.colors.blue[4]
                : theme.colors.blue[7],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}>
          Go back
        </Box>
      </form>
    </div>
  );
}

const goBack = () => {
  window.history.go(-1); // This will navigate back one step in the user's browser history.
};
