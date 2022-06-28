import React from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { DropZone, FileInputContainer, SubmitButton } from "./syles";
import axios from "axios";

interface FileInputProps {
  setResult: Function;
  setLoading: Function;
}

export const FileInput = ({ setResult, setLoading }: FileInputProps) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const onSubmitClicked = () => {
    setLoading(true);

    let file = acceptedFiles[0];
    const formData = new FormData();

    formData.append("file", file);

    axios
      .post("https://conv-music-classifier.herokuapp.com/api/upload", formData)
      .then((res: any) => {
        setResult(res.data);
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        alert(
          "Something went wrong. Please make sure you have uploaded WAV file with duration more than 30 seconds"
        );
        console.error(err);
      });
  };

  return (
    <FileInputContainer>
      <DropZone {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {files.length ? (
          <p>{files}</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </DropZone>

      <SubmitButton onClick={onSubmitClicked}>Submit</SubmitButton>
    </FileInputContainer>
  );
};
