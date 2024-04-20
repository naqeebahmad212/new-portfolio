"use client";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { submitHandler, updateHandler } from "@/utils/db";
import PostSubmitBtn from "./SubmitBtn";
import { Project } from "@prisma/client";
interface EditComProps {
  project: Project | null;
}
const EditProjectComp = ({ project }: EditComProps) => {
  const [editorData, setEditorData] = useState(project?.body);
  const [file, setFile] = useState<string | ArrayBuffer>("");
  const [title, setTitle] = useState<string | undefined>(project?.title);
  const [snippet, setSnippet] = useState<string | undefined>(project?.snippet);

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setEditorData(data);
  };

  const imagesHandler = (e: any) => {
    if (e.target.files.length > 0) {
      setFile("");

      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          if (reader.result) {
            setFile(reader.result);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <form action={updateHandler} className="w-[70%]">
        <div className="form-group my-2">
          <label htmlFor="title" className="text-gray-300 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Type here..."
            className="input rounded-none w-full"
            value={title}
            defaultValue={project?.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group my-2">
          <label htmlFor="snippet" className="text-gray-300 mb-1">
            Snippet
          </label>
          <input
            type="text"
            name="snippet"
            placeholder="Type here..."
            className="input rounded-none w-full"
            value={snippet}
            defaultValue={project?.snippet}
            onChange={(e) => setSnippet(e.target.value)}
          />
        </div>

        <div className="form-group my-2">
          <label htmlFor="image" className="text-gray-300 mb-1">
            Image
          </label>
          <input
            onChange={imagesHandler}
            type="file"
            name="img"
            className="input file-input rounded-none w-full"
          />
          <input type="hidden" name="image" value={file.toString()} id="" />
        </div>

        <div className="form-group my-2 relative">
          <label htmlFor="image" className="text-gray-300 mb-1">
            Body
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={project?.body}
            onChange={handleEditorChange}
          />
          <input
            type="hidden"
            name="body"
            defaultValue={project?.body}
            value={editorData}
            id=""
          />
          <input
            type="hidden"
            name="projectId"
            defaultValue={project?.id}
            value={project?.id}
            id=""
          />
        </div>
        <PostSubmitBtn>Update</PostSubmitBtn>
      </form>
    </div>
  );
};

export default EditProjectComp;
