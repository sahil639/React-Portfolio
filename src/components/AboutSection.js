import React from 'react';
import SectionTitle from './SectionTitle';

export default function AboutSection() {
  return (
    <div>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
        </div>
      </div>
    </div>
  );
}
