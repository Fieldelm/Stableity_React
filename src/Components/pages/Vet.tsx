import React from 'react'
import { useTranslation } from 'react-i18next';

const Vet = () => {
  const { t } = useTranslation();

  return (
    <div>{t('Vet')}</div>
  )
}

export default Vet