import React from 'react'
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Home')}
    </div>
  )
}

export default Home