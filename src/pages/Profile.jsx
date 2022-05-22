import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { publicReq } from '../requestMethods'
import { motion } from "framer-motion"

const Container = styled.div`
    height: calc(100vh - 60px);
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  padding: 30px;
`
const List = styled.ul`
    list-style: none;
    z-index: 2;
`
const LI = styled.li`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  padding: 30px;
`
const Shape1 = styled.div`
  background-color: #235374;
  clip-path: polygon(0 0, 0% 100%, 20% 0);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const Shape2 = styled.div`
  background-color: #235374;
  clip-path: polygon(100% 0, 100% 100%, 80% 0);;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const Info = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Input = styled.input`
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 12px 20px;
    background-color: #235374;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
    &:disabled{
      color: #235374;
      cursor: not-allowed;
    }
`
const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  padding: 30px;
`
const Error = styled.span`
  margin: 15px 0;
  letter-spacing: 1px;
`

const Profile = () => {
  const user = useSelector(state => state.user.currentUser);
  const [isLoading, setIsLoading] = useState(true);
  const [thisUser, setThisUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    const changeUserInfo = async () => {
      try {
        const updatedUser = await publicReq.put(`/users/${user._id}`, {username, email, password}, {headers: {token: `Bearer ${user.accessToken}`}});
        setThisUser(updatedUser.data);
        setIsLoading(true);
        setError(false); 
      } catch (err) {
        setError(true); 
        console.log(err);
      } 
    }
    changeUserInfo();
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    const findUser = async () => {
      try {
        const foundedUser = await publicReq.get(`/users/find/${user._id}`, {headers: {token: `Bearer ${user.accessToken}`}});
        setThisUser(foundedUser.data);
        setUsername(foundedUser.data.username);
        setEmail(foundedUser.data.email);
        setIsLoading(false)
      } catch (err) {
        console.log(err);
      }
    }
    if (isLoading) {
      findUser();
    }
  }, [user, thisUser, isLoading, username, email]);
  if (isLoading) {
    return (
    <>
    {user ? 
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <Container>
    <Info>
      <Title>Ваш профіль</Title>
      <Description>Загрузка...</Description>
    </Info>
    <Shape1/>
    <Shape2/>
  </Container>
  </motion.div>
    : 
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <Container>
    <Info>
      <Title>Не в аккаунті</Title>
      <Description>Спочатку увійдіть у свій аккаунт або заєреструйте новий аккаунт!</Description>
    </Info>
    <Shape1/>
    <Shape2/>
  </Container> 
  </motion.div>
    }
    </>
    )
  }
  return (
    <motion.div
    initial={{opacity: 0, transition: {duration: 0.5}}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.5}}}
  >
    <Container>
      <Info>
        <Title>Ваш профіль</Title>
        <Form>
          <List>
            <LI>Псевдонім: {thisUser.username}<br/><Input placeholder="Змінити псевдонім" onChange={(e) => setUsername(e.target.value)}/></LI>
            <LI>Електронна пошта: {thisUser.email}<br/><Input placeholder="Змінити електронну пошту" onChange={(e) => setEmail(e.target.value)}/></LI>
            <LI>Пароль: **********<br/><Input type="password" placeholder="Змінити пароль" onChange={(e) => setPassword(e.target.value)}/></LI>
          </List>
          {error && <Error>Щось пішло не так...</Error>}
          <Button onClick={handleClick}>Змінити</Button>
        </Form>
      </Info>
      <Shape1/>
      <Shape2/>
    </Container>
    </motion.div>
  )
}

export default Profile