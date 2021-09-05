import React from 'react';
import styled from 'styled-components';
import PText from '../components/Ptext';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Sahil Pednekar</span>
              </p>
              <h2 className="about__heading">A Designer and Developer</h2>
              <div className="about__info">
                <PText>
                  While growing up i always understood art and its different
                  forms but technology being simple and complex at the same time
                  was an intresting topic that i didnt uderstand for most of my
                  life and it always made me curious about the architecture of
                  each and every thing.
                  <br /> <br />
                  After working with several student clubs and completing
                  several intenships I had gaines a good amount of understanding
                  of design and its effect on people and how everything needs
                  design from the core to the surface and witht design and
                  planning great things cab be achieved.
                  <br />
                  <br />I have decided to make the best tools for our community
                  using my design experience and developement skills and help in
                  making the complex architecture that exist all around us more
                  transparent and something to appreciate.
                </PText>
              </div>
              <Button btnText="Download Resume" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['General Education Academy, Chembur']}
              />
              <AboutInfoItem title="JuniorCollege" items={['S.I.E.S, Sion']} />
              <AboutInfoItem
                title="University"
                items={['University Of Mumbai']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Image Processing"
                items={['Keras', 'Scilab', 'Tensorflow', 'OpenCV']}
              />
              <AboutInfoItem
                title="Android"
                items={['XML', 'Flutter', 'Kotlin']}
              />
              <AboutInfoItem
                title="Database"
                items={['Django', 'Flask', 'PostGreSQL', 'MySQL']}
              />
              <AboutInfoItem
                title="Programming"
                items={['Python', 'C/C++', 'JavaScript']}
              />
              <AboutInfoItem
                title="Design"
                items={[
                  'Photoshop',
                  'After Effects',
                  'Figma',
                  'Illustrator',
                  'Premier Pro',
                  'XD',
                  'Blender',
                  'Cinema4D',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2018"
                items={['Sales & Marketing Intern - Kusam Meco']}
              />
              <AboutInfoItem
                title="2020"
                items={['Android Study Jams Campus Facilitator']}
              />
              <AboutInfoItem
                title="2021-"
                items={[
                  'Graphic Designer - The Social Turtle',
                  'App developement intern - The Sparks Foundation',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
