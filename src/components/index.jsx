import Card from "./card/index";
import Header from "./header/index";
import Links from "./links/index";
import Footer from "./footer/index";

const CardLogin = ({ cms }) => {
  console.log(cms);
  return (
    <Card>
      <Header tittle={cms.header}></Header>
      <Links links={cms.links} />
      <Footer footer={cms.copy_rights} />
    </Card>
  );
};

export default CardLogin;
