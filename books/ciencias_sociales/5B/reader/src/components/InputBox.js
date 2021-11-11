import React from "react";
import { useState } from "react";
import ContentEditable from "react-contenteditable";

function InputBox(props) {
  const className = props.className;
  const id = props.id;

  console.log(id);

  const [content1, setContent1] = useState("");

  function handleChange1(event) {
    setContent1(event.target.value);
  }

  return (
    <ContentEditable
      className={className}
      html={content1} // innerHTML of the editable div
      disabled={false} // use true to disable editing
      onChange={handleChange1} // hae a custom HTML tag (uses a div by default)
    />
  );
}

export default InputBox;
