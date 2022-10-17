import { ContainerInputs, ContainerInput, Input, UserIcon, PadlockIcon } from "./elements";

const InputSignin = () => {
  return (
    <ContainerInputs>
      <ContainerInput>
        <UserIcon />
        <Input type='text' placeholder="Usuario"/>
      </ContainerInput>
      <ContainerInput>
        <PadlockIcon />
        <Input type='password' placeholder="Contraseña"/>
      </ContainerInput>
    </ContainerInputs>
  );
};

export default InputSignin;