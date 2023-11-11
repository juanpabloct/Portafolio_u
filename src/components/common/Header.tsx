import { component$ } from '@builder.io/qwik';
import logo from '/image/logo.jpg';
import { Link, useLocation } from '@builder.io/qwik-city';
export default component$(() => {
  const sections = [
    { name: 'Home', url: '/' },
    { name: 'Datos Laborales', url: '/works/' },
    { name: 'Estudios', url: '/studies/' }
  ];
  const {
    url: { pathname }
  } = useLocation();
  return (
    <header class='bg-black flex items-center justify-between'>
      <img src={logo} width={200} height={200} alt='' />
      <ul class='flex gap-10 last:mr-10'>
        {sections.map(({ url, name }, i) => {
          return (
            <li
              key={i}
              class={`text-white ${
                pathname === url && 'underline'
              } hover:text-slate-300`}
            >
              <Link href={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
});
