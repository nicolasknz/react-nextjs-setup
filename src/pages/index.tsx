import React from 'react'
import Head from 'next/head'

// import Logo from '../assets/logo.svg'
import NextjsIcon from '../assets/next-js.svg'
import reactjsIcon from '../assets/react.png'

import { Container, Logo } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Logo>
        <NextjsIcon />
        <img src={reactjsIcon} alt="" />
      </Logo>
      <h1>ReactJS Structure</h1>
      <p>ReactJs + Next.js + Styled Components + ESLint + Prettier</p>
    </Container>
  )
}

export default Home
