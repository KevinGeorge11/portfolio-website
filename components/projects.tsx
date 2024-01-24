"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data';
import ProjectWidget from './project-widget';
import { useSectionInView } from '@/lib/hooks';


export default function Projects() {
  const { ref  } = useSectionInView("Projects");

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading> Projects </SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectWidget {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
