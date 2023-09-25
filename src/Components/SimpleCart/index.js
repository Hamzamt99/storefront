import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from '../store/cart'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function App() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const product = state.products.products
    console.log(product);
    return (
        < MDBContainer fluid className="my-5" >
            {
                product &&
                product.map(item => (
                    < MDBRow className="justify-content-center">
                        <MDBCol md="8" lg="6" xl="4">
                            <MDBCard style={{ borderRadius: "15px" }}>
                                <MDBRipple
                                    rippleColor="light"
                                    rippleTag="div"
                                    className="bg-image rounded hover-overlay"
                                >
                                    <MDBCardImage
                                        src={item.thumbnail}
                                        fluid
                                        className="w-100"
                                        style={{
                                            borderTopLeftRadius: "15px",
                                            borderTopRightRadius: "15px",
                                        }}
                                    />
                                    <a href="#!">
                                        <div className="mask"></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody className="pb-0">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p>
                                                <a href="#!" className="text-dark">
                                                    {item.title}
                                                </a>
                                            </p>
                                            <p className="small text-muted">{item.category}</p>
                                        </div>
                                        <div>
                                            <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                            </div>
                                            <p className="small text-muted">Rated {item.rating}</p>
                                        </div>
                                    </div>
                                </MDBCardBody>
                                <hr class="my-0" />
                                <MDBCardBody className="pb-0">
                                    <div className="d-flex justify-content-between">
                                        <p>
                                            <a href="#!" className="text-dark">
                                                ${item.price}
                                            </a>
                                        </p>
                                    </div>
                                    <p className="small text-muted">Price</p>
                                </MDBCardBody>
                                <hr class="my-0" />
                                <MDBCardBody className="pb-0">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-dark">{item.brand}</p>
                                    </div>
                                    <p className="small text-muted">Brand</p>
                                </MDBCardBody>
                                <hr class="my-0" />
                                <MDBCardBody className="pb-0">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-dark">{item.stock}</p>
                                    </div>
                                    <p className="small text-muted">stock</p>
                                </MDBCardBody>
                                <hr class="my-0" />
                                <MDBCardBody className="pb-0">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-dark">{item.description}</p>
                                    </div>
                                    <p className="small text-muted">description</p>
                                </MDBCardBody>
                                <hr class="my-0" />
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-4" style={{ padding: '20px' }} onClick={() => dispatch(addCart(item))}>
                                    <Button color="primary">Place Order<Link to="/cart"></Link></Button>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                ))
            }

        </MDBContainer >
    );

}

export default App;