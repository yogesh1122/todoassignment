import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import auth from "../../services/authService";


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/dashboard">Home</Link>
      </li>
      <li>
        <Link to="/dashboard/enquiryList">Enquiries</Link>
      </li>
      <li>
        <Link to="/dashboard/subscribersList">Subscribers</Link>
      </li>
      <li>
        <Link onClick={auth.logout} to="/admin">Logout</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
