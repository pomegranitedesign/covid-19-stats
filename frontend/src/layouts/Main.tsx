import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Main({ children }: React.PropsWithChildren<any>) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Main;
