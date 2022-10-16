import { HeaderContainer, Tittle } from "./elements";

const Header = ({tittle}) => {
  return (
    <HeaderContainer>
      <Tittle>{tittle}</Tittle>
    </HeaderContainer>
  );
};

export default Header;