import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
const JackpotCard = ({ image, heading, text }) => {
  return (
    <Box sx={styles.jackpotCard}>
      
      <Box sx={styles.content}>
        
        <Text as="p">{text}</Text>
      </Box>
    </Box>
  );
};

export default JackpotCard;

const styles = {
  jackpotCard: {
    p: ['30px', null, null, null, null, '15px 30px', '30px'],
    display: 'flex',
    flexDirection: ['row', null, null, 'row'],
    textAlign: ['center', null, null, 'left'],
    transition: 'all 500ms ease',
    borderRadius: '10px',
    backgroundColor: '#181728',

    '&:hover': {
      boxShadow: ' 0px 8px 24px rgba(69, 88, 157, 0.07)',
    },
  },
  image: {
    flexShrink: '0',
    mr: ['auto', null, null, 'auto'],
    mb: ['20px', null, null, '0px'],
    ml: ['auto', null, null, 'auto'],
  },
  content: {
    h3: {
      color: '#D5D8DC',
      fontSize: '18px',
      lineHeight: 1,
      fontWeight: 700,
      mb: '10px',
    },
    p: {
      fontSize: '15px',
      color: '#D5D8DC',
      lineHeight: 1.73,
    },
  },
};
