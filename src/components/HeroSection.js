import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import Ptext from './Ptext';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 980px;
    width: 100%;
    height: 608px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      position: absolute;
      bottom: 20px;
      width: 50px;
    }
    .hero__social {
      left: 50px;
    }
    .hero__scrollDown {
      right: 50px;
    }
    .hero__social__indicator,
    .hero__scrollDown{
       
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Sahil Pednekar</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <Ptext>
              I am working as a freelance Graphic and UI/UX designer and
              frontend developer for 3 years. I love designing and making super
              beautiful and awesome websites.
            </Ptext>
            <Button btnLink="/projects" btnText="See my works" />
          </div>
          <div className="hero__social__indicator">
            <p>Follow</p>
            <img src={SocialMediaArrow} alt="social media arrow" />
          </div>
          <div className="hero__social__text">
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=kwb_GRm6NtU"
                  target="_blank"
                  rel="noreferrer"
                >
                  FB
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/sahilpedneb5bd"
                  target="_blank"
                  rel="noreferrer"
                >
                  BH
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sahil-pednekar-2505931b8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LI
                </a>
              </li>
            </ul>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
