import { ContainerLogo, LogoImage } from "./elements";
import logo from "../../assets/imgs/logo.png";

const Logo = () => {
  return (
    <ContainerLogo>
      <LogoImage src={logo} alt="Logo Universidad"/>
    </ContainerLogo>
  );
};

export default Logo;
