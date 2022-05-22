import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { register, removeError } from "../redux/apiCalls"
import { motion } from "framer-motion"

const Container = styled.div`
    height: calc(100vh - 60px);
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
`

const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Policy = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 12px 20px;
    background-color: #235374;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    &:disabled{
      color: #235374;
      cursor: not-allowed;
    }
`
const Shape0 = styled.div`
  clip-path: ellipse(20% 50% at 0% 50%);
  background-color: #235374;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape1 = styled.div`
  clip-path: ellipse(10% 50% at 0% 50%);
  background-color: #2d8999;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape2 = styled.div`
  clip-path: ellipse(2.5% 50% at 0% 50%);
  background-color: #5159ac;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape3 = styled.div`
  clip-path: ellipse(20% 50% at 100% 50%);
  background-color: #235374;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape4 = styled.div`
  clip-path: ellipse(10% 50% at 100% 50%);
  background-color: #2d8999;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape5 = styled.div`
  clip-path: ellipse(2.5% 50% at 100% 50%);
  background-color: #5159ac;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Error = styled.span`
  margin: 15px 0;
  letter-spacing: 1px;
`

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, {username, email, password});
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    removeError(dispatch);
  }, [dispatch]);
  return (
    <motion.div
    initial={{opacity: 0, transition: {duration: 0.5}}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.5}}}
  >
    <Container>
        <Shape0/>
        <Shape1/>
        <Shape2/>
        <Shape3/>
        <Shape4/>
        <Shape5/>
        <Wrapper>
            <Title>Створити аккаунт</Title>
            <Form>
                <Input placeholder="Псевдонім" onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder="Електронна пошта" onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                {error && <Error>Щось пішло не так...</Error>}
                <Policy>Створюючи обліковий запис, я даю згоду на обробку моїх персональних даних відповідно до <b>ПОЛІТИКИ КОНФІДЕНЦІЙНОСТІ</b></Policy>
                <Button onClick={handleClick} disabled={isFetching}>Створити</Button>
            </Form>
        </Wrapper>
    </Container>
    </motion.div>
  )
}

export default Register