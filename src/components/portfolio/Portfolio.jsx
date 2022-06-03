import React from 'react';
import './portfolio.css';
import Data from './projects';
/* Link will render in the browser when going to different domains. will not make req to server */
/* change <a></a> to <Link> and use 'to' as an attribute instead of href */

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {Data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a id='github_btn' href={github} className='btn' target='_blank' rel='noopener noreferrer'>
                  Github
                </a>
                <a id='demo_btn' href={demo} className='btn' target='_blank' rel='noopener noreferrer'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
