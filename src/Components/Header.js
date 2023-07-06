import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Search from "./Search";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-evenly;
  align-items: center;
`;
const ContainerIn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 200px;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MovieIcon = styled.img`
  width: 120px;
  height: 50px;
  // margin-left: 40px;
`;

const Header = () => {
  return (
    <Container>
      <HeaderNav>
        <AppName>
          <MovieIcon src="/bookmyshow-logo.svg" alt="BookMyShow" />
        </AppName>

        <ContainerIn>
          {/* <Search /> */}
          <FavoriteBorderIcon style={{ margin: 10 }} size="large" clickable />
          <AccountBoxIcon style={{ margin: 10 }} size="large" />
        </ContainerIn>
      </HeaderNav>
    </Container>
  );
};

export default Header;
