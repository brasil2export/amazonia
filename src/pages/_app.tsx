import React, {useState} from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/themes/theme'
import themeDark from '../styles/themes/themeDark'
import ButtonChangeTheme from '../components/ButtonChangeTheme'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  const [toggleTheme, settoggleTheme] = useState(themeDark)

  function toogleDarkTeme(e){
    settoggleTheme(toggleTheme == themeDark ? theme  : themeDark)
  }
  return (
    <ThemeProvider theme={toggleTheme}>

      <ButtonChangeTheme>
        <input id="switch-shadow" className="switch switch--shadow" type="checkbox"  onChange={toogleDarkTeme}/>
        <label htmlFor="switch-shadow"></label>
      </ButtonChangeTheme>
     
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
