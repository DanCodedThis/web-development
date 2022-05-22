import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import FeaturesContext from '../store/features-context'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/apiCalls';

const Container = styled.div`
    height: 60px;
    background-color: #fffbfb;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Left = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled(Link)`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
    text-decoration: none;
    color: black;
    font-weight: 300;
`
const Logo = styled.h1`
    font-weight: bold;
`
const NavItem = styled(Link)`
    font-size: 17px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    flex: 1;
`

const Navbar = () => {
    const featuresCtx = useContext(FeaturesContext);
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const clickHandler = () => {
        featuresCtx.changeReference("0");
    }
    const handleClick = () => {
        logout(dispatch);
    }
  return (
    <Container>
        <Wrapper>
            <Left>
                <NavItem to="/">Головна</NavItem>
                <NavItem to="/services">Цінопис</NavItem>
                <NavItem to="/features" onClick={clickHandler}>Переваги</NavItem>
                <NavItem to="/about">Про нас</NavItem>
                <NavItem to="/contact">Контакти</NavItem>
            </Left>
            <Center>
                <Logo>D-FY.</Logo>
            </Center>
            <Right>
                {user ? <MenuItem to="/profile">Профіль</MenuItem> : <MenuItem to="/register">Зареєструватися</MenuItem>}
                {user ? <MenuItem to="/" onClick={handleClick}>Вийти</MenuItem> : <MenuItem to="/login">Увійти</MenuItem>}
            </Right> 
        </Wrapper>
    </Container>
  )
}

export default Navbar