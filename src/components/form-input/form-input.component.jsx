import "./form-input.styles.jsx";
import {
  DIV_Group,
  INPUT_FormInput,
  LABEL_FormInputLabel,
} from "./form-input.styles.jsx";

const FormInput = ({ label, inputOptions }) => {
  return (
    <DIV_Group>
      <LABEL_FormInputLabel isShrink={inputOptions.value.length}>
        {label}
      </LABEL_FormInputLabel>
      <INPUT_FormInput {...inputOptions} />
    </DIV_Group>
  );
};

export default FormInput;
