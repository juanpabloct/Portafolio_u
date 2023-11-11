import { component$ } from '@builder.io/qwik';
import type { JSX } from '@builder.io/qwik/jsx-runtime';

interface IListItemsProps {
  title: string;
  items: string[];
  links?: string[];
}

export default component$(
  ({ title, items, links }: IListItemsProps): JSX.Element => {
    return (
      <article class=' mt-10 w-80 border-2 p-8 pt-3 shadow-md shadow-black rounded-md h-min'>
        <h1 class='text-2xl font-bold text-slate-950 border-b border-blue-500'>
          {title}
        </h1>
        <ul class='pl-4 text-lg'>
          {items.map((item, i) => {
            const link = links && links[0];
            return (
              <li class='list-disc' key={i}>
                {link ? <a href={link}>{item}</a> : item}
              </li>
            );
          })}
        </ul>
      </article>
    );
  }
);
