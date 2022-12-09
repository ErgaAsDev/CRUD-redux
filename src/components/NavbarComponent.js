import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   NavbarText,
//   Container,
// } from "reactstrap";

// const NavbarComponent = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <Container>
//           <NavbarBrand href="/">ErgaAsDev</NavbarBrand>
//           <NavbarToggler onClick={toggle} />
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="mr-auto" navbar>
//               <NavItem>
//                 <NavLink href="/components/">Home</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">
//                   About Me
//                 </NavLink>
//               </NavItem>
//             </Nav>
//             <NavbarText>Admin</NavbarText>
//           </Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };


function NavbarComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">ErgaAsDev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggle} />
        <Navbar.Collapse id="basic-navbar-nav" isOpen={isOpen}>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://github.com/reactstrap/reactstrap">Source</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarComponent;
