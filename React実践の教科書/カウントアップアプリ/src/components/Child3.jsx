import { memo } from 'react';
export const Child3 = memo(() => {
  console.log('Child3 レンダリング');

  return (
    <div className='bg-green-700 text-white p-3'>
      <p>Child3</p>
    </div>
  );
});
