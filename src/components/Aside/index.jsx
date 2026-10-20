import logo from "../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className='bg-neutral-header max-w-[282px] min-h-screen py-20 px-10 flex flex-col gap-[56px]'>
      <img src={logo} alt="" />
      <footer className="text-neutral-text text-[13px] leading-[120%] text-center">
        Desenvolvido por Carlos Thompson, seguindo a formação React Developer da Alura Cursos. 
        Este projeto é fictício com fins educacionais.
      </footer>
    </aside>
  );
};
