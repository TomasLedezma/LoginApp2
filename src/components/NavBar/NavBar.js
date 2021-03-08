import Marca from "./marca/NavMarca";
import NavBarItems from "./NavBarItems";
import "./NavBar.css";
function NavBar() {
  let dummyData = [
    { label: "Login", uri: "/" },
    { label: "Todo's", uri: "/todos" },
  ];
  let navBarItems = dummyData.map((o, i)=>{
    return (
            <NavBarItems
              label={o.label}
              uri={o.uri}
              key={i}>
            </NavBarItems>
          );
  });
    return (
        <nav className="mb-10 font-sans fixed flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-black shadow sm:items-baseline w-full">
            <Marca titulo="Gaming Zone - Ledezma"></Marca>
            <ul>
        {navBarItems}
      </ul>
        </nav>
    );
}

export default NavBar;
