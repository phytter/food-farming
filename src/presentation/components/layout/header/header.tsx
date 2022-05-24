import Leaft from '@/assets/leaft.png'
import { MenuDotButton, Dot, LeaftIcon, MenuItem, StyledHeader } from './styles'
import { useLocation, useRoutes } from 'react-router-dom'

const Header: React.FC = () => {
    const location = useLocation()
    
    const getColorStateByPath = (path: string): 'selected' | undefined => location.pathname === path ? 'selected' :  undefined

    return (
        <>
            <MenuDotButton>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
            </MenuDotButton>
            <StyledHeader>
                <MenuItem color={getColorStateByPath('/')} to='/'>Home</MenuItem>
                <MenuItem to='/about' color={getColorStateByPath('/about')}>About</MenuItem>
                <MenuItem to='/products' color={getColorStateByPath('/products')}>Products</MenuItem>
                <LeaftIcon src={Leaft}/>
                <MenuItem to='/recipes' color={getColorStateByPath('/recipes')}>Recipes</MenuItem>
                <MenuItem to='/faq' color={getColorStateByPath('/faq')}>FAQ</MenuItem>
                <MenuItem to='/help' color={getColorStateByPath('/help')}>Help</MenuItem>
            </StyledHeader>
        </>
    )
}

export default Header
