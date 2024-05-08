import * as React from 'react';
import Header from '../Header/Header';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';
interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return(
    <>
    <Header/>
    <Container/>
    <Footer/>
    </>
  ) ;
};

export default Home;
