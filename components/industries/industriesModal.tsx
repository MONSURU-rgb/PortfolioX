import { Button, Flex, TextInput } from "@mantine/core";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { toast } from "react-toastify";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface CreateIndustryModalProps {
  id: number;
  industry_name: string;
  industry_description: string;
}

export interface ModalProps {
  opened: boolean;
  component: ReactNode | null;
}

const schema = Yup.object().shape({
  industry_name: Yup.string().min(2, "The industry name cannot be empty"),
  industry_description: Yup.string().min(
    2,
    "The industry description should have at least 2 letters"
  ),
});

//{setClose: Dispatch<SetStateAction<CreateIndustryModalProps>>;}

export function IndustryModal({
  setClose,
}: {
  setClose: Dispatch<SetStateAction<ModalProps>>;
}) {
  const queryClient = new QueryClient();

  const { mutate } = useMutation({
    mutationFn: (values: CreateIndustryModalProps) =>
      builder.use().users.post_industry_list(values),
    mutationKey: builder.users.post_industry_list.get(),
    onSuccess: () => {
      toast.success("Your desired industry was successfully created");
      queryClient.invalidateQueries(builder.users.industry_list.get());
    },
  });

  const industryForm = useForm({
    validate: yupResolver(schema),
    initialValues: {
      id: 0,
      industry_name: "",
      industry_description: "",
    },
  });

  const values = industryForm.values;
  // console.log(values);
  return (
    <form
      onSubmit={industryForm.onSubmit((values: CreateIndustryModalProps) => {
        mutate(values);
        // console.log(values);
        industryForm.reset();
        setClose({
          opened: false,
          component: null,
        });
      })}>
      <Flex
        direction="column"
        gap={15}
        classNames={{
          root: "rounded-[20px]",
        }}>
        <TextInput
          label="Industry Name"
          required
          withAsterisk
          {...industryForm.getInputProps("industry_name")}
          variant="primary"
        />
        <TextInput
          label="Industry Description"
          required
          withAsterisk
          {...industryForm.getInputProps("industry_description")}
          variant="primary"
        />
        <Button variant="action" type="submit" className="self-center">
          Create Industry
        </Button>
      </Flex>
    </form>
  );
}
