import React from 'react';
import './aboutCSS.css';
import ME from '../../assets/me-full-img.jpg';
import { FaAward } from 'react-icons/fa';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { IoMdGitNetwork } from 'react-icons/io'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-image'>
            <img src={ME} alt="About section pic" />
          </div>
        </div>

        <div className="about-content">

          <div className="about-cards">

            <article className="about-card">
              <BsFillJournalBookmarkFill className='about-icons' />
              <h5>Experience</h5>
              <small>1 year of working</small>
            </article>

            <article className="about-card">
              <FaAward className='about-icons' />
              <h5>Education</h5>
              <small>A Junior Computer Science student at San Jose State University</small>
            </article>

            <article className="about-card">
              <IoMdGitNetwork className='about-icons' />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>

          </div>
          
          <div className='about-text'>
            <p >
              I am currently a junior at San Jose State University pursuing a Computer Science Bachelor's degree. I am aspiring to be a Fullstack Software Engineer. I have been working on multiple projects from front-end to full-stack utilizing MERN stack to create responsive and interactive websites.
            </p>
            <p>
              When it comes to working in a team, I am able to apply the Agile methodology to manage tasks and the process of the projects. I also developed interpersonal skills such as communication, critical thinking, and leadership skills. In my leisure time, I enjoy reading technology news, books, playing badminton, and learning new programming languages. I am seeking a Software Engineer internship where I can utilize my knowledge on real-world problems while expanding my horizon of intellect.
            </p>
          </div>
          
          <a href='#contact' className='btn btn-primary contact-connect'>Let's Connect</a>

        </div>

      </div>
    </section>
  )
}

export default About