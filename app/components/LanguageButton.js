"use client";

import { useState } from "react";

const LanguageButton = () => {
  const [language, setLanguage] = useState("es");

  const handleLanguage = (event) => {
    if (event.target.value === "es") {
      setLanguage("es");
    } else if (event.target.value === "en") {
      setLanguage("en");
    } else if (event.target.value === "pt") {
      setLanguage("pt");
    }
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          {language === "es" ? (
            <img
              src="https://icons.iconarchive.com/icons/wikipedia/flags/512/ES-Spain-Flag-icon.png"
              alt=""
            />
          ) : language === "en" ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/5111/5111640.png"
              alt=""
            />
          ) : (
            <img
              src="https://icons.iconarchive.com/icons/wikipedia/flags/512/PT-Portugal-Flag-icon.png"
              alt=""
            />
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" value="es">
            <img
              src="https://icons.iconarchive.com/icons/wikipedia/flags/512/ES-Spain-Flag-icon.png"
              alt=""
              onClick={handleLanguage}
            />
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" value="en">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5111/5111640.png"
              alt=""
              onClick={handleLanguage}
            />
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" value="pt">
            <img
              src="https://icons.iconarchive.com/icons/wikipedia/flags/512/PT-Portugal-Flag-icon.png"
              alt=""
              onClick={handleLanguage}
            />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <style jsx>{`

        img {
          width: 60px;
        }
      `}</style>
    </>
  );
};

export default LanguageButton;

import Dropdown from "react-bootstrap/Dropdown";
