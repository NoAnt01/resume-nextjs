/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../component/education';
import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';
import { Profile } from '../component/profile';
import { Style } from '../component/common/Style';
import Payload from '../payload';

function Yosume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Education.Component payload={Payload.education} />
        <Footer.Component payload={Payload.footer} />
      </Container>
    </>
  );
}

export default Yosume;
