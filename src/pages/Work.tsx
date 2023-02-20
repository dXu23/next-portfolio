import fs, { readFileSync } from 'fs';
import path from 'path';

import Base from '../components/Base';
import Project from '../components/Project';

import styles from '../styles/Work.module.scss';
import { nanoid } from 'nanoid';
import { IProject } from '../types';

export default function Work({ projectPlatforms }: { projectPlatforms: { [projectPlatfrom: string]: IProject[] } }) {
    return (
      <Base>
        <main className={styles.projects} role="main">
          {Object.entries(projectPlatforms).map(([platformName, projects]: [string, IProject[]]) => 
            <section key={nanoid()}>
              <h2 className={styles.platformName}>{platformName}</h2>
              <div className={styles.platformProjects}>
                {projects.map((project: IProject) => <Project project={project} key={nanoid()} />)}
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