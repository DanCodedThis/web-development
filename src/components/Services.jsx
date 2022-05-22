import styled from 'styled-components'
import { services } from '../data'
import Service from './Service'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 150px;
  flex-wrap: wrap;
`
const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`

const Services = () => {

  return (
    <Container>
      <Title>Сервіси</Title>
      <Wrapper>
        {services.map(item => (
          <Service item={item} key={item.id}/>
        ))}
      </Wrapper>
    </Container>
  )
}

export default Services