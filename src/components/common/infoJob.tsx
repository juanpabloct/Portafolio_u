import { component$ } from '@builder.io/qwik';
import type { JSX } from '@builder.io/qwik/jsx-runtime';
interface IInfoJobProps {
  nameBussiness: string;
  position: string;
  description: string;
  dates: string;
}
export default component$(
  ({
    description,
    nameBussiness,
    position,
    dates
  }: IInfoJobProps): JSX.Element => {
    return (
      <div class='p-4  pt-2 shadow-md shadow-black rounded-md w-full max-w-lg mt-4'>
        <h1 class='text-2xl font-bold text-blue-400'>
          {nameBussiness} ({dates})
        </h1>
        <h3>{position}</h3>
        <p>{description}</p>
      </div>
    );
  }
);
