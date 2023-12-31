import { builder } from "@/api/builder";
import {
  Box,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";

import { useMutation, useQuery } from "@tanstack/react-query";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { BaseDemo } from "./imageUploadfile";

export interface AddClientDetails {
  client_first_name: string;
  client_last_name: string;
  client_email: string;
  total_investment: number;
  client_security_question: string;
  client_security_answer: string;
  client_gender: string;
  client_industry: { industry_name: string; industry_description: string };
}

export function MainContentSection() {
  const { push } = useRouter();

  const [industryName, setIndustryName] = useState();

  const { data } = useQuery({
    queryFn: () => builder.use().users.industry_list(),
    queryKey: builder.users.industry_list.get(),
    select: (data) => data?.data?.data,
  });

  const industryData = data;
  let industry_name = [];

  let industry_description = [];

  if (industryData) {
    industry_name = data?.map((data: any) => {
      return { value: data?.industry_name, label: data?.industry_name };
    });
    industry_description = data?.map((data: any) => {
      return {
        value: data?.industry_description,
        label: data?.industry_description,
      };
    });
  }

  const schema = Yup.object().shape({
    client_first_name: Yup.string().min(
      4,
      "First Name should have at least 2 letters"
    ),
    client_last_name: Yup.string().min(
      4,
      "Last Name should have at least 2 letters"
    ),
    client_email: Yup.string().email("Invalid email"),
    total_investment: Yup.number().min(
      1,
      " Your total investment should not be zero"
    ),

    client_security_question: Yup.string().min(4, "Choose a security question"),

    client_security_answer: Yup.string().min(
      4,
      "Please enter a security answer greater than 4 characters"
    ),

    client_gender: Yup.string().min(4, "Please select your gender"),

    client_industry: Yup.object().shape({
      industry_name: Yup.string().min(2, "The industry name cannot be empty"),
      industry_description: Yup.string().min(
        2,
        "The industry description should have at least 2 letters"
      ),
    }),
  });

  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      client_first_name: "",
      client_last_name: "",
      client_email: "",
      total_investment: 0,
      client_security_question: "",
      client_security_answer: "",
      client_gender: "",
      client_industry: { industry_name: "", industry_description: "" },
    },

    // validate: (values: AddClientDetails) => ({
    //   client_first_name: values.client_first_name.match(/^[a-zA-Z]/)
    //     ? null
    //     : "Enter your first name",
    //   client_last_name: values.client_last_name.match(/^[a-zA-Z]/gi)
    //     ? null
    //     : "Enter your last name",
    //   client_email: values.client_email.match(/^\S+@email\.com$/)
    //     ? null
    //     : "Invalid email",
    //   total_investment:
    //     values.total_investment > 8
    //       ? null
    //       : "Total investment must be greater than zero",
    //   client_security_question: values.client_security_question.match(
    //     /^(Mother|Unique)$/i
    //   )
    //     ? null
    //     : "please select the right response",
    //   client_security_answer: values.client_security_answer.match(/^[a-zA-Z]/)
    //     ? null
    //     : "Invalid Answer",
    //   client_gender: values.client_gender.match(/^(male|female)$/i)
    //     ? null
    //     : "Please a valid gender",
    //   industry_name: values.client_industry.industry_name.match(/^[a-zA-Z]/)
    //     ? null
    //     : "Please enter a valid industry name",
    //   industry_description: values.client_industry.industry_description.match(
    //     /^[a-zA-Z]/
    //   )
    //     ? null
    //     : "Enter your industry description",
    // }),
  });

  const values = form.values;

  const { mutate } = useMutation({
    mutationFn: async (values: AddClientDetails) =>
      await builder.use().users.create(values),
    mutationKey: builder.users.create.get(),
    onSuccess: (values) => {
      toast.success("User created successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      push("/customer");
    },
  });

  return (
    <div className="bg-[var(--light-bg)] grid place-content-center flex-grow">
      {/* <BaseDemo /> */}
      <form
        onSubmit={form.onSubmit((values) => {
          mutate(values);
          form.reset();
        })}
        className="flex flex-col gap-24 w-[clamp(240px,45vw,650px)] pt-30">
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
            {...form.getInputProps("client_first_name")}
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
            {...form.getInputProps("client_last_name")}
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
          {...form.getInputProps("client_email")}
        />
        <article className="flex gap-24 flex-wrap">
          <NumberInput
            hideControls
            type="text"
            label="Total Investment"
            placeholder="Enter your investment"
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
            {...form.getInputProps("total_investment")}
          />
          <Select
            label="Gender"
            placeholder="Select gender"
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            // className="!w-1/2 !truncate text-[var(--violet)] text-20 font-semibold rounded"
            classNames={{
              label: "text-[var(--violet)] text-20 font-semibold",
              wrapper: "!py-2  rounded border border-[var(--violet)]",
              input: "bg-[var(--light-bg)]",
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
            {...form.getInputProps("client_gender")}
          />
        </article>
        <article className="flex gap-24 flex-wrap">
          <Select
            label="Industry Industry"
            placeholder="Select industry name"
            data={industry_name}
            // className="!w-1/2 !truncate text-[var(--violet)] text-20 font-semibold rounded"
            classNames={{
              label: "text-[var(--violet)] text-20 font-semibold",
              wrapper: "!py-2  rounded border border-[var(--violet)]",
              input: "bg-[var(--light-bg)]",
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
            {...form.getInputProps("client_industry.industry_name")}
          />
          <Select
            label="Industry Description"
            placeholder="Select industry name"
            data={industry_description}
            // className="!w-1/2 !truncate text-[var(--violet)] text-20 font-semibold rounded"
            classNames={{
              label: "text-[var(--violet)] text-20 font-semibold",
              wrapper: "!py-2  rounded border border-[var(--violet)]",
              input: "bg-[var(--light-bg)]",
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
            {...form.getInputProps("client_industry.industry_description")}
          />
        </article>
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
              input: "bg-[var(--light-bg)]",
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
            {...form.getInputProps("client_security_question")}
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
            {...form.getInputProps("client_security_answer")}
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
