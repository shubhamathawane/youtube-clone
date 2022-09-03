import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 15px;
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border-radius: 7px;
  color: ${({ theme }) => theme.text};
  /* border: none; */
  padding: 10px;
  background-color: transparent;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 7px;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 500;
  border: none;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 10px;
  padding: 5px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 30px;
`;
const Link = styled.span`
  margin-left: 30px;
`;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In </Title>
        <SubTitle>to Continue to YouTube</SubTitle>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button>Sign In</Button>
        <Title>or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        <Links>
          English(USA)
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Signin;
