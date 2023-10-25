import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      style={{
        padding: "0.5rem 1rem",
        border: "1px solid black",
        borderRadius: "0.25rem",
        color: "white",
        backgroundColor: "red",
      }}
    >
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
