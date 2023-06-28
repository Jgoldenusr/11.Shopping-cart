import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { carouselItemsDB, itemDB } from "./others";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import headerImg from "../img/logo.png";
import uniqid from "uniqid";
//react components
function Header({ setShow }) {
  /* jshint ignore:start */
  return (
    <Navbar expand="md" bg="light" variant="light" className="Lato shadow">
      <Container className="w-auto">
        <Navbar.Brand>
          <img alt="" src={headerImg} width="80" height="40" />
          {""}
        </Navbar.Brand>
      </Container>
      <Container className="float-end w-auto fs-3 fw-bold">
        <Link to="/" className="noDeco">
          <Navbar.Brand className="hoverAnim">Inicio</Navbar.Brand>
        </Link>
        <Link to="/products" className="noDeco">
          <Navbar.Brand className="hoverAnim">Productos</Navbar.Brand>
        </Link>
        <Navbar.Brand
          onClick={() => {
            setShow(true);
          }}
          className="hoverEffect"
        >
          <FontAwesomeIcon icon={faShoppingCart} className="fs-5" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
  /* jshint ignore:end */
}
function MyCart({ add, remove, setShow, show, myItems, grandTotal }) {
  /* jshint ignore:start */
  return (
    <Offcanvas
      className="gradient"
      show={show}
      onHide={() => {
        setShow(false);
      }}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="Lato fw-bold mx-auto">
          Mi carrito
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h3>{`Total: $${grandTotal.toFixed(2)}`}</h3>
        <MyItemsList myItems={myItems} add={add} remove={remove}></MyItemsList>
      </Offcanvas.Body>
    </Offcanvas>
  );
  /* jshint ignore:end */
}
function MyItemsList({ add, remove, myItems }) {
  /* jshint ignore:start */
  return (
    <Container>
      {myItems.map((item) => {
        return (
          <Row key={item.id} className="p-3">
            <Col xs={4}>
              <Image src={item.src} rounded fluid></Image>
            </Col>
            <Col xs={8}>
              <Row>
                <h5 className="text-center text-truncate">{item.name}</h5>
              </Row>
              <Row>
                <Col xs={3}>
                  <Button
                    size="sm"
                    variant="outline-dark"
                    onClick={(e) => remove(item.name)}
                  >
                    <FontAwesomeIcon icon={faMinus} className="fs-6" />
                  </Button>
                </Col>
                <Col>
                  <h5 className="text-center">{item.qty}</h5>
                </Col>
                <Col xs={3}>
                  <Button
                    size="sm"
                    variant="outline-dark"
                    onClick={(e) => add(item.name)}
                  >
                    <FontAwesomeIcon icon={faPlus} className="fs-6" />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
  /* jshint ignore:end */
}
function ItemCarousel() {
  const [width, setWidth] = useState(window.innerWidth);
  /*const md = 768; */

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const redux = (accumulated, current, index) => {
    const groupIndex = Math.floor(index / (width > 600 ? 3 : 1));
    if (!accumulated[groupIndex]) accumulated[groupIndex] = [];
    accumulated[groupIndex].push(current);
    return accumulated;
  };

  /* jshint ignore:start */
  return (
    <Carousel variant="dark" className="p-5">
      {carouselItemsDB.reduce(redux, []).map((row) => {
        return (
          <Carousel.Item key={uniqid()}>
            <Container>
              <Row>
                {row.map((item) => {
                  return (
                    <Col key={item.id} xs={width > 600 ? 4 : 12}>
                      <Card className="mx-1 h-100">
                        <Link
                          to="/products"
                          state={{ item: `${item.id}` }}
                          className="noDeco"
                        >
                          <Card.Img variant="top" src={item.img} />
                        </Link>
                        <Card.Body className="p-4">
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.text}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
  /* jshint ignore:end */
}
function Products({ addToCart }) {
  const [selectedItem, setItem] = useState("polo");
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setItem(location.state.item);
    }
  }, [location.state]);

  const showThisItem = function (eventKey) {
    setItem(eventKey);
  };

  /* jshint ignore:start */
  return (
    <Container className="p-3">
      <Tabs
        className="customTextColor"
        activeKey={selectedItem}
        onSelect={showThisItem}
        justify
      >
        {carouselItemsDB.map((item) => {
          return (
            <Tab key={item.id} eventKey={item.id} title={item.title}></Tab>
          );
        })}
      </Tabs>
      <ItemList
        itemList={itemDB}
        currentItem={selectedItem}
        addToCart={addToCart}
      ></ItemList>
    </Container>
  );
  /* jshint ignore:end */
}
function ItemList(props) {
  /* jshint ignore:start */
  return (
    <Container className="mt-3">
      {props.itemList[`${props.currentItem}`].map((row) => {
        return (
          <Row key={uniqid()} xs={1} md={3}>
            {row.map((col) => {
              return (
                <Col key={col.id} className="mb-3">
                  <Card>
                    <Card.Img variant="top" src={col.src} />
                    <Card.Body>
                      <Card.Title className="text-center fs-6 fw-bold text-truncate">
                        {col.name}
                      </Card.Title>
                      <Card.Text className="text-center fs-6">
                        {`${col.prize}$`}
                      </Card.Text>
                      <Button
                        size="sm"
                        variant="outline-dark"
                        className="d-block mx-auto"
                        onClick={(e) =>
                          props.addToCart({
                            name: col.name,
                            prize: col.prize,
                            src: col.src,
                            qty: 1,
                            id: uniqid(),
                          })
                        }
                      >
                        Añadir al carrito
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
  /* jshint ignore:end */
}
function Footer() {
  /* jshint ignore:start */
  return (
    <Container className="mt-auto p-3" fluid>
      <Row className="justify-content-center">
        <Col xs="auto">
          <a href="https://github.com/Jgoldenusr" className="muted fs-5">
            <FontAwesomeIcon icon={faGithub} className="footerIcon me-2" />
            {"Copyright © 2023 Jgoldenusr"}
          </a>
        </Col>
      </Row>
    </Container>
  );
  /* jshint ignore:end */
}

export { Header, MyCart, ItemCarousel, ItemList, Products, Footer };
