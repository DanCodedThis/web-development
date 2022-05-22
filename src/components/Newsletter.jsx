import { Send } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { publicReq } from '../requestMethods'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 30px;
`
const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  margin-bottom: 30px;
`
const Description = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  margin-bottom: 20px;
`
const Wrapper = styled.form`
  width: 50%;
  height: 40px;
  background-color: #fcf5f5;
  display: flex;
`

const Input = styled.input`
  border: 1px solid lightgray;
  flex: 8;
  padding: 20px;
  border-radius: 1px;
`
const Button = styled.button`
  flex: 1;
  cursor: pointer;
  background-color: #5159ac;
  color: white;
  border: 1px solid #5159ac;
`
const Error = styled.span`
  margin: 15px 0;
  letter-spacing: 1px;
`

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    const sendEmail = async () => {
      try {
        setError(false);
        await publicReq.post("/email", { email, googleMeet: false, })
        navigate("/", { replace: true });
      } catch (err) {
        setError(true);
        console.log(err);
      }
    }
    sendEmail();
  }
  return (
    <Container>
      <Title>Інформаційний бюлетень</Title>
      <Description>Отримуйте своєчасні оновлення про знижки та зміни в сервісах</Description>
      {error && <Error>Щось пішло не так...</Error>}
      <Wrapper>
        <Input placeholder='Електронна пошта' onChange={(e) => setEmail(e.target.value)}/>
        <Button onClick={handleClick}>
          <Send/>
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Newsletter