import { component$ } from '@builder.io/qwik';
import InfoJob from '~/components/common/infoJob';

export default component$(() => {
  return (
    <div class='flex flex-col items-center gap-4'>
      <h1 class='text-4xl font-bold text-center text-blue-300 mt-4'>Jobs</h1>
      <section class='container grid grid-cols-3 gap-6 p-6'>
        <InfoJob
          dates='2022-03 - 2022-06'
          description='Entre como desarrolador junior en la empresa la cual mi rol era dar soporte mejoras y nuevas características a aplicativos web'
          nameBussiness='vortex'
          position='Desarrollador Junior'
        />
        <InfoJob
          dates='2022-06 - 2023-06'
          description='Estuve encargado en el aporte al desarrollo de modulos de liquidacion, facturacion y contabilidad, el aplicativo es de consultoria en el sector energetico'
          nameBussiness='Enersinc'
          position='Desarrollador Junior'
        />
        <InfoJob
          dates='2023-07 - now'
          description='Aporte en el desarrollo de la seccion de Booking, he realizado mejoras en trips, desarrolle la seccion del perfil, cuenta, y aporte con la autenticacion'
          nameBussiness='Wonder Travel'
          position='Desarrollador Middle'
        />
      </section>
    </div>
  );
});
