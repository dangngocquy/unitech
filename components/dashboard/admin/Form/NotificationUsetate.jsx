import { useState } from 'react';

const NotificationUsetate = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errorfile, setErrorFile] = useState('');
  const [errproductName, setErrProductName] = useState('');
  const [errContent, setErrContent] = useState('');
  const [errType, setErrType] = useState('');
  const [errIntroduce, setIntroduce] = useState('');
  const [errBrand, seterrBrand] = useState('');
  const [errpricePlus, seterrPricePlus] = useState('');
  const [errflash, seterrFlash] = useState('');
  const [errproin, setErrProin] = useState('');
  const [errorGiftMessage, setErrorGiftMessage] = useState('');
  const [errorConfigurationDataMessage, setErrorConfigurationDataMessage] = useState('');

  return {
    errorMessage,
    errorfile,
    errproductName,
    errContent,
    errType,
    errIntroduce,
    errBrand,
    errpricePlus,
    errflash,
    errorGiftMessage,
    errorConfigurationDataMessage,
    errproin,
    setErrProin,
    setErrorConfigurationDataMessage,
    setErrorGiftMessage,
    seterrFlash,
    seterrPricePlus,
    seterrBrand,
    setIntroduce,
    setErrType,
    setErrContent,
    setErrProductName,
    setErrorMessage,
    setErrorFile,
  };
};

export default NotificationUsetate;
;