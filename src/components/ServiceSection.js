import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
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
            desc="i do ui/ux design for the
             website that helps website to 
             get better unique look."
          />
          <ServiceSectionItem
            icon={<MdCode />}
            title="Web developement"
            desc="i do ui/ux design for the
             website that helps website to 
             get better unique look."
          />
          <ServiceSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="i do ui/ux design for the
              website that helps website to 
              get better unique look."
          />
        </div>
      </div>
    </ServiceSectionStyles>
  );
}
