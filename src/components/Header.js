import logo from "../assets/logo.png"
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
    console.log("Header state change")
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="LOGO"/>
                <span>Task Manager</span>
            </div>
            <ThemeSwitcher />
        </header>
    );
};

export default Header;