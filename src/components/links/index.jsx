import {ContainerLinks, Link} from './elements';

const Links = ({links}) => {
  return (
    <ContainerLinks>
      {
        links.map(link => <Link>{link.text}</Link>)
      }
    </ContainerLinks>
  )
};

export default Links;
