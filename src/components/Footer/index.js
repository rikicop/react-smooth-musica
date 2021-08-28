import React from 'react';
import {animateScroll as scroll} from 'react-scroll'


import {FaFacebook,FaInstagram,/* FaYoutube,
        FaTwitter,FaLinkedin */} from 'react-icons/fa';

import {FooterContainer, FooterWrap,/*  FooterLinksContainer, 
        FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, 
        FooterLink, */SocialMedia,SocialMediaWrap,SocialLogo,
        WebsiteRights,SocialIcons,SocialIconLink} from './FooterElements';

const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();

    };
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        Escuela de Música
                        </SocialLogo>
                        <WebsiteRights>Escuela de Música © {new Date().getFullYear()}
                        Todos Los Derechos Reservados</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/groups/EstudiantesFEDAluz" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/fedamusica/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
