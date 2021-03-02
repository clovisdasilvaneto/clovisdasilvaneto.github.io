import React from "react"
import { FaLinkedin, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa"
import { Link } from "gatsby"

import { HeaderWrapper, HeaderLogo, HeaderContainer } from "./styled"
import Navigation from "../Navigation"
import Container from "../ui/Container"

const menuItems = [
  { name: "Blog", link: "/blog" },
  { name: "Projects", link: "/projects" },
  { name: "Talks and Cases", link: "/talks-and-cases" },
]

const socialItems = [
  { icon: <FaYoutube />, external: true, link: "http://google.com" },
  { icon: <FaGithub />, external: true, link: "http://google.com" },
  { icon: <FaLinkedin />, external: true, link: "http://google.com" },
  { icon: <FaInstagram />, external: true, link: "http://google.com" },
]

function Header({ children, hasPicture }) {
  return (
    <HeaderWrapper>
      <HeaderContainer as="header">
        <HeaderLogo>
          {hasPicture && (
            <img src="/images/clovis-neto.jpg" alt="Clóvis Neto" />
          )}

          <Link to="/">Clóvis Neto</Link>
        </HeaderLogo>
        <Navigation straight={true} items={socialItems} />
        <Navigation items={menuItems} />
      </HeaderContainer>

      {Boolean(children) && <Container>{children}</Container>}
    </HeaderWrapper>
  )
}

export default Header
