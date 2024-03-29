import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import Divider from "../components/Divider"

import Resume from "../assets/Resume.pdf"

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`about`, `buoyantair`, `javascript`, "react", "developer"]}
    />
    <Section>
      <h1>about</h1>
      <p>
        Hey! I'm a javascript developer working on free and open source
        software. I have experience working in teams, designing and developing
        word-class projects using various modern web technologies. You can find
        my resume{" "}
        <a href={Resume} alt="Download Resume">
          here
        </a>
        .
      </p>
      <Divider />
    </Section>
  </Layout>
)

export default AboutPage
