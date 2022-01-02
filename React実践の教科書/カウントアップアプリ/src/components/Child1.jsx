import { memo } from 'react';
import { Child2 } from './Child2';
import { Child3 } from './Child3';

export const Child1 = memo((props) => {
  console.log('Child1 レンダリング');

  const { onClickReset } = props;

  return (
    <div className='bg-blue-700 text-white p-3'>
      <p>Child1</p>
      <button onClick={onClickReset}>reset</button>
      <Child2 />
      <Child3 />
    </div>
  );
});
