import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  dark,
  defaultStyle,
  tomorrowNight, 
  tomorrow,
  gruvboxDark,
  gruvboxLight,
  stackoverflowDark,
  stackoverflowLight,
  solarizedDark,
  solarizedLight,
  atomOneDark,
  atomOneLight
  // @ts-ignore
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';


import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import Base from '../../components/Base';
import { SettingsContext } from '../../components/SettingsContext';

// @ts-ignore
import React, { useContext, ReactNode } from 'react';

interface PostPageProps {
  frontMatter: { [key: string]: any };
  slug: string;
  mdxSource: MDXRemoteSerializeResult;
}
export default function PostPage({ frontMatter: { title }, mdxSource }: PostPageProps) {
  const { settings } = useContext(SettingsContext);

  let syntaxMap = new Map<string, object>([
    ['default-dark', dark],
    ['default-light', defaultStyle],
    ['tomorrow-dark', tomorrowNight],
    ['tomorrow-light', tomorrow],
    ['gruvbox-dark', gruvboxDark],
    ['gruvbox-light', gruvboxLight],
    ['ayu-dark', stackoverflowDark],
    ['ayu-light', stackoverflowLight],
    ['solarized-dark', solarizedDark],
    ['solarized-light', solarizedLight],
    ['material-dark', atomOneDark],
    ['material-light', atomOneLight],
  ]);

  // style={syntaxMap.get(`${settings.theme}-${settings.scheme}`)} 
  return (
    <Base>
      <div>
        <h1>{title}</h1>
        <MDXRemote
          {...mdxSource}
          components={{ SyntaxHighlighter: ({ children }: { children: ReactNode }) => 
            <SyntaxHighlighter style={syntaxMap.get(`${settings.theme}-${settings.scheme}`)}>{children}</SyntaxHighlighter>
          }}
        />
      </div>
    </Base>
  )
}
export async function getStaticProps({ params: { slug }}: { params: { slug: string } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', `${slug}.mdx`),
        'utf-8'
    );

    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    };
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));


    const paths = files.map((filename: string) => ({
      params: {
        slug: filename.replace('.mdx', '')
      }
    }));

    return {
      paths,
      fallback: false
    };
}