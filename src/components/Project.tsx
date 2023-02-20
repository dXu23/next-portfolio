
import { CgWebsite } from 'react-icons/cg';
import { FaCode } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Project.module.scss';

import { IProject } from '../types';
import { nanoid } from 'nanoid';

export default function Project({ project }: { project: IProject }) {
    return (
        <article className={styles.project}>
            <Image
              src={project.img.src}
              alt={project.img.alt}
              width="250"
              height="250"
              className={styles.showcase}
              loading="lazy"
            />
            <div>
              <h3>{project.title}</h3>
              <p>
                {project.description}
              </p>
              <h4>Built With</h4>
              <ul className={styles.tags}>
                {project.tags.map((tag: string) => <li key={nanoid()}>{tag}</li>)}
              </ul>
              <Link href={project.website}>
                <CgWebsite />
              </Link>
              <Link href={project.code}>
                <FaCode />
              </Link>
            </div>
        </article>
    );
}