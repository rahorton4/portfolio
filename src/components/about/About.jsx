import React from 'react';
import './about.css';
import ME from '../../assets/selfie.jpg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <img className='about__me-img' src={ME} alt='Graduation' />
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h3>Experience</h3>
              <h6>3+ Years from education and personal projects</h6>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h3>Projects</h3>
              <h6>Please see recent work</h6>
            </article>
          </div>

          <p>Hello! My name is Rachel Horton and I am a recent graduate of Park University with a degree in Computer Science and Information Systems. I graduated with my Associates in Arts from Maple Woods Community College in 2014. 2 and a half years ago, I really wanted to understand how game development and computers worked, and returned to school to purse my bachelors!</p>
          <p>In my free time, I like to play video games, my current favorites being Tiny Tina's Wonderland and Assassins Creed: Odyseey. I am also a huge fan of the classic Nintendo games! When I'm not playing video games, I enjoy playing with my dog, water-skiing, and my favorite thing..cheering on the Kansas City Chiefs! </p>
          <p>Please contact me if you want to talk job opportunites, video games, or football, I would love to hear from you! </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
