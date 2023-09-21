import React from 'react';
import { Box, Container, Flex, Image, Text, Heading } from 'theme-ui';
import JackpotCard from 'components/cards/jackpot-card';
import jackpotImage from 'assets/code.png';
import jackpotImage1 from 'assets/jackpot-1-1.png';
import jackpotImage2 from 'assets/jackpot-1-2.png';

const JACKPOT_DATA = [
  {
    
    text:
      'Welcome to Pixelate, your dynamic and innovative web solutions provider. With a solid foundation in website development, SEO optimization, mobile app development, and social media management, we are dedicated to helping businesses thrive in the digital landscape. Our team of experts harnesses technical prowess and creative flair to deliver customized solutions that enhance online presence, drive organic traffic, and propel business growth.',
    heading: 'Smart Features',
  },
 
];

const Jackpot = () => {
  return (
    <Box as="section" id = "jackpot"sx={styles.jackpot}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.image}>
            <Image src={jackpotImage} alt="jackpot image" />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.heading}>
              
              <Heading as="h3">About Us</Heading>
              <Heading as="h4">est. 2023</Heading>
            </Box>
            <Box sx={styles.jackpotCardBox}>
              {JACKPOT_DATA.map(({  heading, text }, index) => (
                <JackpotCard
                  
                  heading={heading}
                  text={text}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Jackpot;

const styles = {
  jackpot: {
    pt: ['65px', null, null, null, '85px', null, '125px'],
  },
  flex: {
    flexWrap: ['wrap', null, null, null, null, 'nowrap'],
    justifyContent: 'center',
  },
  image: {
    flex: ['0 0 100%', null, null, null, null, '0 0 62.5%'],
    textAlign: ['center', null, null, null, null, null, null],
    
    img: {
      maxWidth: ['80%', null, null, null, null, null, 'none'],
      float: ['none', null, null, null, null, 'left', 'left'],
    },
  },
  content: {
  
    textAlign: ['center', null, null, null, null, '0 0 37.5%'],
    width: '100%', 
  },
  heading: {
    mb: '30px',
    pt: '60px',
    textAlign: ['center', null, null, null, null, 'center'],
    pl: ['0', null, null, '30px'],
    maxWidth: ['80%', null, null, '100%'],
    mx: ['auto', null, null, '0'],
    span: {
      display: 'block',
      fontSize: '18px',
      color: 'primary',
      fontWeight: 700,
      lineHeight: 1,
      mb: '20px',
    },
    h3: {
      color: '#D5D8DC',
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1.36,
    },
    h4: {
      color: '#ABB2B9',
      fontSize: ['19px', null, null, null, '25px', '20px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1.36,
    },
  },
  jackpotCardBox: {
    display: ['block', null, null, null, null, 'block'],
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    
  },
};
