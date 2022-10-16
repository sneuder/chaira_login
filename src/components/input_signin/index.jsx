import { ContainerInputs, ContainerInput, Input } from "./elements";

const InputSignin = () => {
  return (
    <ContainerInputs>
      <ContainerInput>
        <Input type='text' />
      </ContainerInput>
      <ContainerInput>
        <Input type='text' />
      </ContainerInput>
    </ContainerInputs>
  );
};

export default InputSignin;