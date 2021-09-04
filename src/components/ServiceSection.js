import React from 'react';
import {
  MdCode,
  MdDesktopMac,
  MdFormatPaint,
  MdFormatShapes,
  MdPhonelinkSetup,
} from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';

const ServiceSectionStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServiceSectionStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what i will do for you" />
        <div className="services__allItems">
          <ServiceSectionItem
            icon={<MdDesktopMac />}
            title="Web design"
            desc="I do ui/ux design for the
             website that helps website to 
             get better and more unique look and also  better usability."
          />
          <ServiceSectionItem
            icon={<MdCode />}
            title="Web developement"
            desc="I have fun creating minimal to extravagant
            web designs and I keep my desings upated with the
            current web dev trends."
          />
          <ServiceSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="Flutter and Kotlin are my passion
            when it comes to app developement."
          />
          <ServiceSectionItem
            icon={<MdFormatShapes />}
            title="Graphic Design"
            desc="Having succeded in my many 
            roles as designer, I have developed a
            unique skill, style and aesthic in my designs
            thats many find to be attractive and remarkable."
          />
          <ServiceSectionItem
            icon={<MdFormatPaint />}
            title="Digital Illustrator"
            desc="One of my passion is art 
            and digital media provides a vast
            potential to showcase  my talent."
          />
        </div>
      </div>
    </ServiceSectionStyles>
  );
}
