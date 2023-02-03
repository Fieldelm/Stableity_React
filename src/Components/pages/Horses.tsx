import React from 'react';

import { useTranslation } from 'react-i18next';


const Horses = () => {
  const { t } = useTranslation();

  return (
    <div>{t('Horses')}</div>
  )
}

export default Horses