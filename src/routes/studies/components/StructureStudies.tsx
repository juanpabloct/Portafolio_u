import { Slot, component$ } from '@builder.io/qwik';

export default component$(({ entity }: { entity: string }) => {
  return (
    <div class='p-4 shadow-md shadow-black rounded-md'>
      <h1 class='text-xl font-bold text-blue-300'>{entity}</h1>
      <div class='flex flex-col'>
        <Slot name='name_course' />
        <Slot name='name_entity' />
        <Slot name='text' />
      </div>
    </div>
  );
});
