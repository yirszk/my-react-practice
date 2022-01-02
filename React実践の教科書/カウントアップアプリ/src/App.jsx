import { useState, memo, useCallback } from 'react';
import { Child1 } from './components/Child1'
import { Child4 } from './components/Child4'
import { ColoredMessage } from './components/ColoredMessage';

export const App = memo(() => {
  console.log("App レンダリング")
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    // alert('on click test');
    setNum(num + 10);
  };

  const onClickReset = useCallback(() => {
    setNum(0)
  }, []);

  return (
    <>
      <h1 style={{ color: 'green' }}>Hello world!</h1>
      <h1 className='text-3xl font-bold text-center text-gray-700'>Hello world!</h1>
      <p>test</p>
      <ColoredMessage color='blue'>Hello world!!!</ColoredMessage>
      <ColoredMessage color='red'>Hello world!!!</ColoredMessage>
      <button onClick={onClickButton}>button</button>

      <p>{num}</p>
      <Child1 onClickReset={onClickReset}/>
      <Child4/>
    </>
  );
});
