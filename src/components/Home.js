import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Luxury in Every Scent</h1>
          <div className="home-images">
           <img src="/images/pink flur.jpg" alt="Perfume 1" />
           <img src="/images/rose perfume.jpg" alt="Perfume 1" />
           </div>
           <p> Indulge in the elegance of our exquisite fragrances, crafted for the modern woman.</p>
          <button className="shop-now"> <Link to="/shop">Shop Now</Link></button>
          
        </div>
      </section>

      <section className="whyus">
<h2>Why You'll Love Our Perdumes</h2>
<ul className="ReasonUs">
  <li>lond-lasting and unforgatable scents</li>
  <li>inspire by confidence, beauty and elegance</li>
  <li>Hand-crafted with the finest ingredients</li>
</ul>
      </section>
      
     
      <section className="featured">
        <h2>Featured Collection</h2>
        <div className="perfume-gallery">
          <div className="perfume-card"> 
            <img src="/images/mee perfume.jpg" alt="Perfume 1" />
            <Link to="/shop" className="learn-more">Golden Amber</Link>
          </div>
          <div className="perfume-card">
            <img src="/images/strawberry perfume.jpg" alt="Perfume 2" />
            <Link to="/shop" className="learn-more">strawberry-fragrance</Link>
          </div>
          <div className="perfume-card">
            <img src="/images/collection fragrances.jpg" alt="Perfume 3" />
            <Link to="/shop" className="learn-more">fragrance package</Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about">
        <h2>Our Story</h2>
        <p>
          At Luxe Perfumes, we believe in capturing elegance through scent. Each fragrance is a
          masterpiece, inspired by timeless beauty and sophistication.
        </p>
       

<Link to="/our-story" className="learn-more">Learn More</Link>


      </section>
    </div>
  );
};

export default HomePage;





