import { FC } from 'react';

interface DividerProps {
  marginTop?: string | number;
}

const Divider: FC<DividerProps> = ({ marginTop = '25px' }) => {
  return (
    <hr
      style={{
        width: '100%',
        color: '#E2E2E2',
        marginTop,
        height: '1px',
        opacity: '0.5',
      }}
    />
  );
};

export { Divider };
