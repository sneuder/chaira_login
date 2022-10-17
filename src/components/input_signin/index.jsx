import { ContainerInputs, ContainerInput, Input } from "./elements";

const InputSignin = () => {
  return (
    <ContainerInputs>
      <ContainerInput>
        <Input type='text' placeholder="Usuario"/>
      </ContainerInput>
      <ContainerInput>
        <Input type='password' placeholder="Contraseña"/>
      </ContainerInput>
    </ContainerInputs>
  );
};

export default InputSignin;