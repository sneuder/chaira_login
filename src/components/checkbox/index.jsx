import {
  ContainerCheckBox,
  ContainerTick,
  CheckBox,
  Text,
  Icon,
} from "./elements";

const RememberCheck = () => {
  return (
    <ContainerCheckBox>
      <ContainerTick>
        <CheckBox type="checkbox" />
        <Icon />
      </ContainerTick>
      <Text>No cerrar sesión</Text>
    </ContainerCheckBox>
  );
};

export default RememberCheck;
