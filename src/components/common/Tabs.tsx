import { component$, useSignal } from '@builder.io/qwik';
import type { JSXNode } from '@builder.io/qwik/jsx-runtime';
type Tab = {
  title: string;
  content: JSXNode;
};
interface ITabs {
  tabs: Tab[];
}
export default component$(({ tabs }: ITabs) => {
  const tabNow = useSignal(0);
  const Content = component$(() => tabs[tabNow.value].content);
  return (
    <div class='container'>
      <div class='flex gap-4 '>
        {tabs.map(({ title }, i) => {
          return (
            <h3
              class={`cursor-pointer p-2 border-b-2  border-solid rounded-sm  ${
                tabNow.value === i
                  ? 'text-blue-300 border-blue-300 font-bold'
                  : 'border-slate-700 text-slate-700'
              }`}
              onClick$={() => (tabNow.value = i)}
              key={i}
            >
              {title}
            </h3>
          );
        })}
      </div>
      <div class='grid grid-cols-3 gap-10 container mt-5'>{<Content />}</div>
    </div>
  );
});
