import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
const Container= styled.div `
height:60px;
${'' /* background-color:red; */}
`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
align-items:center
`


const Left = styled.div`
flex: 1;
display:flex;
align-items:center

`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${'' /* ${mobile({ display: "none" })} */}
`;
const SearchContainer=styled.div`
border:0.5px solid lightgrey;
display:flex;
align-items:center;
margin-left:25px;
padding:5px
`
const Center = styled.div`
  flex: 1;
  text-align:center
 
`;
const Logo=styled.h1`
font-weight:bold;
text-align:center
`
const Right = styled.div`
  flex: 1;
 
`;
const Input=styled.input`
border:2px solid red;
border:none`

const MenuItem=styled.div`
font-size:14;
cursor:pointer
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
     
     
      <Left>
         <Language>EN</Language>
         <SearchContainer>
         <Input/>
         <SearchIcon/>
          
            
         </SearchContainer>
        </Left>
        <Center>
       <Logo>Oliver Store</Logo>
        </Center>
        <Right>
         <MenuItem>REGISTER</MenuItem>
         <MenuItem>SIGN IN </MenuItem>
         <MenuItem>
         <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
         </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
