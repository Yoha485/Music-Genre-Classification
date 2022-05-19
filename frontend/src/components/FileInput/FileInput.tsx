import React from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { DropZone, FileInputContainer } from "./syles";
import axios from "axios";

export const FileInput = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const onSubmitClicked = () => {
    let file = acceptedFiles[0];
    const formData = new FormData();
  
    formData.append("file", file);
  

    axios
      .post("http://localhost:5000/api/upload", formData)
      .then((res: any) => {
        console.log(res.data);
      })
      .catch((err: any) => console.error(err));
  };

  return (
    <FileInputContainer>
      <DropZone {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </DropZone>

      <button onClick={onSubmitClicked}>Submit</button>

      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </FileInputContainer>
  );
};