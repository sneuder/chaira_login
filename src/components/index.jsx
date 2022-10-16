import { ElementsLogin } from "../layouts";

import Card from "./card/index";
import Header from "./header/index";
import InputSignin from "./input_signin/index";
import Button from './login_button/index';
import Links from "./links/index";
import Footer from "./footer/index";

const CardLogin = ({ cms }) => {
  console.log(cms);
  return (
    <Card>
      <ElementsLogin>
        <Header tittle={cms.header} />
        <InputSignin />
        <Button />
        <Links links={cms.links} />
      </ElementsLogin>
      <Footer footer={cms.copy_rights} />
    </Card>
  );
};

export default CardLogin;
