import { UserButton } from '@clerk/clerk-react';
import * as React from 'react';

interface IUserProps {
}

const User: React.FunctionComponent<IUserProps> = () => {
  return(
    <UserButton/>
  ) ;
};

export default User;
