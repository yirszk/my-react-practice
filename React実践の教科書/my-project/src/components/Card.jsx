import { EditButton } from './EditButton';

export const Card = () => {
  return (
    <div className="w-72 h-24 m-2 max-w-sm rounded overflow-hidden shadow-lg bg-sky-200">
      <p className="m-3 text-lg text-center">John</p>
      <EditButton/>
    </div>
  )
}