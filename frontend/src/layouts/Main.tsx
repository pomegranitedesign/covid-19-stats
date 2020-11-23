import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Main({ children }: React.PropsWithChildren<any>) {
  return (
    <React.Fragment>
      <Header />
      <div style={{ margin: '40px 0 150px 0' }}>{children}</div>
      <Footer />
    </React.Fragment>
  );
}

export default Main;
