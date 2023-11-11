import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import ListItems from '~/components/common/ListItems';
import person from '/image/image.png';
export default component$(() => {
  return (
    <section class='flex items-center flex-col '>
      <h1 class='text-4xl font-bold text-center text-blue-300 pt-4'>
        Conoce mas sobre mi
      </h1>
      <div class='flex gap-2 items-start  flex-wrap container justify-center'>
        <figure class='w-[40%]  h-96 sm:sticky top-0 min-w-[304px]'>
          <img
            src={person}
            alt='dsdf'
            height={0}
            width={0}
            class='w-full h-full pt-20 xl:pt-5 '
          />
        </figure>
        <div class=' flex justify-center w-1/2  flex-wrap gap-10 gap-y-0 p-10'>
          <ListItems
            title='Informacion Personal'
            items={[
              'Edad: 19',
              'Sexo: Masculino',
              'Nacionalidad: Colombiana',
              'correo: juanptorres2003@gmail.com'
            ]}
          />
          <ListItems
            title='Hobbies'
            items={[
              'correr',
              'Programar',
              'Salir A comer',
              'Salir A Conocer Nuevos Lugares',
              'Jugar Video juegos'
            ]}
          />
          <ListItems
            title='Idiomas'
            items={['Español (Nativo)', 'Ingles (b1)']}
          />
          <ListItems
            items={['Estudiar', 'Trabajar']}
            title='Ocupacion Actual'
          />
          <ListItems
            items={['Linkedin', 'Facebook']}
            links={[
              'https://www.linkedin.com/in/juan-pablo-castellanos-torres-2335a41a9/',
              'https://web.facebook.com/juanpablo.castellanostorres.58'
            ]}
            title='Redes Sociales'
          />
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Works',
  meta: [
    {
      name: 'description',
      content: 'my works description'
    }
  ]
};
