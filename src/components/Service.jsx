import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";


const Container = styled.div`
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 15px;
    z-index: 2;
`
const Price = styled.div`
    display: flex;
    align-items: center;
    z-index: 2;
`
const Value = styled.span`
    font-weight: bold;
    font-size: 50px;
    z-index: 2;
`
const Plan = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: 1.5px solid #5159ac;
    color: #5159ac;
    background-color: white;
    border-radius: 20px;
    z-index: 2;
`
const List = styled.ul`
    list-style: none;
    z-index: 2;
`
const LI = styled.li`
    margin: 30px 0;
    letter-spacing: 1px;
    z-index: 2;
`
const Button1 = styled.a`
    border: none;
    background-color: #2d8999;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    z-index: 2;
`
const Button2 = styled(Link)`
    border: none;
    background-color: #2d8999;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    z-index: 2;
`

const Service = ({item}) => {
  const user = useSelector(state => state.user.currentUser);
  return (
          <Container>
            <Price>
                ₴<Value>{item.price}</Value>/місяць
            </Price>
            <Plan>{item.title} пакет</Plan>
            <List>
            {item.contents.map(content => (
                <LI>{content}</LI>
            ))}
            </List>
            {user ? <Button1 href={item.href}>Купити</Button1> : <Button2 to="/profile">Купити</Button2>}
        </Container>
  )
}

export default Service