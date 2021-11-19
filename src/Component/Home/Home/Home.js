import React from 'react';
import Banner from '../Banner/Banner';
import CommentShowing from '../CommentShowing/CommentShowing';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      {/* <Navigation></Navigation> */}

      <Banner></Banner>
      <Products></Products>
      <Services></Services>
      <CommentShowing></CommentShowing>
      {/* <CommentBox></CommentBox> */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
