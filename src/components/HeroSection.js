import React from 'react';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import Ptext from './Ptext';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, This is</span>
          <span>Sahil Pednekar</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <Ptext>
            I am working as a freelance Graphic and UI/UX designer and frontend
            developer for 3 years. I love designing and making super beautiful
            and awesome websites.
          </Ptext>
          <Button btnLink="/projects" btnText="See my works" />
        </div>
        <div className="hero_social_indicator">
          <p>Follow</p>
          <img src={SocialMediaArrow} alt="socail media arrow" />
        </div>
        <div className="hero_social_text">
          <ul>
            <li>
              <a href="#" target="_blank" rel="noreffer">
                FB
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
