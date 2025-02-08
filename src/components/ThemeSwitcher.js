import {useEffect, useState} from "react";

const THEME_KEY = "theme"

const ThemeSwitcher = () => {
    console.log("ThemeSwitcher state change")
    const parse = JSON.parse(localStorage.getItem(THEME_KEY));
    const defaultTheme = parse !== undefined ? parse : "dark"
    const [theme, setTheme] = useState(defaultTheme)

    useEffect(() => {
        document.documentElement.className = '';
        document.documentElement.classList.add(theme)
        localStorage.setItem(THEME_KEY, JSON.stringify(theme))
    }, [theme]);

    return (
        <div className="themeSelector">
            <span onClick={() => setTheme("light")} className={theme === "light" ? "activeTheme light" : "light"}></span>
            <span onClick={() => setTheme("medium")} className={theme === "medium" ? "activeTheme medium" : "medium"}></span>
            <span onClick={() => setTheme("dark")} className={theme === "dark" ? "activeTheme dark" : "dark"}></span>
            <span onClick={() => setTheme("gOne")} className={theme === "gOne" ? "activeTheme gOne" : "gOne"}></span>
            <span onClick={() => setTheme("gTwo")} className={theme === "gTwo" ? "activeTheme gTwo" : "gTwo"}></span>
            <span onClick={() => setTheme("gThree")} className={theme === "gThree" ? "activeTheme gThree" : "gThree"}></span>
        </div>
    );
};

export default ThemeSwitcher;