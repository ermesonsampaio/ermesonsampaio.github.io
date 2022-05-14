import React, { useRef, useState } from 'react';
import { Tab } from '@headlessui/react';

import Logo from './assets/logo-white.svg';
import WelcomeIllustration from './assets/images/welcome.svg';
import Scientia from './assets/images/scientia.svg';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const habilitiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [menuIsActive, setMenuIsActive] = useState(false);

  const headerOptions = [
    {
      title: 'Sobre mim',
      ref: aboutRef,
    },
    {
      title: 'Portfólio',
      ref: portfolioRef,
    },
    {
      title: 'Habilidades',
      ref: habilitiesRef,
    },
    {
      title: 'Contato',
      ref: contactRef,
    },
  ];
  const categories = {
    Aplicativos: [
      {
        id: 1,
        image: {
          source: Scientia,
          alt: 'Homescreen do aplicativo Scientia',
        },
        title: 'Scientia',
        description:
          'Um aplicativo que tem como objetivo dinamizar o processo de aprendizado dos estudantes brasileiros, através dos questionários que têm como objetivo auxiliar a fixação dos conteúdos já estudados.',
      },
    ],
    Sites: [],
  };
  const habilities = {
    HTML: 'devicon-html5-plain',
    CSS: 'devicon-css3-plain',
    Javascript: 'devicon-javascript-plain',
    Typescript: 'devicon-typescript-plain',
    React: 'devicon-react-original',
    'React Native': 'devicon-react-original',
    'Tailwind CSS': 'devicon-tailwindcss-plain',
    Git: 'devicon-git-plain',
    'Node JS': 'devicon-nodejs-plain',
  };
  const contact = {
    Github: {
      title: '@ermesonsampaio',
      icon: 'devicon-github-original',
      href: 'https://github.com/ermesonsampaio/',
    },
    Email: {
      title: 'ermeson.queiroz@aluno.ce.gov.br',
      icon: 'fa-solid fa-envelope',
      href: 'mailto:ermeson.queiroz@aluno.ce.gov.br',
    },
    Whatsapp: {
      title: '+55 (85) 9 98122-1606',
      icon: 'fa-brands fa-whatsapp',
      href: 'https://api.whatsapp.com/send?phone=5585981221606&text=Ol%C3%A1!%20Estou%20interessado%20em%20seus%20servi%C3%A7os',
    },
  };

  return (
    <>
      <div className="h-screen flex flex-col px-10">
        <nav
          className={`px-12 py-5 border-b border-slate-300/20 flex justify-between items-center fixed bg-gray-400/10 backdrop-blur-sm self-center w-full top-0 z-10 transition-transform ${
            menuIsActive ? 'h-screen' : ''
          }`}
        >
          <button
            type="button"
            onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={Logo} className="w-10 h-10" />
          </button>

          <ul className="flex gap-x-8">
            {headerOptions.map(({ title, ref }) => (
              <li key={title}>
                <button
                  type="button"
                  className="text-base transition-colors font-medium hover:text-gray-200"
                  onClick={() =>
                    ref?.current?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center flex-col gap-y-12 md:gap-x-16 justify-center mt-10 md:flex-row">
            <img src={WelcomeIllustration} className="w-3/5 md:w-3/12 h-auto" />

            <div className="flex flex-col max-w-xl">
              <h1 className="text-center md:text-left text-5xl font-medium tracking-tight">
                Ermeson Sampaio
              </h1>
              <p className="text-center mt-4 md:text-justify leading-relaxed text-base">
                Estudande do ensino médio e Desnvolvedor Backend
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={aboutRef}
        className="flex flex-col pt-10 px-10 bg-darker-700/60"
      >
        <h1 className="mt-16 text-3xl font-bold pb-2">Sobre mim</h1>

        <p className="leading-relaxed font-regular text-justify">
          Sou um jovem programador. Minha introdução na área de desenvolvimento
          se deu há 3 anos atrás, porém até o momento ainda não atuei
          profissionalmente na área. Estou cursando o ensino médio juntamente
          com redes de computadores. Atualmente desenvolvo apenas projetos
          pessoais open-source como hobby.
        </p>
      </div>

      <div
        ref={portfolioRef}
        className="flex flex-col pt-10 px-10 bg-darker-700/60"
      >
        <h1 className="mt-16 text-3xl font-bold pb-8">Meus projetos</h1>

        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl p-1 gap-x-4">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-md py-3 text-sm font-medium leading-5',
                    'ring-white ring-offset-2 ring-offset-brand-400 focus:outline-none focus:ring-2 transition-colors',
                    selected
                      ? 'bg-white shadow text-brand-500'
                      : 'hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((content, idx) => {
              const posts: typeof categories.Aplicativos = content;

              return (
                <Tab.Panel key={idx} className="p-8">
                  <ul>
                    {(posts as Array<typeof categories['Aplicativos'][0]>).map(
                      (post) => (
                        <div key={post.id} className="w-full flex gap-8">
                          <img
                            className="h-96"
                            src={post.image.source}
                            alt={post.image.alt}
                          />
                          <div className="flex flex-col gap-y-4">
                            <h1 className="text-white font-medium text-2xl">
                              {post.title}
                            </h1>
                            <p className="leading-relaxed font-light">
                              {post.description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </ul>
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div
        ref={habilitiesRef}
        className="flex flex-col pt-10 px-10 bg-darker-700/60"
      >
        <h1 className="mt-16 text-3xl font-bold pb-8">Minhas habilidades</h1>

        <div className="flex gap-8 flex-wrap justify-center">
          {Object.entries(habilities).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col px-8 py-4 w-40 items-center bg-black/30 rounded-md shadow-md"
            >
              <i className={`${value} text-5xl`}></i>
              <p className="text-sm leading-relaxed text-darker-400 mt-2">
                {key}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={contactRef}
        className="flex flex-col py-10 px-10 bg-darker-700/60"
      >
        <h1 className="mt-16 text-3xl font-bold pb-2">Contato</h1>

        <div className="flex flex-col">
          <h2 className="leading-relaxed font-regular text-justify">
            Caso queira entrar em contato comigo:
          </h2>

          <div className="flex flex-col mt-4">
            {Object.entries(contact).map(([key, value]) => (
              <a
                href={value.href}
                key={key}
                className="flex items-center py-1 gap-2 group w-fit"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className={`${value.icon} text-3xl group-hover:text-gray-400 transition-colors`}
                ></i>
                <p className="text-md text-white group-hover:text-gray-400 transition-colors">
                  {value.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="flex p-10 bg-darker-700/60">
        <span className="text-gray-400 text-md leading-relaxed font-light">
          Copyright © 2022 Ermeson Sampaio
        </span>
      </footer>
    </>
  );
}

export default App;
