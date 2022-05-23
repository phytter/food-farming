import Leaft from '@/assets/leaft.png'
import { LeaftIcon, MenuItem, StyledHeader } from './styles'

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <MenuItem color='selected' >Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Products</MenuItem>
            <LeaftIcon src={Leaft}/>
            <MenuItem>Recipes</MenuItem>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>Help</MenuItem>
        </StyledHeader>
    )
}

export default Header
