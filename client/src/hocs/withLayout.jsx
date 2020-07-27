import React from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

const withLayout = (Component) => () => (
  <div className="wrapper">
    <Header />
    <main>
      <Component />
    </main>
    <Footer />
  </div>
);

export default withLayout;
