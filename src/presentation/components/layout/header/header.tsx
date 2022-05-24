import Leaft from '@/assets/leaft.png'
import { LeaftIcon, MenuItem, StyledHeader } from './styles'
import { useLocation } from 'react-router-dom'

const Header: React.FC = () => {
    const location = useLocation()
    
    const getColorStateByPath = (path: string): 'selected' | undefined => location.pathname === path ? 'selected' :  undefined

    return (
        <StyledHeader>
            <MenuItem color={getColorStateByPath('/')} href='/'>Home</MenuItem>
            <MenuItem href='/about' color={getColorStateByPath('/about')}>About</MenuItem>
            <MenuItem>Products</MenuItem>
            <LeaftIcon src={Leaft}/>
            <MenuItem>Recipes</MenuItem>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>Help</MenuItem>
        </StyledHeader>
    )
}

export default Header
