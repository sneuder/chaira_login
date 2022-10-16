import {ContainerLinks, Link} from './elements';

const Links = ({links}) => {
  return (
    <ContainerLinks>
      {
        links.map(link => <Link href={link.link}>{link.text}</Link>)
      }
    </ContainerLinks>
  )
};

export default Links;
