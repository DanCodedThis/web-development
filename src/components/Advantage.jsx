import styled from 'styled-components'
import { CheckBox } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import FeaturesContext from '../store/features-context'
import { useContext } from 'react'
import { Timeline } from '@mui/icons-material';
import { Science } from '@mui/icons-material';
import { Movie } from '@mui/icons-material';
import { ArrowCircleUp } from '@mui/icons-material';

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
    justify-content: space-between;
    margin: 0px 15px;
    height: 70vh;
`
const TitleCon = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  z-index: 1;
`
const Title = styled.h2`
  font-size: 22px;
`
const Button = styled(Link)`
    border: none;
    background-color: #2d8999;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    z-index: 1;
`

const Advantage = ({item}) => {
    const featuresCtx = useContext(FeaturesContext);
    const clickHandler = (event) => {
        featuresCtx.changeReference(event.target.id);
    }
    const icons = [
        {
          id: 1,
          object: Timeline,
        },
        {
          id: 2,
          object: Science,
        },
        {
          id: 3,
          object: Movie,
        },
        {
          id: 4,
          object: ArrowCircleUp,
        },
    ];
    let give = {};
    icons.forEach((element) => {
        if (item.id === element.id) {
            give = element.object;
        }
    });
    const IconInUse = styled(give)`
      transform: scale(8);
      padding: 125px 0px;
    `
  return (
    <Container>
        <TitleCon>
          <CheckBox/><Title>{item.title}</Title>
        </TitleCon>
        <IconInUse/>
        <Button to="/features" id={item.id} onClick={clickHandler}>Читати</Button>
    </Container>
  )
}

export default Advantage