import * as React from 'react';
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import { customColours } from '../../utils/CustomColours/CustomColours';

const Input = React.forwardRef(function CustomInput(props, ref) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export const UnstyledInputBasic = (props) => {
  return <Input {...props} aria-label='Goal input' placeholder='Set a waste goal' />;
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const InputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-family: 'Playpen Sans';
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${customColours['green-2']};
  }

  &:focus {
    border-color: ${customColours['green-2']};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? customColours['green-4'] : customColours['green-6']};
  }

  &::placeholder {
    color: ${customColours['charcoal']};
  }
`,
);
