import { Wrapper, ElementsForm } from "./layouts/index";

import Card from "./card/index";
import Logo from "./logo/index";
import Header from "./header/index";
import InputSignin from "./input_signin/index";
import RememberCheck from "./checkbox/index";
import Button from "./login_button/index";
import Links from "./links/index";
import Footer from "./footer/index";

const CardLogin = ({ cms }) => {
  return (
    <Wrapper>
      <Card>
        <ElementsForm>
          <Logo />
          <Header tittle={cms.header} />
          <InputSignin />
          <RememberCheck />
          <Button />
          <Links links={cms.links} />
        </ElementsForm>
      </Card>
      <Footer footer={cms.copy_rights} />
    </Wrapper>
  );
};

export default CardLogin;
