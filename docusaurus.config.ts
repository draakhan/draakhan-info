import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'draakhan.info',
  tagline: 'Strona osobista Bartłomieja "Draakhana" Szymańskiego',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.draakhan.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'draakhan', // Usually your GitHub org/user name.
  projectName: 'draakhan-info', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/banner.jpg',
    navbar: {
      title: 'Draakhan.info',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/draakhan',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/draakhan/',
            },
          ],
        },
        {
          title: 'Tech',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/draakhan',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by Draakhan. Built with <a href="https://docusaurus.io/" title="Docusaurus" target="_blank">Docusaurus</a>. Icons by <a href="https://icons8.com/" title="Icons8" target="_blank">Icons8</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
