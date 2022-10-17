import { ContainerCheckBox, CheckBox, Text } from "./elements";

const RememberCheck = () => {
  return (
    <ContainerCheckBox>
      <CheckBox type='checkbox'/>
      <Text>No cerrar sesión</Text>
    </ContainerCheckBox>
  );
};

export default RememberCheck;