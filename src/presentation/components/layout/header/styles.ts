import { styled } from '@stitches/react';

export const StyledHeader = styled('header', {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 30
})

export const MenuItem = styled('a', {
    textDecoration: 'unset',
    color: 'unset',
    fontWeight: 'bold',
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