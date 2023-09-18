import { Button, Flex, Modal, Text, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { JsonServerProps } from "../portfolio/portfoliomaincomponent";
import { useForm } from "@mantine/form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { toast } from "react-toastify";

export function PortfolioModal(props: JsonServerProps) {
  const form = useForm({
    initialValues: {
      id: props.id,
      title: props.title,
      date: props.date,
      amount: props.amount,
      status: props.status,
    },
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (values: JsonServerProps) =>
      await builder.use().users.portfolio_list_edit(values),
    mutationKey: builder.users.portfolio_list_edit.get(),
    onSuccess: (values) => {
      console.log(values?.data);
      toast.success("User data updated successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
      //   queryClient.invalidateQueries(builder.users.portfolio_list_edit.get());
    },
  });

  const values = form.values;
  console.log(values);
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate(values);
        console.log(values);
        form.reset();
      })}>
      <Flex direction="column" gap={15}>
        <TextInput {...form.getInputProps("title")} variant="primary" />
        <TextInput {...form.getInputProps("date")} variant="primary" />
        <TextInput {...form.getInputProps("amount")} variant="primary" />
      </Flex>
      <Button variant="white" type="submit" onClick={close}>
        Update data
      </Button>
    </form>
  );
}
