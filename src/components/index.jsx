import Card from './card/index';
import Header from './header/index';

const CardLogin = ({cms}) => {
  console.log(cms)
  return (
    <Card>
      <Header tittle={cms.header}></Header>
    </Card>
  );
}

export default CardLogin;