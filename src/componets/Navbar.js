import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import TodayIcon from "@mui/icons-material/Today";
import ListIcon from "@mui/icons-material/List";
import SavingsIcon from "@mui/icons-material/Savings";

const Nav = styled.div`
  background-color: #f2f2f2;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 3vh;
  padding: 2vh 0;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

function NavBar() {
  return (
    <>
      <Nav>
        <HomeIcon />
        <ListIcon />
        <TodayIcon />
        <SavingsIcon />
        <PersonIcon />
      </Nav>
    </>
  );
}

export default NavBar;
