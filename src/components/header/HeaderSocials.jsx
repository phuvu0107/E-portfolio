import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const HeaderSocials = () => {
    const primaryColor = {
        color: '#4db5ff'
    }
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/truong-phu-vu/' targer='_blank' >
                <IconContext.Provider value={primaryColor} className='socials-hover'>
                    <div>
                        <BsLinkedin />
                    </div>
                </IconContext.Provider>
            </a>
            <a href='https://github.com/phuvu0107' targer='_blank'>
                <IconContext.Provider value={primaryColor} >
                    <div>
                        <BsGithub />
                    </div>
                </IconContext.Provider>
            </a>
        </div>
    )
}

export default HeaderSocials