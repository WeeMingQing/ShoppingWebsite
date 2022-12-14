import {Button, Container, Nav, Navbar as NavBarBs} from "react-bootstrap" 
import {NavLink} from "react-router-dom"
export function NavBar() {
    return(
        <NavBarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to={"/"} as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to={"/store"} as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to={"/about"} as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button style={{display:"flex", width:"3rem", height:"3rem", justifyContent:"center", alignItems:"center", position:"relative"}} 
                        variant="outline-primary"
                        className="rounded-circle">
                    <img style={{ width:"2rem", height:"2rem"}}src ="https://cdn-icons-png.flaticon.com/512/2838/2838895.png"/>
                </Button>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center
                " style={{color:"white", width:"1.5rem", height:"1.5rem", position:"absolute", bottom:0, right:0, 
                transform: "translate(-25%, 2%)", }}>
                    3
                </div>
            </Container>
        </NavBarBs>
    )
}