import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  position:sticky;
  top:0;
  background-color: ${({theme}) =>  theme.bgLighter};
  height:56px;
`

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  padding: 100%;
  padding: 0px;
  position:relative;
`
const Search = styled.div`
  width: 40%;
  position:absolute;
  left:0px;
  right:0px;
  margin:auto;
  display: flex;
  align-items: center;
  color:${({theme}) => theme.text};
  justify-content:space-between;
  padding: 5px;
  border:1px solid #ccc;
  border-radius:3px;
`
const Input = styled.input`
  color:${({theme}) => theme.text};
  font-size: 17px;
  border-style: none;
  background-color:transparent;
  `

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
  gap:5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchIcon/>
        </Search>
        <Button>
          <PersonIcon/>
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar