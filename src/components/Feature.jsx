import styled from 'styled-components'

const Container = styled.div`
  height: ${props => props.height};
  overflow: hidden;
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
const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  padding: 30px;
`
const Shape = styled.div`
  background-color: ${props => props.color};
  clip-path: ${props => props.shape};
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

const Feature = ({item}) => {
  return (
    <Container height={item.height}>
        <Info>
          <Title>
            {item.title}
          </Title>
          <Description>
            {item.contents}
          </Description>
        </Info>
        {item.objects.map(object => (
        <Shape color={object.color} shape={object.shape} key={object.id}/>
        ))}
    </Container>
  )
}

export default Feature