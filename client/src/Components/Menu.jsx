import React from "react";
import styled from "styled-components";
import lamaTube from "../Img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import HistoryIcon from "@mui/icons-material/History";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import LightModeIcon from "@mui/icons-material/LightMode";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-family: sans-serif;
  position: sticky;
  top: 0;
  font-size: 12px;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 25px;
  text-decoration: none;
`;

const Img = styled.img`
  height: 50px;
  width: 60px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
    border-radius: 15px;
  }
`;

const Hr = styled.hr`
  margin: 15p x 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 12px;
  font-weight: 500;
  color: #aaaaaa;
  padding-top: 10px;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={lamaTube} />
            MinTube
          </Logo>
        </Link>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
            <HomeIcon />
            Home
        </Item>
          </Link>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <LibraryAddCheckIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment and subscribe.
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <PersonIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>Best of Youtube</Title>
        <Item>
          <MusicNoteIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <LocalMoviesIcon />
          Movies
        </Item>
        <Item>
          <NewspaperIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <HelpCenterIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <LightModeIcon />
          {darkMode ? "Light" : "Dark"} mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
