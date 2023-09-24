import { Box, Group, Text, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { useState } from "react";
import Image from "next/image";

export function BaseDemo(props: Partial<DropzoneProps>) {
  const [fileUpload, setFileUpload] = useState<FileWithPath | null>(null);

  console.log(fileUpload);

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  // Example usage:
  const fileSizeInBytes = fileUpload?.size; // Replace with the actual file size
  const fileSizeFormatted = formatBytes(fileSizeInBytes);

  console.log("File size:", fileSizeFormatted);

  const ImageUpload = async () => {
    let formData = new FormData();

    if (fileUpload) {
      formData.set("image", fileUpload, fileUpload?.name);
    }

    formData.forEach((value, key) => {
      console.log(key, value);
    });
  };

  ImageUpload();
  return (
    <Dropzone
      styles={{
        root: {
          width: "300px",
          height: "300px",
          margin: "auto",
        },
      }}
      //   onDrop={(files) => console.log("accepted files", files)}
      onDrop={(files) => setFileUpload(files[0])}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}>
      <Group
        position="center"
        spacing={20}
        mih={220}
        style={{ pointerEvents: "none" }}>
        <Dropzone.Accept>
          <IconUpload
            style={{
              width: rem(52),
              height: rem(52),
              color: "var(--mantine-color-blue-6)",
            }}
            stroke={1.5}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            style={{
              width: rem(52),
              height: rem(52),
              color: "var(--mantine-color-red-6)",
            }}
            stroke={1.5}
          />
        </Dropzone.Reject>

        <div></div>

        {fileUpload ? (
          <Box w={200} h={200}>
            <Image
              src={URL.createObjectURL(fileUpload)}
              fill
              className="!relative w-5 h-5"
              alt="dropzone image"
            />

            <span>{(fileUpload as File)?.name}</span>
            <p>{fileSizeFormatted}</p>
          </Box>
        ) : (
          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        )}
      </Group>
    </Dropzone>
  );
}
