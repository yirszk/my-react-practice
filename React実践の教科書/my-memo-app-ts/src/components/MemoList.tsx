import { FC } from 'react';

type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memos, onClickDelete } = props;
  return (
    <div>
      <p>memo list</p>
      <ul>
        {memos.map((memo, index) => (
          <>
            <li>{memo}</li>
            <button onClick={() => onClickDelete(index)}>Delete</button>
          </>
        ))}
      </ul>
    </div>
  );
};
