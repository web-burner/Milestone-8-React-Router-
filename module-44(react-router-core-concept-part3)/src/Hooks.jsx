import { useState } from "react";

const useInputField = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handler = (e) => {
    setValue(e.target.value);
  };
  return [value, handler];
};

export { useInputField };
