import Leaft from '@/assets/leaft.png'
import { useNavigate } from 'react-router-dom'
import { H1, H3, H3andIcon, Icon, LeaftIcon, Paragraph, ReadMoreButton, StyledHome, TextButton } from './styles'

const Home: React.FC = () => {
    const navigate = useNavigate()

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
            <ReadMoreButton onClick={() => navigate('/about')}>
                <TextButton>Read More</TextButton> <Icon />
            </ReadMoreButton>
        </StyledHome>
    )
}


export default Home
