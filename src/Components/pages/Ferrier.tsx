import React from 'react'
import { useTranslation } from 'react-i18next';

const Ferrier = () => {
  const { t } = useTranslation();

  return (
    <div>{t('Ferrier')}</div>
  )
}

export default Ferrier