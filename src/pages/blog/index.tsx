import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// @ts-ignore
import { useContext } from 'react';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { nanoid } from 'nanoid';

import { Post } from '../../types';
import Base from '../../components/Base';

export default function BlogPage({ posts }: { posts: Post[] }) {
  return (
    <Base>
      <div className="posts">
        {posts.map((post: Post, ndx: number) => {
          const { title, description, date } = post.frontMatter;
          return (
            <article className="post" key={nanoid()}>
              <div className="content">
                <Link href={'/blog/' + post.slug} passHref key={ndx}>
                  <h4 className="cardTitle">
                    {title}
                  </h4>
                </Link>
                <p className="cardText">{description}</p>
                <p className="cardText">
                  <small className="muted">{date}</small>
                </p>
              </div>
              <Image
                src={post.frontMatter.thumbnailUrl}
                alt="thumbnail"
                width="200"
                height="80"
                objectFit="cover"
              />
            </article>
          )}
        )}
      </div>
    </Base>
  );
}

export function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'));

    const posts = files.map((filename: string) => {
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        frontMatter,
        slug: filename.split('.')[0]
      }
    });

    return {
      props: {
        posts
      }
    };
}

