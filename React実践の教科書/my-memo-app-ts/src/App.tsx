import { ChangeEvent, useState, FC, useCallback } from 'react';
import { MemoList } from './components/MemoList'
import { useMemoList } from './hooks/useMemoList';

export const App: FC = () => {
  const { memos, addTodo, deleteTodo } = useMemoList();
  const [text, setText] = useState<string>('');

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onClickAdd = () => {
    addTodo(text);
    setText('');
  };

  const onClickDelete = useCallback((index: number) =>{
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <>
      <h1 className='text-lg'>simple memo app</h1>
      <input
        className='mt-1 block w-100 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm'
        type='text'
        value={text}
        onChange={onChangeText}
      />
      <button onClick={onClickAdd}>Add</button>
      <hr />
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </>
  );
};
