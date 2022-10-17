import { ContainerCheckBox, CheckBox, Text, Icon } from "./elements";

const RememberCheck = () => {
  return (
    <ContainerCheckBox>
      <CheckBox type='checkbox'/>
      <Icon />
      <Text>No cerrar sesión</Text>
    </ContainerCheckBox>
  );
};

export default RememberCheck;