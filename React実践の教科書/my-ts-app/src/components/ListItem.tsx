import type { FC } from 'react';
import type { User } from '../types/users';

export const ListItem: FC<User> = (props) => {
  const { id, name, age, personalColor = "gray" } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}: {name}({age})
    </p>
  );
};
