import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { deleteCart } from '../store/cart'
import { useDispatch } from "react-redux";

export default function Checkout() {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  let sum = 0
  data.map(item => {
    sum += item.price
  })
  useEffect(() => {
    axios.get('https://sample-back-end.onrender.com/product')
      .then(data => {
        setData(data.data)
      })
  }, [data])
  return (
    <>
      <section
        className="h-100 gradient-custom"
        style={{ backgroundColor: "#eee" }}
      >
        {
          data.length ?
            <MDBContainer className="py-5 h-100">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="10" xl="8">
                  <MDBCard style={{ borderRadius: "10px" }}>
                    <MDBCardHeader className="px-4 py-5">
                      <MDBTypography tag="h5" className="text-muted mb-0">
                        Thanks for your Order
                      </MDBTypography>
                    </MDBCardHeader>
                    < MDBCardBody className="p-4" >

                      {data.map((item) => (
                        <MDBCard className="shadow-0 border mb-4">
                          <MDBCardBody>
                            <MDBRow>
                              <MDBCol md="2">
                                <MDBCardImage
                                  src={item.thumbnail}
                                  fluid
                                  alt="Phone"
                                />
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0">{item.title}</p>
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0 small">Brand: {item.brand}</p>
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0 small">Qty: 1</p>
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0 small">price: {item.price}$</p>
                              </MDBCol>
                            </MDBRow>
                            <hr
                              className="mb-4"
                              style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                            />
                            <MDBRow className="align-items-center">
                              <MDBCol md="2">
                                <p className="text-muted mb-0 small">Delete</p>
                              </MDBCol>
                              <MDBCol md="10">
                                <Button onClick={() => dispatch(deleteCart(item))}>Delete</Button>
                              </MDBCol>
                            </MDBRow>
                          </MDBCardBody>
                        </MDBCard>

                      ))}
                      <div className="d-flex justify-content-between pt-2">
                        <p className="fw-bold mb-0">Order Details</p>
                        <p className="text-muted mb-0">
                          <span className="fw-bold me-4">Total</span> ${sum}
                        </p>
                      </div>
                    </MDBCardBody>

                  </MDBCard>

                </MDBCol>
              </MDBRow>
            </MDBContainer>
            : null
        }
      </section >
      {
        data.length ?
          <div className="rounded-bottom" style={{ backgroundColor: "#eee" }}>
            <MDBCardBody>
              {" "}
              <p className="mb-4">Your payment details</p>
              <MDBInput
                label="Card Number"
                id="form1"
                type="text"
                placeholder="1234 5678 1234 5678"
                wrapperClass="mb-3"
              />
              <MDBRow className="mb-3">
                <MDBCol size="6">
                  <MDBInput
                    label="Expire"
                    id="form2"
                    type="password"
                    placeholder="MM/YYYY"
                    wrapperClass="mb-3"
                  />
                </MDBCol>
                <MDBCol size="6">
                  <MDBInput
                    label="CVV"
                    id="form4"
                    type="password"
                    placeholder="CVV"
                    wrapperClass="mb-3"
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn block color="info">
                Place Order
              </MDBBtn>
            </MDBCardBody>
          </div>
          : null
      }

    </>
  );
}