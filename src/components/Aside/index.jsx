import logo from "../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className="bg-neutral-background min-h-screen">
      <img src={logo} alt="" />
      <footer className="">
        Desenvolvido por Carlos Thompson, seguindo a formação React Developer da Alura Cursos. 
        Este projeto é fictício com fins educacionais.
      </footer>
    </aside>
  );
};
