import logo from "../../public/icons8-netflix.svg";
const Header = () => {
  return (
    <div className="absolute px-8 z-10">
      <img src={logo} alt="logo" />
    </div>
  );
}
export default Header