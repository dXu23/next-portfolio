import fs, { readFileSync } from 'fs';
import path from 'path';

import React, { useEffect, useState } from 'react';

import Base from '../components/Base';
import Project from '../components/Project';

import { BsSliders } from 'react-icons/bs';

import styles from '../styles/Work.module.scss';
import { nanoid } from 'nanoid';
import { IProject } from '../types';

export default function Work({ projectPlatforms }: { projectPlatforms: { [projectPlatfrom: string]: IProject[] } }) {
  const initialTechFilter = {
    "HTML": false,
    "CSS": false,
    "JavaScript": false,
    "TypeScript": false,
    "React": false,
    "Fetch": false
  };
  // const technologies = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Fetch'];
  const [techFilter, setTechFilter] = useState<{ [key: string]: boolean }>(initialTechFilter);

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    let { name, value } = event.currentTarget;


    setTechFilter((prevTechFilter: { [key: string]: boolean }) => ({
      ...prevTechFilter,
      [name]: !prevTechFilter[name]
    }));
  }

  return (
    <Base>
      <main className={styles.projects} role="main">
        <button><BsSliders /></button>
        <div>
        <input
            id="HTML"
            name="HTML"
            type="checkbox"
            onChange={handleChange}
            checked={techFilter["HTML"]}
          />
          <label htmlFor="HTML">HTML</label>
          <input
            id="CSS"
            name="CSS"
            type="checkbox"
            onChange={handleChange}
            checked={techFilter["CSS"]}
          />
          <label htmlFor="CSS">CSS</label>
          <input
            id="JavaScript"
            name="JavaScript"
            type="checkbox"
            onChange={handleChange}
            checked={techFilter["JavaScript"]}
          />
          <label htmlFor="JavaScript">JavaScript</label>
          <input
            id="TypeScript"
            name="TypeScript"
            type="checkbox"
            onChange={handleChange}
            checked={techFilter["TypeScript"]}
          />
          <label htmlFor="TypeScript">TypeScript</label>
          <input
            id="React"
            name="React"
            type="checkbox"
            onChange={handleChange}
            checked={techFilter["React"]}
          />
          <label htmlFor="React">React.js</label>
          <input
            id="Fetch"
            name="Fetch"
            type="checkbox"
            onChange={handleChange}
            checked={techFilter["Fetch"]}
          />
          <label htmlFor="Fetch">Fetch</label>
        </div>
        {Object.entries(projectPlatforms).map(([platformName, projects]: [string, IProject[]]) => 
          <section key={nanoid()}>
            <h2 className={styles.platformName}>{platformName}</h2>
            <div className={styles.platformProjects}>
              {projects
                .filter((project: IProject) => {
                  let techTags = Object.keys(techFilter);

                  return techTags
                    .filter((tag: string) => techFilter[tag])
                    .every((tag: string) => project.tags.includes(tag));
                })
                .map((project: IProject) => <Project project={project} key={nanoid()} />)
              }
            </div>
          </section>
        )}
      </main>
    </Base>
  );
}

function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}

export function getStaticProps() {
  const projectRoot = path.join(process.cwd(), 'data/projects');
  const projectFiles = fs.readdirSync(projectRoot);

  let projectPlatforms = projectFiles.reduce((projectPlatforms: { [projectPlatform: string]: IProject }, projectFile: string) => {
    
    return { ...projectPlatforms, 
      [capitalize(path.basename(projectFile, '.json'))]: JSON.parse(
        readFileSync(path.join(projectRoot, projectFile)).toString()
      )
    };
  }, {});

  return {
    props: {
      projectPlatforms
    }
  };

}