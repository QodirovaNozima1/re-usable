import React from 'react'
import Hero from '@/components/hero/Hero'
import Description from '@/components/description/Description'
import Project from '@/components/project/Project'
import Foiz from '@/components/foiz/Foiz'
import Layout from '@/pages/layout/Layout'
const Home = () => {
  return (
    <>
    <Hero/>
    <Description/>
    <Project/>
    <Foiz/>
    <Layout/>
    </>
  )
}

export default Home