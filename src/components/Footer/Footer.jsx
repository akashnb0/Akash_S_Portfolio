import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">        
            <p className=" d-flex align-items-center gap-1">
              <i></i> Designed and developed by <b>Akash S</b> | Copyright © 2023
            </p>          
      </div>
    </footer>
  );
};

export default Footer;
