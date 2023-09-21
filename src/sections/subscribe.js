import React, { useState } from 'react';
import { Button, Input, Box, Container, Heading, Text } from 'theme-ui';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyjkJZqjytTQC9E6RwiLmGC6YZ4C1I7U-xFo7yO3pQjpLwQSeKvy7JWwcqPvQ96Ai3r/exec';

    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('message', message);

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });

      if (response.ok) {
        alert('Form submitted successfully!');
        setEmail('');
        setName('');
        setPhone('');
        setMessage('');
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    
    <div style={styles.subscribe}>
      <Box as="section" sx={styles.subscribe}>
       <Heading as="h3">Contact Us Now!</Heading>
        <Text as="p">
          Drop us a line and get tailored information of our pricing plans.
        </Text>
        </Box>
      <form onSubmit={handleSubmit} >
      <div style={styles.inputWrapper}>

        <input
          type="text"
          id="name"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputWrapper}>

        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputWrapper}>

        <input
          type="text"
          id="phone"
          placeholder="Enter your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputWrapper}>

        <input
          type="text"
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={styles.input}
        />
      </div>
        <button as='button' type="submit" style={styles.button} >Send</button>
      </form>
    </div>
  );
};

export default Subscribe;


const styles = {
  inputWrapper: {
    marginBottom: '20px',
    alignItems: 'center',
    textAlign: 'center',
    width:'100%',
     // Add margin between input fields
  },
  
  subscribe: {
    py: ['80px', null, null, null, '80px', '100px', '140px'],
    backgroundColor: '#020718',
    mx:'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    
    h3: {
      textAlign: 'center',
      fontSize: ['23px', null, null, null, null, '30px', '36px'],
      lineHeight: [1.5, null, null, '1'],
      color: '#fff',
      letterSpacing: ['-0.5px'],
      mb: ['0px', null, null, '15px'],
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
    },
    p: {
      fontSize: ['16px'],
      color: '#fff',
      opacity: '.6',
      letterSpacing: ['-0.5px'],
      textAlign: 'center',
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '0'],
    },
  },
  form: {
    width: ['100%'],
    maxWidth: ['555px'],
    mx: ['auto'],
    display: ['flex'],
    flexWrap: ['wrap'],
    mt: ['30px', null, null, null, '60px'],
  },
  input: {
    width: '100%',
    maxWidth: ['100%', null, '100%', '100%'],
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255, .08)',
    outline: 'none',
    color: 'rgba(255,255,255, .8)',
    fontSize: '16px',
    pl: ['0px', null, null, '30px'],
    height: ['50px', null, null, '60px'],
    mr: ['0px', null, null, '15px'],
    textAlign: ['center', null, null, 'center'],
    mb:'10px',
    padding: ['0px 70.75px'],
    margin: '12px 0',
    mb:'20px',
    height: '60px',
    alignItems: 'center',
    textAlign: 'center',
    mx: ['auto', null, null, '0'],
    

  },
  button: {
    backgroundColor: '#181728',
    borderRadius: '10px',
    height:'50px',
    pb:'10px',
    fontWeight: '500',
    fontSize: ['18px'],
    color: 'white',
    letterSpacing: '0.5px',
    outline: 'none',
    padding: ['5px 50.75px'],
    minHeight: ['50px', null, null, '60px'],
    width: ['100%', null, null, 'auto'],
    mt: ['10px', null, null, '0'],
    mb:'10px',
    mx: ['auto', null, null, '0'],
    '&:hover': {
      backgroundColor: '#fff',
      opacity: '0.8',
    },
  },
};
