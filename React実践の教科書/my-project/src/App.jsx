import { useContext } from 'react';
import { AdminFlagContext } from './components/providers/AdminFlagProvider';
import { Card } from './components/Card';

export const App = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  const onClickSwitch = () => setIsAdmin(!isAdmin);
  return (
    <>
      <button
        className='bg-blue-500 shadow-lg shadow-blue-500/50 text-white font-bold py-1 px-2 m-2 rounded'
        onClick={onClickSwitch}
      >
        Switch
      </button>
      {isAdmin ? <span>You are admin.</span> : <span>You are NOT admin.</span>}
      <Card isAdmin={isAdmin} />
    </>
  );
};
