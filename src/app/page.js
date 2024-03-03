/* eslint-disable jsx-a11y/alt-text */
"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

import Image from "next/image";
import deved from "../../public/deved.png";
import design from "../../public/design.png";
import study from "../../public/study.png";
import code from "../../public/code.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web7 from "../../public/web7.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons  text-black  dark:text-white">
              developedbydr
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl  text-black dark:text-white"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Daniel Reis
            </h2>
            <h2 className="text-2xl py-2 text-black md:text-3xl  dark:text-white">
              Desenvolvedor de Software
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white">
              Desenvolvedor, transformando sonhos em código. Explore meu
              portfólio e veja como estou construindo o futuro da tecnologia
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-white">
            <a
              href="https://www.linkedin.com/in/danielcvtreis/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/danielcreis" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://wa.me/5521977150404" target="_blank">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com/channel/UCoBiOuKaUl2iOT_cywH3prA"
              target="_blank"
            >
              <AiFillYoutube />
            </a>
          </div>
          <div className="relative mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
            <Image
              src={deved}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1  text-black  dark:text-white">
              Sobre mim
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
              Minha paixão pela programação me levou a estudar e me aprofundar
              em desenvolvimento web, desde o design de interfaces até a
              implementação de funcionalidades complexas em diversas linguagens
              de programação. Acredito que a tecnologia é uma ferramenta
              poderosa para conectar pessoas e transformar negócios, e meu
              objetivo é contribuir para o desenvolvimento de soluções
              tecnológicas inovadoras e impactantes.
            </p>
            <p className="text-md py-2 leading-8  text-gray-800  dark:text-white">
              Conquistei clientes valiosos como freelancer, deixando minha marca
              em cada projeto. Como desenvolvedor, contribuí de forma
              significativa para o sucesso das{" "}
              <span className="text-teal-500"> empresas </span> por onde passei,
              colaborando com talentosos colegas na resolução de problemas e no
              <span className="text-teal-500">
                {" "}
                desenvolvimento de aplicativos e softwares.
              </span>
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2  text-gray-800  dark:text-white">
                Programador
              </h3>
              <p className="py-2  text-gray-800  dark:text-white">
                Desenvolvendo soluções elegantes com base nos princípios da
                programação e dos códigos.
              </p>
              <h4 className="py-4 text-teal-600">Linguagens | Ferramentas</h4>
              <p className="text-gray-800 py-1  dark:text-white">
                JavaScript | NodeJS
              </p>
              <p className="text-gray-800 py-1  dark:text-white">
                React | React Native
              </p>
              <p className="text-gray-800 py-1  dark:text-white">AWS</p>
              <p className="text-gray-800 py-1  dark:text-white">Python</p>
              <p className="text-gray-800 py-1  dark:text-white">
                Git e Github
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  text-gray-800  dark:text-white">
                Design
              </h3>
              <p className="py-2  text-gray-800  dark:text-white">
                Criando designs elegantes adequados às suas necessidades,
                seguindo a teoria fundamental do design.
              </p>
              <h4 className="py-4 text-teal-600 ">Design | Ferramentas</h4>
              <p className="text-gray-800 py-1  dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1  dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1  dark:text-white">Figma</p>
              <p className="text-gray-800 py-1  dark:text-white">Canvas</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <Image src={study} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2  text-gray-800  dark:text-white">
                Formação Superior
              </h3>
              <p className="py-2  text-gray-800  dark:text-white">
                Formado em Análise e desenvolvimentos de sistemas pela Estácio
                de Sá.
              </p>
              <h4 className="py-4 text-teal-600">Atualmente estudando</h4>
              <p className="text-gray-800 py-1  dark:text-white">IA</p>
              <p className="text-gray-800 py-1  dark:text-white">Java</p>
              <p className="text-gray-800 py-1  dark:text-white">Rust</p>
              <p className="text-gray-800 py-1  dark:text-white">Dados</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Projetos</h3>
            <p className="text-md py-2 leading-8  text-gray-800  dark:text-white">
              Explorando as fronteiras da inovação, meus projetos abaixo são um
              testemunho do meu compromisso com o aprendizado contínuo e a busca
              incansável pela{" "}
              <span className="text-teal-500">excelência técnica</span>. Cada
              empreendimento é uma oportunidade para adquirir novos
              conhecimentos e aprimorar minhas habilidades, consolidando minha
              jornada como um desenvolvedor apaixonado pela arte da programação.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web7}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
