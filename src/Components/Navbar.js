import styled from 'styled-components';


function Nav() {
    return(
        <Div>
            <Button>register</Button>
            <Button>Login</Button>
            <Ul>
            <Li ><A href="default.asp">Features</A>
            <Drop class="dropdown-content">
            <A href="#">Link 1</A>
            <A href="#">Link 2</A>
            <A href="#">Link 3</A>
            </Drop></Li>
            <Li><A href="news.asp">Comapany</A>
            <Drop class="dropdown-content">
            <A href="#">Link 1</A>
            <A href="#">Link 2</A>
            <A href="#">Link 3</A>
            </Drop></Li>
            <Li><A href="contact.asp">Careers</A></Li>
            <Li><A href="about.asp">About</A></Li>
            </Ul>

           
        </Div>
    );
}

const Drop =styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  z-index: 1;
  .a{
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  &:hover{
    display:block;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }`


const Div  = styled.div`

`
const Button = styled.button`
border-radius:10px;
text-align:center;
align-items:center;
position:relative;
padding: 5px 5px 5px 5px;
float:right;
font-size:18px;
font-family: 'Epilogue', sans-serif;
top:20px;
width:90px;
white-space:nowrap;
display:flex;
background-color: white;
border-width: hsl(0, 0%, 41%);
margin-bottom:10px;
margin-left:10px;
transition: all .5s ease;

&:hover{
    transform: scale(1.08);
    background-color: alicewhite;
    border-color:gray;
}
`


const Ul =styled.ul`
 list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color:white;
  `
  const Li = styled.li`
      display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
    float: left;
    `
  const A = styled.a`
      display:block;
      fill:0;
      font-family: 'Epilogue', sans-serif;
      text-decoration  :none ;
      font-weight: 500, 800;
      color:hsl(0, 1%, 48%);
      padding: 9px;
      font-size:18px;
      &:hover{
        transform: scale(1.08);
        color:hsv(0, 23%, 25%);
        

      }
    `


export default Nav;
