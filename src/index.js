import styled from '@emotion/styled';
import { blue, orange, green } from '@time-with/colors';
import { tablet_max, phablet_max, phone_max } from '@time-with/media-queries';
import { darken } from 'polished';

const smallButtonSize = {
  height: '50px',
  lineHeight: '50px',
  borderRadius: '25px',
  padding: '0 20px',
  '& p': {
    fontSize: '17px',
  },
  '& svg': {
    fontSize: '17px',
  },
  [tablet_max]: { 
    height: '40px',
    lineHeight: '40px',
    padding: '0 18px',
    '& p': {
      fontSize: '17px',
    },
    '& svg': {
      fontSize: '17px',
    },
  },
  [phablet_max]: { 
    height: '35px',
    lineHeight: '35px',
    padding: '0 18px',
    '& p': {
      fontSize: '15px',
    },
    '& svg': {
      fontSize: '15px',
    },
  },
  [phone_max]: { 
    fontSize: '14px',
    height: '30px',
    lineHeight: '30px',
    padding: '0 12px',
    '& p': {
      fontSize: '14px',
    },
    '& svg': {
      fontSize: '15px',
    },
  },
}

export const ButtonsRow = styled.div({}, props => ({
  display: 'flex',
  justifyContent: props.align === 'right' ? 'flex-end' : 'flex-start', // optional align prop
  '& button': {
    marginRight: '8px',
    marginBottom: '8px',
  },
  [phone_max]: { 
    flexDirection: 'column',
  },
}))

const Button = styled.button({}, props => ({
  cursor: 'pointer',
  height: '66px',
  lineHeight: '66px',
  borderRadius: '33px',
  textAlign: 'left',
  color: 'white',
  border: 'none',
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 30px',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  WebkitTransition: 'background-color 0.2s ease-out',
  MozTransition: 'background-color 0.2s ease-out',
  Otransition: 'background-color 0.2s ease-out',
  transition: 'background-color 0.2s ease-out',
  backgroundColor: props.disabled ? '#E3E2E3 !important' : '#E3E2E3', // optional disabled prop
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.17)',
  '& > *:first-child': {
    margin: props.noIcon ? '0' : '0 10px 0 0',
  },
  '& p': {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '21px',
    lineHeight: 'inherit',
    margin: '0',
  },
  '& svg': {
    fontSize: '21px',
    lineHeight: 'inherit',
    margin: '0',
  },
  [tablet_max]: { 
    height: '60px',
    lineHeight: '60px',
    padding: '0 25px',
    '& p': {
      fontSize: '20px',
    },
    '& svg': {
      fontSize: '20px',
    },
  },
  [phablet_max]: { 
    height: '52px',
    lineHeight: '52px',
    padding: '0 20px',
    '& p': {
      fontSize: '17px',
    },
    '& svg': {
      fontSize: '16px',
    },
  },
  [phone_max]: { 
    fontSize: '15px',
    height: '45px',
    lineHeight: '45px',
    padding: '0 15px',
    '& p': {
      fontSize: '17px',
    },
    '& svg': {
      fontSize: '16px',
    },
  },
}))

export const ButtonBlue = styled(Button)({
  backgroundColor: blue,
  ':hover': {
    backgroundColor: darken(0.2, blue)
  }
})

export const ButtonOrange = styled(Button)({
  backgroundColor: orange,
  ':hover': {
    backgroundColor: darken(0.2, orange)
  }
})

export const ButtonGreen = styled(Button)({
  backgroundColor: green,
  ':hover': {
    backgroundColor: darken(0.2, green)
  }
})

export const ButtonRed = styled(Button)({
  backgroundColor: '#EA4335',
  ':hover': {
    backgroundColor: darken(0.2, '#EA4335')
  }
})

export const ButtonWhite = styled(Button)({
  backgroundColor: 'white',
  '& p': {
    color: '#4A4A4A',
  },
  '& svg': {
    color: '#4A4A4A',
  },
  ':hover': {
    backgroundColor: darken(0.2, 'white')
  }
})

export const ButtonBlueSmall   = styled(ButtonBlue)({ ...smallButtonSize })
export const ButtonOrangeSmall = styled(ButtonOrange)({ ...smallButtonSize })
export const ButtonGreenSmall  = styled(ButtonGreen)({ ...smallButtonSize })
export const ButtonRedSmall    = styled(ButtonRed)({ ...smallButtonSize })
export const ButtonWhiteSmall  = styled(ButtonWhite)({ ...smallButtonSize })
