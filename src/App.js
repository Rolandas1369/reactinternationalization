import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import { I18nProvider, LOCALES  } from "./i18n";
import translate from './i18n/translate';

function App() {

  const [locale, setLocale] = useState(LOCALES.ENGLISH)

  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <header className="App-header">
          {translate('hello')}
          <img src={logo} className="App-logo" alt="logo" />
          {translate('edit', {path: <code>src/App.js</code>})}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={() => setLocale(LOCALES.FRENCH)}>FR</button>
        <button onClick={() => setLocale(LOCALES.GERMAN)}>GR</button>
        <button onClick={() => setLocale(LOCALES.ENGLISH)}>EN</button>
      </div>
    </I18nProvider>
  );
}

export default App;
