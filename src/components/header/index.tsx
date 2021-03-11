import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Fade,
} from "reactstrap";
import "./styles.scss";
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar light expand="md">
        <NavbarText className={`${isOpen && "navBarTextMobile"}`} href="/">
          renata
        </NavbarText>
        <NavbarToggler onClick={toggle} className="ml-auto" />
        <Fade in={isOpen} className="mt-3" navbar>
          <Nav className={`ml-auto ${isOpen && "mx-auto"}`} navbar>
            <NavItem>
              <NavLink href="/components/">PORTFOLIO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                ABOUT ME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                CONTACT
              </NavLink>
            </NavItem>
          </Nav>
        </Fade>
      </Navbar>
    </div>
  );
};
