import { ContainerFooter, FooterText } from "./elements";

const Footer = ({footer}) => {
  return (
    <ContainerFooter>
      <FooterText>{footer}</FooterText>
    </ContainerFooter>
  )
};

export default Footer;