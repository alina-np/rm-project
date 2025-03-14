import { useLocation } from "react-router-dom";
import { AppLink } from "../../../shared/ui";
import logo from "../../../shared/assets/images/Rick_and_Morty.svg";

export function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between items-end py-5 flex-none">
      <div className="w-52">
      {location.pathname !== "/" ? (
        <AppLink to="/">
          <img src={logo} alt="Logo" />
        </AppLink>
      ) : (
        <img src={logo} alt="Logo" />
      )}</div>
      <p className="text-lime-300 text-lg">since 2013</p>
    </header>
  );
}
