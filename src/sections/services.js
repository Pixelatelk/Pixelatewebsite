import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from '../components/block-title';
import ServiceCard from '../components/cards/service-card';
import serviceImage1 from '../assets/web-development.png';
import serviceImage2 from '../assets/mobiledevelopment.png';
import serviceImage3 from '../assets/search-engine-optimization2.png';
import serviceImage4 from '../assets/social-media.png';
import serviceImage5 from '../assets/ux-design.png';
import serviceImage6 from '../assets/add.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'Our Web Development service crafts user-centric websites with cutting-edge technology, ensuring a captivating online presence that drives results.',
    heading: 'Web Developement',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'From concept to code, we craft customized solutions for iOS and Android platforms, ensuring seamless functionality, stunning design, and a standout user experience.',
    heading: 'Mobile App Development',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'Our tailored strategies fine-tune your website to perfection, ensuring it ranks higher in search engine results. Drive organic traffic, increase leads, and dominate your market niche.',
    heading: 'SEO Optimization',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      "We specialize in creating targeted campaigns that engage your audience, drive traffic, and boost conversions. With precise audience targeting and compelling ad creatives, we'll elevate your brand's visibility across platforms like Facebook, Instagram, Twitter, and more",
    heading: 'Social Media Advertising',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      "From eye-catching visuals to seamless interactions, we elevate your brand's digital presence, ensuring memorable and engaging interactions for every user.",
    heading: 'UI/UX Designing',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'Streamline your website management with our expert Content Management System (CMS) support. We ensure seamless operation, timely updates, and swift issue resolution, allowing you to focus on your content and audience engagement. ',
    heading: 'CMS Support',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Our Services"
          text="Crafting Digital Brilliance, One Pixel at a Time."
          sx={{ color: 'white !important' }}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    mt: [8, 7, 7],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
