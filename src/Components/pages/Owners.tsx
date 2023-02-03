import React from 'react'
import { useTranslation } from 'react-i18next';

const Owners = () => {
  const { t } = useTranslation();

  return (
    <div>{t('Owners')}</div>
  )
}

export default Owners