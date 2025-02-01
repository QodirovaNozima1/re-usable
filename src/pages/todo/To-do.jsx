import React from 'react'
import Voluntary from '@/components/voluntary/Voluntary'
import Environment from '@/components/environment/Environment'
import Layout from '@/layout/Layout'
import Project from '@/components/project/Project'

const toDo = () => {
  return (
    <>
    <Voluntary/>
    <Environment/>
    <Project/>
    <br />
    
    <Layout/>
    </>
  )
}

export default toDo