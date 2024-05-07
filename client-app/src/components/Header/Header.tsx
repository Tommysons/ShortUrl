import { UserButton } from '@clerk/clerk-react';
import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className='bg-slate-900'>
        <div className='container p-2 mx-auto'>
            <nav className='py-5 flex justify-between items-center'>
                <div className='text-base text-white'>URLSHORTNER</div>
                <div className='text-center'>
                <UserButton />
                </div>
            </nav>
        </div>
    </div>
  );
};

export default Header;
