import React from 'react';
//hello
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Link from 'next/link';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.githublink}>Github Link</ExternalLinks>
              {
                p.deploymentLinkBackend && (
                  <ExternalLinks href={p.deploymentLinkBackend}>Backend Code</ExternalLinks>
                )
              }
              {
                p.deploymentLinkFrontend && (
                  <ExternalLinks href={p.deploymentLinkFrontend}>Frontend Code</ExternalLinks>
                )
              }
              {
                p.readme && (
                  <ExternalLinks href={p.readme}>More</ExternalLinks>
                )
              }
              {
                p.deploymentLinkAdmin && (
                  <ExternalLinks href={p.deploymentLinkAdmin}>Admin Code</ExternalLinks>
                )
              }
              {
                p.deploymentLinks && (
                  <ExternalLinks href={p.deploymentLinks}>Deployment Link</ExternalLinks>
                )
              }
            </UtilityList>
          </BlogCard>
        );
      })}
     
    </GridContainer>
  </Section>
);

export default Projects;