import React from 'react';

import { useTranslation } from 'react-i18next';


const Login = () => {
  const { t } = useTranslation();

  return (
    <div>{t('Login')}</div>
  )
}

export default Login