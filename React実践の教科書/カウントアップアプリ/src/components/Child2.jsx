import { memo } from 'react';
export const Child2 = memo(() => {
  console.log('Child2 レンダリング');

  return (
    <div className='bg-purple-700 text-white p-3'>
      <p>Child2</p>
    </div>
  );
});
