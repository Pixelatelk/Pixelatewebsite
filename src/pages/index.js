import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import Services from '../sections/services';
import Jackpot from '../sections/jackpot';
import CallToAction from '../sections/call-to-action';
import Featured from 'sections/featured';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Blogs from 'sections/blogs';
import FAQ from 'sections/faq';
import Subscribe from '../sections/subscribe';
import Video from 'components/Video';




export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Pixelate" 
          description="Pixelate is a leading technology solutions provider, offering expert services in web development, app development, search engine optimization (SEO), social media management, and content management system (CMS) solutions. With a dedicated team of experienced professionals, we craft innovative digital experiences tailored to meet the unique needs of businesses across diverse industries. Elevate your online presence with Pixelate and stay ahead in the digital landscape."
          keywords="Web Development Sri Lanka, App Development Sri Lanka, SEO Services Sri Lanka, Social Media Management Sri Lanka, CMS Solutions Sri Lanka, Sri Lankan Tech Company, Sri Lanka IT Services, Mobile App Development Sri Lanka, SEO Company in Sri Lanka, Sri Lanka Web Design, E-commerce Development Sri Lanka, Sri Lanka Software Development, UI/UX Design Sri Lanka, Sri Lankan Digital Marketing, Sri Lanka E-commerce Solutions, Sri Lankan Web Development Agency, Sri Lanka Mobile App Developers, SEO Expert Sri Lanka, Sri Lankan Content Management, Digital Marketing Agency Sri Lanka"
/>
          
          <Banner />
          <Services />
          <Jackpot />
          <CallToAction />
          
         
          
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
