import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CurrentTheme from "./CurrentTheme";
import Theme from "./Theme";

function App() {
  /* Theme Properties ( State ) */
  const [currentTheme, setCurrentTheme] = useState(CurrentTheme);

  /* Switch Theme Func */
  const handleClick = () => {
    setCurrentTheme((prevState) => ({
      ...prevState,
      isDarkTheme: !currentTheme.isDarkTheme,
      currentSwitcherColor: changeSwitcherColor,
      currentThemeBg1: changeThemeBg1,
      currentThemeBg2: changeThemeBg2,
      currentThemeBg3: changeThemeBg3,
      cardTheme: changeCardTheme,
      currentFooterBg: changeFooterBg,
      currentFontColor: changeFontColor,
      currentBoxShadow: changeBoxShadow,
    }));
  };

  /* theme change properties */
  const changeSwitcherColor = currentTheme.isDarkTheme
    ? Theme.switcherOff
    : Theme.switcherOn;
  const changeThemeBg1 = currentTheme.isDarkTheme
    ? Theme.lightThemeBg1
    : Theme.darkThemeBg1;
  const changeThemeBg2 = currentTheme.isDarkTheme
    ? Theme.lightThemeBg2
    : Theme.darkThemeBg2;
  const changeThemeBg3 = currentTheme.isDarkTheme
    ? Theme.lightThemeBg3
    : Theme.darkThemeBg3;
  const changeCardTheme = currentTheme.isDarkTheme
    ? Theme.lightCard
    : Theme.darkCard;
  const changeFooterBg = currentTheme.isDarkTheme
    ? Theme.lightFooterBg
    : Theme.darkFooterBg;
  const changeFontColor = currentTheme.isDarkTheme
    ? Theme.blackFont
    : Theme.whiteFont;
  const changeBoxShadow = currentTheme.isDarkTheme
    ? Theme.darkBoxShadow
    : Theme.lightBoxShadow;

  return (
    <main
      style={{
        background: currentTheme.currentThemeBg1,
        background: currentTheme.currentThemeBg2,
        background: currentTheme.currentThemeBg3,
        color: currentTheme.currentFontColor,
      }}
    >
      <ThemeSwitcher
        switchColor={currentTheme.currentSwitcherColor}
        clickedFunc={handleClick}
      />
      <Card
        theme={currentTheme.cardTheme}
        footerBg={currentTheme.currentFooterBg}
        boxShadow={currentTheme.currentBoxShadow}
      />
    </main>
  );
}

export default App;
