import React, { useState } from "react";
import Menu from "./Components/Menu";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import { darkTheme, lightTheme } from "./Utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Signin from "./Pages/Signin";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px ;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home/>}/>
                  <Route path="signin" element={<Signin/>}/>
                  <Route path="video">
                    <Route path=":id" element={<Video/>}/>
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
