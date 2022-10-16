import Card from "./card/index";
import Header from "./header/index";
import Links from "./links/index";

const CardLogin = ({ cms }) => {
  console.log(cms);
  return (
    <Card>
      <Header tittle={cms.header}></Header>
      <Links links={cms.links} />
    </Card>
  );
};

export default CardLogin;
