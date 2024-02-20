import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (

  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am Abdul Nasir Jamal, a developer with knowledge and expertise in frontend and backend web development.
      </SectionText>
      <Button onClick={() => window.location = "mailto:jamalnasirone52@gmail.com"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;