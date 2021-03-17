import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Fade,
  Collapse,
} from "reactstrap";
import "./styles.scss";
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarText className={`${isOpen && "navBarTextMobile"}`} href="/">
          RENATA TRINDADE
        </NavbarText>

        <NavbarToggler onClick={toggle} className="ml-auto" />
        <Collapse isOpen={isOpen} /* className="mt-3" */ navbar>
          {" "}
          <Nav className={`ml-auto ${isOpen && "navMobile"}`} navbar>
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
        </Collapse>
      </Navbar>
    </div>
  );
};
