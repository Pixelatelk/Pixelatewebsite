import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Pixelate is a leading technology solutions provider, offering expert services in web development, app development, search engine optimization (SEO), social media management, and content management system (CMS) solutions. With a dedicated team of experienced professionals, we craft innovative digital experiences tailored to meet the unique needs of businesses across diverse industries. Elevate your online presence with Pixelate and stay ahead in the digital landscape.',
  author = 'Pixelate Creations',
  meta,
  title = 'Pixelate-Crafting Digital Brilliance',
  keywords="Web Development Sri Lanka, App Development Sri Lanka, SEO Services Sri Lanka, Social Media Management Sri Lanka, CMS Solutions Sri Lanka, Sri Lankan Tech Company, Sri Lanka IT Services, Mobile App Development Sri Lanka, SEO Company in Sri Lanka, Sri Lanka Web Design, E-commerce Development Sri Lanka, Sri Lanka Software Development, UI/UX Design Sri Lanka, Sri Lankan Digital Marketing, Sri Lanka E-commerce Solutions, Sri Lankan Web Development Agency, Sri Lanka Mobile App Developers, SEO Expert Sri Lanka, Sri Lankan Content Management, Digital Marketing Agency Sri Lanka",

}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      name:'keywords',
      content: keywords,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/assets/pixelateicon.png" type="image/png" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
