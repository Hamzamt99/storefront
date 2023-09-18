import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './style.scss'
import { connect } from 'react-redux';
function Header(props) {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Link to="/" className='link'>Store App</Link>
                    <Nav className="me-auto">
                        {/* <Link to="/" className='link'>Home</Link>
                        <Link to="/about" className='link' >About</Link> */}
                        <Link to="/cart" className='link'>Cart({props.cart.cart.length})</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
})



export default connect(mapStateToProps)(Header);