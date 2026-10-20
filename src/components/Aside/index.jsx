import logo from "../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className="bg-neutral-header max-w-[282px] min-h-screen py-20 px-10 flex flex-col justify-between">
      <img src={logo} alt="" />
      <footer className="text-neutral-text text-[11px] leading-[120%] text-start">
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/thompson-carlos/">
          <span className="text-yellow-500">Carlos Thompson</span></a>
        </p>
        <p>
          Seguindo a formação React Developer da Alura Cursos. Este projeto é
          fictício com fins educacionais.
        </p>
      </footer>
    </aside>
  );
};
