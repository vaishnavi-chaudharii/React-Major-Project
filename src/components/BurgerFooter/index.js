import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer, FooterWrapper, SocialMedia, SocialMediaWrapper, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements'
import {BrowserRouter as Router} from 'react-router-dom';

const Footer = () => {
    return (
        <Router>
        <FooterContainer>
            <FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/">Burger</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube" rel="noopener noreferrer"><FaYoutube /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
        </Router>
    )  
}

export default Footer
