export type Theme = 'default' | 'tomorrow' | 'gruvbox' | 'ayu' | 'solarized' | 'material';
export type Scheme = 'light' | 'dark';

export interface Settings {
    theme: Theme;
    scheme: Scheme;
}

export interface Post {
    slug: string;
    frontMatter: { [key: string]: any };
}

export interface IProject {
    title: string;
    tags: string[];
    website: string;
    description: string;
    code: string;
    img: {
        src: string;
        alt: string;
    }
}
