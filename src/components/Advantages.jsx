import styled from 'styled-components'
import { features } from '../data'
import Advantage from './Advantage'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 150px;
  flex-wrap: wrap;
`
const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`

const Advantages = () => {
  return (
        <Container>
          <Title>Переваги</Title>
          <Wrapper>
            {features.map((item, index) => (
              <Advantage item={item} key={index}/>
            ))}
          </Wrapper>
        </Container>
  )
}

export default Advantages