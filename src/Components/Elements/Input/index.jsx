import Label from "./Label";
import Input from "./Input";

const InputLabel = (props) => {
  const { htmlFor, children, name, id, type } = props;
  return (
    <>
      <Label htmlFor={htmlFor}>{children}</Label>
      <Input type={type} name={name} id={id}></Input>
    </>
  );
};

export default InputLabel;
