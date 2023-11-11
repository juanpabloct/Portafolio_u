import { component$ } from '@builder.io/qwik';
import Tabs from '~/components/common/Tabs';
import StructureStudies from './components/StructureStudies';

export default component$(() => {
  return (
    <div class='p-4  flex items-center flex-col gap-4'>
      <h1 class='text-4xl font-bold text-center text-blue-300'>Estudios</h1>
      <Tabs
        tabs={[
          {
            content: (
              <>
                <StructureStudies entity='Colegio'>
                  <h1 q:slot='name_course'>Agustin Parra</h1>
                  <h1 q:slot='name_entity'>
                    Estudios colegiales de bachillerato
                  </h1>
                </StructureStudies>
                <StructureStudies entity='Universidad'>
                  <h1 q:slot='name_course'>Ucompensar</h1>
                  <h1 q:slot='name_entity'>
                    Estudios Universitarios como desarrollador de software
                  </h1>
                </StructureStudies>
              </>
            ),
            title: 'Estudios'
          },
          {
            content: (
              <>
                <StructureStudies entity='Plataforma Digital'>
                  <h1 q:slot='name_course' class='font-bold'>
                    Nest + GraphQL: Evoluciona tus APIs
                  </h1>
                  <h1 q:slot='name_entity'>Udemy</h1>
                  <p q:slot='text'>
                    El curso parte de que el estudiante sabe cómo crear un
                    RESTful api tradicional en Nest y de ahí empezamos a
                    trabajar explicando los conceptos fundamentales de GraphQL y
                    cómo empezar a implementar campos para poderlos consultar en
                    nuestros queries. El curso cuenta con guías de atajos hechas
                    por mi persona para ayudarnos a familiarizarnos y memorizar
                    conceptos necesarios de Nest y GraphQL, de esa forma el
                    material didáctico les servirá para ojearlo cada vez que
                    regresen a estudiar el curso.
                  </p>
                </StructureStudies>
                <StructureStudies entity='Plataforma Digital'>
                  <h1 q:slot='name_course' class='font-bold'>
                    Nest: Desarrollo backend escalable con Node
                  </h1>
                  <h1 q:slot='name_entity'>Udemy</h1>
                  <p q:slot='text'>Se aprendio Nestjs </p>/
                </StructureStudies>
                <StructureStudies entity='Plataforma Digital'>
                  <h1 q:slot='name_course' class='font-bold'>
                    Aprende SQL desde cero: ¡Curso con mas de 50 ejercicios! 2
                  </h1>
                  <h1 q:slot='name_entity'>Udemy</h1>
                  <p
                    q:slot='text'
                    class='h-64 overflow-auto text-ellipsis pt-4'
                  >
                    Aprende SQL desde cero: ¡Curso con mas de 50 ejercicios! 2
                    ¿Quieres aprender una habilidad que pueda ayudarte a
                    incrementar tus ingresos? Si es así, entonces este curso es
                    para ti! SQL (lenguaje de consulta estructurado) es el
                    lenguaje que utilizamos para interactuar con las bases de
                    datos que almacenan datos. Esto nos permite recuperar datos
                    con facilidad y simplicidad. A medida que términos como
                    inteligencia empresarial y big data se vuelven más
                    familiares, las empresas necesitarán más personas para
                    aprender el lenguaje SQL. Este curso le enseñará cómo usar
                    el lenguaje SQL dentro de MySQL, uno de los motores de bases
                    de datos más populares del mundo. Tendrá muchas lecciones en
                    video para enseñarle la mayoría del contenido. Cada sección
                    incluye problemas de práctica o libros electrónicos
                    adicionales para ayudar a reforzar lo que aprende en los
                    tutoriales en video.
                  </p>
                  /
                </StructureStudies>
              </>
            ),
            title: 'Cursos'
          }
        ]}
      />
    </div>
  );
});
