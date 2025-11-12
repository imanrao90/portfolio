import React from 'react'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Hero />
      <SkillsSection />
      <ProjectsSection limit={2} />
      <Button onClick={() => navigate('/projects')} title='View More' />
      <ContactForm />
    </>
  )
}

export default Home