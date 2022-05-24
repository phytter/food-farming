import { styled } from '@stitches/react';
import { CgArrowRight } from 'react-icons/cg'

export const StyledHome = styled('div', {

})

export const H3 = styled('h3', {
    fontSize: 40,
    color: '#414141',
    fontFamily: 'fantasy'
})

export const H1 = styled('h1', {
    fontSize: 50,
    color: '#414141',
    fontFamily: 'fantasy',
    textTransform: 'uppercase',
})

export const Paragraph = styled('p', {
    fontFamily: 'monospace',
    marginTop: 50,
    fontSize: 16,
    color: '#414141',
    width: '50%'
})

export const ReadMoreButton = styled('button', {
    marginTop: 40,
    background: 'transparent',
    border: 'solid 2px #C18E5D',
    height: 50,
    width: 150
})

export const TextButton = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    width: '60%',
    fontSize: 16
})

export  const Icon = styled(CgArrowRight, {
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