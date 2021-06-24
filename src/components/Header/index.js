
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row ,Col} from 'reactstrap'
import './Header.scss'
const Header = () => {
    return (
       <header className="header">
           <Container>
               <Row className="justify-content-between">
                   <Col xs="auto">
                       <a className="header__link header__title" href="/123">FrontEnd</a>
                   </Col>
                   <Col xs="auto">
                       <NavLink exact className="header__link" to="/photos" activeClassName="header__link--active">Redux Project</NavLink>
                   </Col>
               </Row>
           </Container>
       </header>
    )
}

export default Header
