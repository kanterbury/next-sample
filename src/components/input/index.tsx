import { ChangeEvent, useState } from "react";

type InputProps = JSX.IntrinsicElements["input"] & {
  label: string;
};

export const Input = (props: InputProps) => {
  const { id, label, ...rest } = props;
  const [text, setText] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const resetInputField = () => {
    setText("");
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...rest} onChange={onInputChange} type="text" value={text} />
      <button onClick={resetInputField}>Reset</button>
    </div>
  );
};
