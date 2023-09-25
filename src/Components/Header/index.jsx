import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './style.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
function Header() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/product')
            .then(data => {
                setData(data.data)
            })
    }, [data])
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Link to="/" className='link'>Store App</Link>
                    <Nav className="me-auto">
                        {/* <Link to="/" className='link'>Home</Link>
                        <Link to="/about" className='link' >About</Link> */}
                        <Link to="/cart" className='link'>Cart({data.length})</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}




export default Header;