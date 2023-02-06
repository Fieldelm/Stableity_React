import React, { Component, useState, ChangeEvent } from 'react';
import './style/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Horses from './Components/pages/Horses';
import Ferrier from './Components/pages/Ferrier';
import Owners from './Components/pages/Owners';
import Vet from './Components/pages/Vet';

import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';
import Register from './Components/pages/Register';
import Login from './Components/pages/Login';


const App = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (langCode: string): void => {
    i18n.changeLanguage(langCode);
    console.log(`${langCode} is clicked`);
  }

  const langs: language[] = [
    {
      code: 'hu',
      name: 'Magyar',
      country_code: 'hu',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    }
  ]

  const pages: Page[] = [
    {
      name: t('Home'),
      route: '/',
      element: <Home />
    },
    {
      name: t('Horses'),
      route: '/horses',
      element: <Horses />
    },
    {
      name: t('Ferrier'),
      route: '/ferrier',
      element: <Ferrier />
    },
    {
      name: t('Vet'),
      route: '/vet',
      element: <Vet />
    },
    {
      name: t('Owners'),
      route: '/owners',
      element: <Owners />
    },
    {
      name: t('Signin'),
      route: '/register',
      element: <Register />
    }
  ]


  return (
    <div>
      <BrowserRouter>

        <Navbar pages={pages} />

        <div className='content'>
          <div className='content__flag-container'>
            {langs.map((lan: any, index: number) => (
              <Flag key={index} code={lan.country_code} onClick={() => changeLanguage(lan.code)} />
            ))}
          </div>

          <div className='content__page'>
          <Routes>
            {pages.map((page: Page, index: number) => (
              <Route key={index} path={page.route} element={page.element} />
            ))}
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )

}



export default App
