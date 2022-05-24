import { styled } from '@stitches/react';
import { CgArrowRight } from 'react-icons/cg'
import Leaft from '@/assets/leaft.png'

const StyledHome = styled('div', {

})

const H3 = styled('h3', {
    fontSize: 40,
    color: '#414141',
    fontFamily: 'fantasy'
})

const H1 = styled('h1', {
    fontSize: 50,
    color: '#414141',
    fontFamily: 'fantasy',
    textTransform: 'uppercase',
})

const Paragraph = styled('p', {
    fontFamily: 'monospace',
    marginTop: 50,
    fontSize: 16,
    color: '#414141',
    width: '50%'
})

const ReadMoreButton = styled('button', {
    marginTop: 40,
    background: 'transparent',
    border: 'solid 2px #C18E5D',
    height: 50,
    width: 150
})

const TextButton = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    width: '60%',
    fontSize: 16
})

const Icon = styled(CgArrowRight, {
    backgroundColor: '#C18E5D',
    height: '100%',
    float: 'right',
    fontSize: 40,
    color: 'white',
    padding: 5
})

export const LeaftIcon = styled('img', {
    height: 50,
    margin: '0px 30px'
})

export const H3andIcon = styled('div', {
    display: 'flex'
})

const Home: React.FC = () => {
    return (
        <StyledHome>
            <H3andIcon>
                <H3>Food</H3>
                <LeaftIcon src={Leaft} />
            </H3andIcon>
            <H1>Farming</H1>
            <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Paragraph>
            <ReadMoreButton><TextButton>Read More</TextButton> <Icon /></ReadMoreButton>
        </StyledHome>
    )
}


export default Home
