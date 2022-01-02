import { useContext } from 'react';
import { AdminFlagContext } from './providers/AdminFlagProvider';

export const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext);
  return (
    <button
      className='w-12 font-bold rounded-lg border-2 border-indigo-800 block m-auto'
      disabled={!isAdmin}
    >
      edit
    </button>
  );
};
