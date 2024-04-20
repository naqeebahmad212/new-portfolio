"use client";
import { ComponentProps, useState } from "react";
import { useFormStatus } from "react-dom";

type PostBtnProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const PostSubmitBtn = ({ children, className, ...props }: PostBtnProps) => {
  const { pending } = useFormStatus();
  //   const [pending, setPending] = useState(false);
  return (
    <button
      type="submit"
      {...props}
      // onClick={()=> setPending(true) }
      disabled={pending}
      className={`btn btn-primary text-white ${className}`}
    >
      {pending && (
        <span className="loading loading-spinner text-white loading-xs" />
      )}
      {!pending && children}
    </button>
  );
};

export default PostSubmitBtn;
