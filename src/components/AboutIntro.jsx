import styled from 'styled-components'

const Container = styled.div`
  height: calc(100vh - 60px);
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
const AboutIntro = () => {
  return (
    <Container>
      <Information>
          <Title>Що ми робимо?</Title>
          <Text>Наша фірма займається SMM рекламою вашого бізнесу. Ми створюємо умови для вашої перемоги в онлайн-ері. У наші можливості входить створення відео/ілюстрації реклами, її просування в інтернеті. Працюємо так само з розробкою та підтримкою вебсайту для вашого бізнесу. Допомагаємо із брендингом вашої компанії.</Text>
      </Information>
      <ImageContainer>
        <Image src='https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      </ImageContainer>
    </Container>
  )
}

export default AboutIntro