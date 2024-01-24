import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const DarkMode = () => {
  //Dark&Light mode Toggle
  const [darkLight, setDarkLight] = useState(false);

  //functionality
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setDarkLight(!darkLight);
    } else {
      setTheme("light");
      setDarkLight(!darkLight);
    }
  };

  return (
    <>
      {darkLight ? (
        <MdLightMode onClick={changeTheme} size={30} />
      ) : (
        <MdDarkMode onClick={changeTheme} size={30} />
      )}
    </>
  );
};

export default DarkMode;
