import { memo } from 'react';
export const Child4 = memo(() => {
  console.log('Child4 レンダリング');

  return (
    <div className='bg-yellow-700 text-white p-3'>
      <p>Child4</p>
    </div>
  );
});
