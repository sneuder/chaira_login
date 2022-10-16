import React from 'react';
import cms from '../cms/index.json';

import CardLogin from '../components/index';

const Login = () => {
  return (
    <CardLogin cms={cms}/>
  )
}
export default Login;