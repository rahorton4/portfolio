import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      {/* the target opens link in new tab */}
      <a href='https://www.linkedin.com/feed/' target='_blank' rel='noopener noreferrer'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/rahorton4' target='_blank' rel='noopener noreferrer'>
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
