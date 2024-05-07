import * as React from 'react';
import Header from '../Header/Header';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import User from '../User/User';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return(
    <>
    <Header/>
    {/* <User/> */}
    <Container/>
    <Footer/>
    </>
  ) ;
};

export default Home;
