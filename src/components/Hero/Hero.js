import React from 'react';

import { Section, SectionSubsetText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of this portfolio is to showcase the skills which I have tried to gain in this entire year, starting from <SectionSubsetText>HTML,CSS and Basics of Javascript,</SectionSubsetText> to getting into the full stack development by learning React, NextJS, MongoDB, NodeJS and implementing them into Projects.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;