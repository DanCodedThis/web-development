import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
`
const Information = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
`
const Image = styled.img`
  object-fit: cover;
  position: relative;
  height: 100%;
  width: 100%;
  object-position: 100px 0px;
`
const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  padding: 30px;
`
const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  padding: 30px;
  margin-left: 200px;
`
const AboutEnding = () => {
  return (
    <Container>
      <Information>
          <Title>Хто ми?</Title>
          <Text>Ми створили цю компанію з ідей у ​​голові про те, що бізнесу в нашій країні потрібно діджиталізуватися. Тобто наша команда, що складається з експертів своєї справи: маркетологів, бізнес аналітиків і дизайнерів, працює для того, щоб не тільки допомогти бізнесу втриматися на плаву в інформаційну епоху, а й навпаки використовувати це як можливість свого просування вгору.</Text>
      </Information>
      <ImageContainer>
        <Image src='https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      </ImageContainer>
    </Container>
  )
}

export default AboutEnding