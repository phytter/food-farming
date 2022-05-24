import { styled } from '@stitches/react';
import { NavLink } from 'react-router-dom'

export const StyledHeader = styled('header', {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 40
})

export const MenuItem = styled(NavLink, {
    textDecoration: 'unset',
    color: 'unset',
    fontWeight: '600',
    fontSize: '16px',
    variants: {
        color: {
            'selected': {
                color: '#AF987F'
            }
        }
    }
})

export const LeaftIcon = styled('img', {
    height: 50,
    margin: '0px 30px'
})

export const Dot = styled('span', {
    height: 10,
    width: 10,
    backgroundColor: 'Black',
    display: 'block',
   borderRadius: '50%'
})

export const MenuDotButton = styled('span', {
    height: 30,
    width: 30,
    marginTop: 25,
    marginLeft: 20,
    float: 'left',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 5,
    '&:hover': {
        opacity: 0.7,
        cursor: 'pointer'
    }
})
