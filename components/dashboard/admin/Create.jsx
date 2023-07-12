import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineLeft, AiOutlinePicture } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';
import { GrFormClose } from 'react-icons/gr';
import Notification from '../../designLayouts/Notification';
import ButtonMain from '../../designLayouts/ButtonMain';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from '@ckeditor/ckeditor5-build-classic';
import useEventHandlers from './Form/EventHandler/EventHandler';
import useSelectedFiles from './Form/EventHandler/SelectedFiles';
import NotificationUsetate from './Form/NotificationUsetate';
import { khac, px, i9, rtx, rams, tyrams, rom, ssd, cameraphone, pins, wins, colorsbtn, saleUNT } from '../../../assets/images';

const Create = () => {
  const {
    content,
    memory,
    card,
    sale,
    productName,
    introduce,
    isCardChecked,
    isMemoryChecked,
    activeTab,
    enableTabs,
    type,
    brand,
    pricePlus,
    flash,
    isDisplayChecked,
    display,
    chip,
    resolution,
    typeram,
    isEesolutionChecked,
    isTyperamChecked,
    isChipChecked,
    camera,
    harddrive,
    internalmemory,
    system,
    pin,
    isSystemChecked,
    isPinChecked,
    isCameraChecked,
    isHarddriveChecked,
    isInternalmemoryChecked,
    colorInputs,
    gift,
    giftTitle,
    isOpenset,
    colorswicth,
    romswicth,
    capacityInputs,
    inputValue,
    showInput,
    activeTabc,
    configurationData,
    errorConfigurationDataMessage,
    setErrorConfigurationDataMessage,
    isOpenset1,
    formattedPricePlus,
    formattedFlash,
    activeTaba,
    current,
    isOpenset2,
    proin,
    commentson,
    handlesetCommentsonCheckboxChange,
    handleProinChange,
    openModal2,
    closeModal2,
    handleCurrentChange,
    handleTabClicka,
    handleConfigurationChange,
    closeModal1,
    openModal1,
    handleRemoveColor,
    addConfigurationInput,
    removeConfigurationInput,
    handleTabClickc,
    handleInputChange,
    handleAddCapacityValue,
    handleAddCapacity,
    handleCapacityChange,
    handlesetCapacityCheckboxChange,
    handleCheckboxChange,
    openModal,
    closeModal,
    handleGiftTitleChange,
    handleGiftChange,
    handleAddColor,
    handleColorChange,
    handleSystemCheckboxChange,
    handlePinCheckboxChange,
    handleCameraCheckboxChange,
    handleHarddriveCheckboxChange,
    handleInternalmemoryCheckboxChange,
    handleSystemChange,
    handlePinChange,
    handleCameraChange,
    handleHarddriveChange,
    handleInternalmemoryChange,
    handleTyperamCheckboxChange,
    handleChipCheckboxChange,
    handleResolutionCheckboxChange,
    handleChipChange,
    handleResolutionChange,
    handleTyperamChange,
    handleDisplayCheckboxChange,
    handleDisplayChange,
    handleFlashChange,
    handlePricePlusChange,
    handleBrandChange,
    handleTypeChange,
    handleBackStep,
    handleNextStep,
    handleTabClick,
    handleContentChange,
    handleMemoryChange,
    handleCardChange,
    handleSaleChange,
    handleProductNameChange,
    handleIntroduceChange,
    handleMemoryCheckboxChange,
    handleCardCheckboxChange,
  } = useEventHandlers();

  const {
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
    errproin,
    setErrProin,
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
  } = NotificationUsetate();

  const { selectedFiles, filePreviews, handleFileSelect, handleFileRemove } = useSelectedFiles();
  const [existingProductNames, setExistingProductNames] = useState([]);
  const [formattedPricePlusForFormData, setFormattedPricePlusForFormData] = useState('');
  const [formattedFlashForFormData, setFormattedFlashForFormData] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setFormattedPricePlusForFormData(formattedPricePlus);
    setFormattedFlashForFormData(formattedFlash);
  }, [formattedPricePlus, formattedFlash]);


  const configData = [
    {
      id: 1,
      name: "Kích thước màn hình",
      event: display,
      click: handleDisplayChange,
      checkbox: isDisplayChecked,
      eventcheckbox: handleDisplayCheckboxChange,
      label: "on-off1",
      images: khac,
    },
    {
      id: 2,
      name: "Độ phân giải",
      event: resolution,
      click: handleResolutionChange,
      checkbox: isEesolutionChecked,
      eventcheckbox: handleResolutionCheckboxChange,
      label: "on-off2",
      images: px,
    },
    {
      id: 3,
      name: "Chip",
      event: chip,
      click: handleChipChange,
      checkbox: isChipChecked,
      eventcheckbox: handleChipCheckboxChange,
      label: "on-off3",
      images: i9,
    },
    {
      id: 4,
      name: "Card đồ họa",
      event: card,
      click: handleCardChange,
      label: "on-off4",
      checkbox: isCardChecked,
      eventcheckbox: handleCardCheckboxChange,
      images: rtx,
    },
    {
      id: 5,
      name: "Ram",
      event: memory,
      click: handleMemoryChange,
      checkbox: isMemoryChecked,
      eventcheckbox: handleMemoryCheckboxChange,
      label: "on-off5",
      images: rams,
    },
    {
      id: 6,
      name: "Loại Ram",
      event: typeram,
      click: handleTyperamChange,
      checkbox: isTyperamChecked,
      eventcheckbox: handleTyperamCheckboxChange,
      label: "on-off6",
      images: tyrams,
    },
    {
      id: 7,
      name: "Bộ nhớ trong",
      event: internalmemory,
      click: handleInternalmemoryChange,
      checkbox: isInternalmemoryChecked,
      eventcheckbox: handleInternalmemoryCheckboxChange,
      label: "on-off7",
      images: rom,
    },
    {
      id: 8,
      name: "Ổ cứng",
      event: harddrive,
      click: handleHarddriveChange,
      checkbox: isHarddriveChecked,
      eventcheckbox: handleHarddriveCheckboxChange,
      label: "on-off8",
      images: ssd,
    },
    {
      id: 9,
      name: "Camera",
      event: camera,
      click: handleCameraChange,
      checkbox: isCameraChecked,
      eventcheckbox: handleCameraCheckboxChange,
      label: "on-off9",
      images: cameraphone,
    },
    {
      id: 10,
      name: "Pin",
      event: pin,
      click: handlePinChange,
      checkbox: isPinChecked,
      eventcheckbox: handlePinCheckboxChange,
      label: "on-off10",
      images: pins,
    },
    {
      id: 11,
      name: "Hệ điều hành",
      event: system,
      click: handleSystemChange,
      checkbox: isSystemChecked,
      eventcheckbox: handleSystemCheckboxChange,
      label: "on-off11",
      images: wins,
    }
  ]

  const brandOptions = [
    { value: 'Apple', label: 'Apple' },
    { value: 'Xiaomi', label: 'Xiaomi' },
    { value: 'Samsung', label: 'Samsung' },
    { value: 'Oppo', label: 'Oppo' },
    { value: 'Vivo', label: 'Vivo' },
    { value: 'Nokia', label: 'Nokia' },
    { value: 'Realme', label: 'Realme' },
    { value: 'Oneplus', label: 'Oneplus' },
    { value: 'Tecno', label: 'Tecno' },
    { value: 'Asus', label: 'Asus' },
    { value: 'Lenovo', label: 'Lenovo' },
    { value: 'Acer', label: 'Acer' },
    { value: 'Msi', label: 'Msi' },
    { value: 'Khác', label: 'Khác' },
  ];

  const currentOptions = {
    Apple: [
      { value: 'Iphone', label: 'Iphone' },
      { value: 'Ipad', label: 'Ipad' },
      { value: 'Macbook', label: 'Macbook' },
      { value: 'AirPods', label: 'AirPods' },
      { value: 'Apple watch', label: 'Apple watch' },
      { value: 'Khác', label: 'Khác' },
    ],
    Xiaomi: [
      { value: 'Redmi', label: 'Redmi' },
      { value: 'Mi Mix', label: 'Mi Mix' },
      { value: 'MI', label: 'MI' },
    ],
    Samsung: [
      { value: 'Galaxy A Series', label: 'Galaxy A Series' },
      { value: 'Galaxy S Series', label: 'Galaxy S Series' },
      { value: 'Galaxy Note Series', label: 'Galaxy Note Series' },
      { value: 'Galaxy Z Series', label: 'Galaxy Z Series' },
      { value: 'Galaxy Tab Series', label: 'Galaxy Tab Series' },
      { value: 'Samsung Galaxy Watch', label: 'Samsung Galaxy Watch' },
      { value: 'Samsung QLED', label: 'Samsung QLED' },
      { value: 'Samsung Galaxy Buds', label: 'Samsung Galaxy Buds' },
      { value: 'Khác', label: 'Khác' },
    ],
    Oppo: [
      { value: 'Oppo A Series', label: 'Oppo A Series' },
      { value: 'Oppo F Series', label: 'Oppo F Series' },
      { value: 'Oppo K Series', label: 'Oppo K Series' },
      { value: 'Oppo Reno', label: 'Oppo Reno' },
      { value: 'Oppo Find', label: 'Oppo Find' },
      { value: 'Oppo Watch', label: 'Oppo Watch' },
      { value: 'Khác', label: 'Khác' },
    ],
    Vivo: [
      { value: 'Vivo Y Series', label: 'Vivo Y Series' },
      { value: 'Vivo X Series', label: 'Vivo X Series' },
      { value: 'Vivo S Series', label: 'Vivo S Series' },
      { value: 'Vivo V Series', label: 'Vivo V Series' },
      { value: 'Vivo IQOO', label: 'Vivo IQOO' },
      { value: 'Khác', label: 'Khác' },
    ],
    Nokia: [
      { value: 'Nokia C Series', label: 'Nokia C Series' },
      { value: 'Nokia X Series', label: 'Nokia X Series' },
      { value: 'Khác', label: 'Khác' },
    ],
    Realme: [
      { value: 'Realme C Series', label: 'Realme C Series' },
      { value: 'Realme X Series', label: 'Realme X Series' },
      { value: 'Realme GT', label: 'Realme GT' },
      { value: 'Khác', label: 'Khác' },
    ],
    Oneplus: [
      { value: 'OnePlus Nord', label: 'OnePlus Nord' },
      { value: 'Khác', label: 'Khác' },
    ],
    Tecno: [
      { value: 'Tecno Camon', label: 'Tecno Camon' },
      { value: 'Tecno Spark', label: 'Tecno Spark' },
      { value: 'Tecno Pouvoir', label: 'Tecno Pouvoir' },
      { value: 'Tecno Pop', label: 'Tecno Pop' },
      { value: 'Khác', label: 'Khác' },
    ],
    Asus: [
      { value: 'Asus ROG', label: 'Asus ROG' },
      { value: 'Asus Zenfone', label: 'Asus Zenfone' },
      { value: 'Asus TUF', label: 'Asus TUF' },
      { value: 'Khác', label: 'Khác' },
    ],
    Lenovo: [
      { value: 'Lenovo ThinkPad', label: 'Lenovo ThinkPad' },
      { value: 'Lenovo Legion', label: 'Lenovo Legion' },
      { value: 'Lenovo Yoga', label: 'Lenovo Yoga' },
      { value: 'Lenovo Ideapad', label: 'Lenovo Ideapad' },
      { value: 'Lenovo Chromebook', label: 'Lenovo Chromebook' },
      { value: 'Khác', label: 'Khác' },
    ],
    Acer: [
      { value: 'Acer Aspire', label: 'Acer Aspire' },
      { value: 'Acer Predator', label: 'Acer Predator' },
      { value: 'Acer Swift', label: 'Acer Swift' },
      { value: 'Acer Nitro', label: 'Acer Nitro' },
      { value: 'Acer Chromebook', label: 'Acer Chromebook' },
      { value: 'Acer TravelMate', label: 'Acer TravelMate' },
      { value: 'Acer Spin', label: 'Acer Spin' },
      { value: 'Acer ConceptD', label: 'Acer ConceptD' },
      { value: 'Acer Extensa', label: 'Acer Extensa' },
      { value: 'Acer Veriton', label: 'Acer Veriton' },
      { value: 'Khác', label: 'Khác' },
    ],
    MSI: [
      { value: 'MSI GS66', label: 'MSI GS66' },
      { value: 'MSI GT76', label: 'MSI GT76' },
      { value: 'MSI Prestige', label: 'MSI Prestige' },
      { value: 'MSI Bravo', label: 'MSI Bravo' },
      { value: 'MSI Modern', label: 'MSI Modern' },
      { value: 'MSI Alpha', label: 'MSI Alpha' },
      { value: 'MSI Trident', label: 'MSI Trident' },
      { value: 'MSI Infinite', label: 'MSI Infinite' },
      { value: 'MSI MAG Series', label: 'MSI MAG Series' },
      { value: 'MSI Optix Series', label: 'MSI Optix Series' },
      { value: 'Khác', label: 'Khác' },
    ],
  };

  const options = [
    { id: 1, label: '16 GB', value: '16 GB' },
    { id: 2, label: '32 GB', value: '32 GB' },
    { id: 3, label: '64 GB', value: '64 GB' },
    { id: 4, label: '128 GB', value: '128 GB' },
    { id: 5, label: '256 GB', value: '256 GB' },
    { id: 6, label: '512 GB', value: '512 GB' },
    { id: 7, label: '1 TB', value: '1 TB' },
    { id: 8, label: '2 TB', value: '2 TB' }
  ];

  const renderButtons = () => {
    return (
      <div className="grid-class-flex">
        {options.map((option) => (
          <span
            key={option.id}
            onClick={() => handleCapacityChange(option.id - 1, 'datarom1', option.value)}
            style={{
              margin: '5px',
              border: capacityInputs.some((input) => input.datarom1 === option.value) ? '2px solid blue' : '2px solid transparent',
            }}
          >
            {option.label}
          </span>
        ))}
        {!showInput && !inputValue && <button onClick={handleAddCapacity} className="grid-class-flex-btn">Thêm</button>}
      </div>
    );
  };


  useEffect(() => {
    let timeout;
    if (successMessage !== '') {
      timeout = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [successMessage]);

  const handleUpload = () => {
    if (existingProductNames.includes(productName.trim())) {
      setErrProductName(<Notification type="warning" content="Tên sản phẩm đã tồn tại!" />);
      setTimeout(() => {
        setErrProductName('');
      }, 4000);
      return;
    }
    if (productName.length === 0) {
      setErrProductName(<Notification type="warning" content="Bạn chưa nhập tên sản phẩm!" />);
      setTimeout(() => {
        setErrProductName('');
      }, 4000);
      return;
    }
    if (content.length === 0) {
      setErrContent(<Notification type="warning" content="Vui lòng nhập đặc điểm nổi bật!" />);
      setTimeout(() => {
        setErrContent('');
      }, 4000);
      return;
    }
    if (proin.length === 0) {
      setErrProin(<Notification type="warning" content="Vui lòng nhập thông tin của sản phẩm!" />);
      setTimeout(() => {
        setErrProin('');
      }, 4000);
      return;
    }
    if (selectedFiles.length === 0) {
      setErrorFile(<Notification type="warning" content="Vui lòng chọn ít nhất một hình ảnh để tải lên!" />);
      setTimeout(() => {
        setErrorFile('');
      }, 4000);
      return;
    }
    if (introduce.length === 0) {
      setIntroduce(<Notification type="warning" content="Bạn chưa nhập nội dung mô tả sản phẩm!" />);
      setTimeout(() => {
        setIntroduce('');
      }, 4000);
      return;
    }
    if (configurationData.length === 0) {
      setErrorConfigurationDataMessage(<Notification type="warning" content="Nhập ít nhất ba thông tin cấu hình của sản phẩm!" />);
      setTimeout(() => {
        setErrorConfigurationDataMessage('');
      }, 4000);
      return;
    }

    if (type.length === 0) {
      setErrType(<Notification type="warning" content="Vui lòng chọn một loại danh mục!" />);
      setTimeout(() => {
        setErrType('');
      }, 4000);
      return;
    }
    if (brand.length === 0) {
      seterrBrand(<Notification type="warning" content="Vui lòng chọn một loại danh mục!" />);
      setTimeout(() => {
        seterrBrand('');
      }, 4000);
      return;
    }
    if (pricePlus.length === 0) {
      seterrPricePlus(<Notification type="warning" content="Vui lòng nhập giá bán phân cách số bởi dấu chấm!" />);
      setTimeout(() => {
        seterrPricePlus('');
      }, 4000);
      return;
    }
    if (flash.length === 0) {
      seterrFlash(<Notification type="warning" content="Vui lòng Set giá khuyến mãi!" />);
      setTimeout(() => {
        seterrFlash('');
      }, 4000);
      return;
    }
    if (gift && !giftTitle) {
      setErrorGiftMessage(<Notification type="warning" content="bạn chưa nhập tiêu đề khuyến mãi!" />);
      setTimeout(() => {
        setErrorGiftMessage(''); // Ẩn cảnh báo sau 3 giây
      }, 3000);
      return;
    }

    if (!gift && giftTitle) {
      setErrorGiftMessage(<Notification type="warning" content="bạn chưa bật Gift!" />);
      setTimeout(() => {
        setErrorGiftMessage(''); // Ẩn cảnh báo sau 3 giây
      }, 3000);
      return;
    }
    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
      formData.append('images', file);
    });
    formData.append('content', JSON.stringify(content));
    formData.append('sale', sale);
    if (isMemoryChecked) {
      formData.append('memory', memory);
    }
    if (isCardChecked) {
      formData.append('card', card);
    }
    if (isDisplayChecked) {
      formData.append('display', display);
    }
    if (isChipChecked) {
      formData.append('chip', chip);
    }
    if (isEesolutionChecked) {
      formData.append('resolution', resolution);
    }
    if (isTyperamChecked) {
      formData.append('typeram', typeram);
    }
    if (isHarddriveChecked) {
      formData.append('harddrive', harddrive);
    }
    if (isCameraChecked) {
      formData.append('camera', camera);
    }
    if (isInternalmemoryChecked) {
      formData.append('internalmemory', internalmemory);
    }
    if (isPinChecked) {
      formData.append('pin', pin);
    }
    if (isSystemChecked) {
      formData.append('system', system);
    }
    formData.append('productName', productName);
    formData.append('introduce', introduce);
    formData.append('type', type);
    formData.append('current', current);
    formData.append('brand', brand);
    formData.append('pricePlus', formattedPricePlusForFormData);
    formData.append('flash', formattedFlashForFormData);
    formData.append('gift', gift);
    formData.append('proin', proin);
    formData.append('colorswicth', colorswicth ? 'true' : 'false');
    formData.append('romswicth', romswicth ? 'true' : 'false');
    formData.append('commentson', commentson ? 'true' : 'false');
    if (gift) {
      formData.append('giftTitle', giftTitle); // Thêm trường dữ liệu "giftTitle" vào formData chỉ khi checkbox được chọn
    }
    const colorArray = colorInputs.map((color) => ({
      color1: color.color1 || '',
      colors1: color.colors1 || '',
    }));
    formData.append('color', JSON.stringify(colorArray));

    const CapacityArray = capacityInputs.filter((datarom) => datarom.datarom1 !== "").map((datarom) => ({
      datarom1: datarom.datarom1
    }));
    formData.append('datarom', JSON.stringify(CapacityArray));

    formData.append('configuration', JSON.stringify(configurationData));

    axios
      .post('http://localhost:5000/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        setSuccessMessage(<Notification type="success" content="Thêm sản phẩm thành công!" />);
        setExistingProductNames([...existingProductNames, productName.trim()]);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(<Notification type="error" content="Tải lên thất bại!" />);
      });
  };

  const editorConfiguration = {
    language: 'vi',
  };

  const filteredData = configData.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const listItems = filteredData.map((item) => (
    <div className='box-config-dashboard' key={item.id}>
      <div className='online-dashboard-unt'>
        <p>Bật trạng thái</p>
        <input type="checkbox" id={item.label} className='on-off-checkbox' checked={item.checkbox} onChange={item.eventcheckbox} />
        <label className="on-off-checkbox-lable" htmlFor={item.label}></label>
      </div>
      <div className='img-box-config'>
        <img src={item.images} alt={item.name} />
      </div>
      <div className='flex-2'>
        <p>{item.name}</p>
        <input type='text' placeholder={`Nhập ` + item.name + `...`} value={item.event} onChange={item.click} />
      </div>
    </div>
  ));

  const navigate = useNavigate();
  function goBack() {
    navigate(-1); // quay lại trang trước đó
  }

  return (
    <div className='unitech-container-main-dashboard'>
      <title>Unitech - Thêm sản phẩm</title>
      <div className='unt-text-post'>
        <span>
          <AiOutlineLeft size={23} className='Create-icon-back' onClick={goBack} />
          <h1>Thêm sản phẩm</h1>
        </span>
        <span>
          <button className='cancel-unt-create'>HỦY</button>
          <ButtonMain title={<div style={{ padding: '10px' }} onClick={openModal2}>XUẤT BẢN</div>} />
        </span>
      </div>

      {isOpenset2 && (
        <div className='modal-overlay'>
          <div className="modal-unitech-animation">
            <div className="modal-content">
              <div className='modal-unt-dashboard'>
                <h3>Bạn chắc chắc muốn đăng sản phẩm này?</h3>
              </div>
              <div className='background-model'>
                <button onClick={closeModal2} className='background-model-button2'>Hủy</button>
                <button className='background-model-button1' onClick={handleUpload}>Đồng ý</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='title-unite-create-dashboard-container'>
        <input
          type="text"
          value={productName}
          onChange={handleProductNameChange}
          placeholder="Nhập tên sản phẩm bạn muốn hiển thị..."
        />
      </div>

      {/* step */}
      <div>
        <div className="timeline">
          <div className={`step ${activeTab >= 1 ? 'completed' : ''}`} onClick={() => handleTabClick(1)}>
            <span className="step-number">1</span>
            <span className="step-label">Thiết lập sản phẩm</span>
          </div>
          <div className={`step ${activeTab >= 2 ? 'completed' : ''}`} onClick={() => handleTabClick(2)}>
            <span className="step-number">2</span>
            <span className="step-label">Cài đặt cấu hình</span>
          </div>
          <div className={`step ${activeTab >= 3 ? 'completed' : ''}`} onClick={() => handleTabClick(3)}>
            <span className="step-number">3</span>
            <span className="step-label">Sắp hoàn tất</span>
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
          <div className="progress-marker" style={{ left: (activeTab - 1) * 50 + '%' }}></div>
        </div>
        <div className="content">
          {activeTab === 1 &&
            <div className='box-flex-step'>
              <div className='box-white-dashboard'>
                {activeTabc === 0 &&
                  <div className='box-ckey-noi-bat'>
                    <div className='box-ckey-noi-bat'>
                      <b>Nội dung sản phẩm</b>
                      <i style={{ fontSize: '13px' }}> (Thông tin giới thiệu về sản phẩm)</i>
                    </div>
                    <CKEditor
                      editor={Editor}
                      data={introduce}
                      config={editorConfiguration}
                      onChange={handleIntroduceChange}
                    />
                  </div>
                }
                {activeTabc === 1 &&
                  <div>
                    <div className='box-ckey-noi-bat'>
                      <b>Đặc điểm nổi bật</b>
                      <i style={{ fontSize: '13px' }}> (Các tính năng nổi bật của sản phẩm)</i>
                    </div>
                    <CKEditor
                      editor={Editor}
                      data={content}
                      config={editorConfiguration}
                      onChange={handleContentChange}
                    />
                  </div>
                }
                {activeTabc === 2 &&
                  <div>
                    <div className='box-ckey-noi-bat'>
                      <b>Thông tin sản phẩm</b> <i style={{ fontSize: '13px' }}> (bao gồm chính sách bảo hành và các thông tin khác)</i>
                    </div>
                    <CKEditor
                      editor={Editor}
                      data={proin}
                      config={editorConfiguration}
                      onChange={handleProinChange}
                    />
                  </div>
                }
                <div className='flex-content-dashboard'>
                  <div className={`tab-content-dashboard ${activeTabc === 0 ? 'active-content-dashboard' : ''}`} onClick={() => handleTabClickc(0)}>
                    Nội dung sản phẩm
                  </div>
                  <div className={`tab-content-dashboard ${activeTabc === 1 ? 'active-content-dashboard' : ''}`} onClick={() => handleTabClickc(1)}>
                    Đặc điểm nổi bật
                  </div>
                  <div className={`tab-content-dashboard ${activeTabc === 2 ? 'active-content-dashboard' : ''}`} onClick={() => handleTabClickc(2)}>
                    Thông tin sản phẩm
                  </div>
                </div>
              </div>
              <div className='box-white-dashboard1'>
                <b>Hình ảnh sản phẩm</b>
                <div className='margin-text-box-create'>
                  {selectedFiles.length > 0 ? (
                    <div>
                      {filePreviews.length > 0 && (
                        <div className='file-dashboard-select'>
                          {filePreviews.slice(0, 2).map((filePreview, index) => (
                            <div key={index} className='img-show-before'>
                              <div className="img-size-file-dashboard">
                                <img src={filePreview} alt={`File ${index}`} />
                                <GrFormClose onClick={() => handleFileRemove(index)} size={23} className='remove-file-unt' />
                              </div>
                            </div>
                          ))}
                          <div className="file-upload-unt">
                            <input type="file" id="upload" multiple onChange={handleFileSelect} />
                            <p>Bạn đã chọn {selectedFiles.length} hình ảnh</p>
                            <label htmlFor="upload">Click <b>vào đây</b> để thêm hình ảnh</label>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className='file-dashboard-select'>
                      <div className="file-upload-unt">
                        <input type="file" id="upload" multiple onChange={handleFileSelect} />
                        <AiOutlinePicture size={23} />
                        <label htmlFor="upload">Kéo thả hình ảnh của bạn tại đây hoặc <b>Click vào đây</b> để chọn hình ảnh</label>
                      </div>

                      <div className="file-upload-unt">
                        <input type="file" id="upload" multiple onChange={handleFileSelect} />
                        <AiOutlinePicture size={23} />
                        <label htmlFor="upload">Kéo thả hình ảnh của bạn tại đây hoặc <b>Click vào đây</b> để chọn hình ảnh</label>
                      </div>
                      <div className='file-column-box'>
                        <div className="file-upload-unt">
                          <input type="file" id="upload" multiple onChange={handleFileSelect} />
                          <AiOutlinePicture size={23} />
                          <label htmlFor="upload">Kéo thả hình ảnh của bạn tại đây hoặc <b>Click vào đây</b> để chọn hình ảnh</label>
                        </div>

                        <div className="file-upload-unt">
                          <input type="file" id="upload" multiple onChange={handleFileSelect} />
                          <AiOutlinePicture size={23} />
                          <label htmlFor="upload">Kéo thả hình ảnh của bạn tại đây hoặc <b>Click vào đây</b> để chọn hình ảnh</label>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className='boxwpox'>
                    <span>
                      <p><b>Note:</b> nhấn vào chọn hình giữ Ctrl + hình ảnh và bạn muốn chọn để chọn nhanh hình ảnh tải lên hoặc nhấp vào để chọn từng hình ảnh mà bạn muốn chọn tối đa 10 hình, hình đầu tiên chọn sẽ là hình ảnh đại điện của sản phẩm.</p>
                    </span>
                    <div className='rom-create'>
                      <div>
                        <b className='b'>
                          Chọn dung lượng (Nếu có)
                          <input type="checkbox" id="on-off-capacityswicth" className='on-off-checkbox' checked={romswicth} onChange={handlesetCapacityCheckboxChange} />
                          <label className="on-off-checkbox-lable" htmlFor="on-off-capacityswicth"></label>
                        </b>
                        <div className="rom-click">
                          {renderButtons()}
                        </div>
                        <div className="order-khac">
                          {showInput && (
                            <>
                              <input
                                type="text"
                                placeholder="Nhập dung lượng"
                                value={inputValue}
                                onChange={handleInputChange}
                              />
                              <button onClick={handleAddCapacityValue} className="grid-class-flex-btn">Lưu</button>
                            </>
                          )}
                        </div>
                      </div>
                      <div>
                        <b className='b'>
                          Tùy chỉnh sản phẩm có phân loại màu sắc
                          <input type="checkbox" id="on-off-color" className='on-off-checkbox' checked={colorswicth} onChange={handleCheckboxChange} />
                          <label className="on-off-checkbox-lable" htmlFor="on-off-color"></label>
                        </b>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          {colorswicth && (
                            <ButtonMain title={<div onClick={openModal} style={{ padding: "10px" }}>Chọn màu</div>} />
                          )}
                        </div>
                        <div className='minh-hoa-unt'>
                          <img src={colorsbtn} alt="hình ảnh chứa màu sắc" />
                          <i>Hình ảnh minh họa</i>
                        </div>
                        {isOpenset && (
                          <div className='modal-overlay'>
                            <div className="modal-unitech-animation">
                              <div className="modal-content">
                                <div className='modal-unt-dashboard'>
                                  <h2>Thiết lập tùy chọn màu sắc cho sản phẩm</h2>
                                  <div className='color-input-unitech-scroll'>
                                    {colorInputs.map((color, index) => (
                                      <div className='color-option-unit' key={index}>
                                        <div className='color-inut-flex'>
                                          <input
                                            type="color"
                                            placeholder="Nhập mã màu"
                                            value={color.color1}
                                            className='color-input-unt-dashboard'
                                            onChange={(e) => handleColorChange(index, 'color1', e.target.value)}
                                          />
                                          <input
                                            type="text"
                                            placeholder="Nhập tên màu sản phẩm"
                                            value={color.colors1}
                                            onChange={(e) => handleColorChange(index, 'colors1', e.target.value)}
                                            className='color-input-unt-dashboard2'
                                          />
                                        </div>
                                        <button onClick={handleAddColor} className='background-model-button2'>Thêm màu mới</button>
                                        <button onClick={handleRemoveColor} className='background-model-button2'>Xóa</button>
                                      </div>
                                    ))}
                                  </div>
                                  <p><b>Note:</b> chọn màu sắc sản phẩm sau đó điền loại màu vào trường.</p>
                                </div>
                                <div className='background-model'>
                                  <button onClick={closeModal} className='background-model-button2'>Hủy</button>
                                  <button onClick={closeModal} className='background-model-button1'>Lưu</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='btn-step'>
                  {activeTab !== 1 && <ButtonMain title={<div style={{ padding: '10px' }} onClick={handleBackStep}>Back</div>} />}
                  {activeTab !== 3 && <ButtonMain title={<div style={{ padding: '10px' }} onClick={handleNextStep}>Tiếp theo</div>} />}
                </div>
              </div>
            </div>
          }
          {activeTab === 2 && enableTabs[1] &&
            <div>
              <div className='box-white-dashboard'>
                <b>Cấu hình chi tiết</b>
                <div className='search-unite-create-dashboard-container'>
                  <input
                    type="text"
                    placeholder="Tìm kiếm nhanh cấu hình..."
                    value={keyword}
                    onChange={handleChangeKeyword}
                  />
                </div>
                <div className='grid-box-dashboard-unt'>
                  {listItems}

                  <div className='box-config-dashboard add-config' onClick={openModal1}>
                    <div className='online-dashboard-unt add-config-flex'>
                      <IoIosAdd size={40} className='icon-add-config' />
                      <p>Thêm cấu hình</p>
                    </div>
                  </div>
                  {isOpenset1 && (
                    <div className='modal-overlay'>
                      <div className="modal-unitech-animation">
                        <div className="modal-content">
                          <div className='modal-unt-dashboard'>
                            <h2>Thiết lập thông số kỹ thuật cho sản phẩm</h2>
                            <div className='color-input-unitech-scroll'>
                              {configurationData.map((item, index) => (
                                <div key={index} className='color-option-unit'>
                                  <div className='color-inut-flexs'>
                                    <div className='config-inut-flexs'>
                                      <b>Tên thông số</b>
                                      <input
                                        type="text"
                                        value={item.name}
                                        onChange={(e) => handleConfigurationChange(e, index, 'name')}
                                        placeholder='Nhập tên thông số...'
                                        className='color-input-unt-dashboard2 config-input-unt-dashboard2'
                                      />
                                    </div>
                                    <div className='config-inut-flexs'>
                                      <b>Thông số kỹ thuật</b>
                                      <input
                                        type="text"
                                        value={item.config}
                                        onChange={(e) => handleConfigurationChange(e, index, 'config')}
                                        placeholder='Nhập thông số...'
                                        className='color-input-unt-dashboard2 config-input-unt-dashboard2'
                                      />
                                    </div>
                                    <div className='btn-add-config'>
                                      <button type="button" onClick={addConfigurationInput} className='background-model-button2'>Thêm</button>
                                      <button type="button" onClick={() => removeConfigurationInput(index)} className='background-model-button2'>Xóa</button>
                                    </div>
                                  </div>
                                </div>
                              ))}

                            </div>
                            <p><b>Note:</b> điền thông tin cấu hình vào các trường.</p>
                          </div>
                          <div className='background-model'>
                            <button onClick={closeModal1} className='background-model-button2'>Hủy</button>
                            <button onClick={closeModal1} className='background-model-button1'>Lưu</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className='btn-step'>
                  {activeTab !== 1 && <ButtonMain title={<div style={{ padding: '10px' }} onClick={handleBackStep}>Back</div>} />}
                  {activeTab !== 3 && <ButtonMain title={<div style={{ padding: '10px' }} onClick={handleNextStep}>Tiếp theo</div>} />}
                </div>
              </div>
            </div>
          }
          {activeTab === 3 && enableTabs[2] &&
            <div>
              <div className='box-flex-step'>
                <div className='box-white-dashboard2'>
                  <div className='details-unt-dashboard'>
                    <b>Phân loại sản phẩm</b>
                    <div className='display-option-dashboard'>
                      <div className='text-create-s'>
                        <b>Chọn danh mục</b>
                        <select onChange={handleTypeChange}>
                          <option value="">Chọn danh mục</option>
                          <option value="Laptop, Máy tính">Laptop, Máy tính</option>
                          <option value="Điện thoại, Tablet">Điện thoại, Tablet</option>
                          <option value="Smart Home">Smart Home</option>
                          <option value="Phụ kiện">Phụ kiện</option>
                          <option value="Khác">Khác</option>
                        </select>
                      </div>

                      <div className='text-create-s'>
                        <b>Chọn thương hiệu</b>
                        <select onChange={handleBrandChange}>
                          <option value="">Chọn một thương hiệu</option>
                          {brandOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>

                      <div className='text-create-s'>
                        <b>Chọn Dòng sản phẩm</b>
                        <select onChange={handleCurrentChange} disabled={brand === ''}>
                          <option value="">Dòng sản phẩm</option>
                          {brand && currentOptions[brand]?.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='online-dashboard-unt'>
                    <b>Bật bình luận cho sản phẩm</b>
                    <input type="checkbox" id="on-off-chat" className='on-off-checkbox' checked={commentson} onChange={handlesetCommentsonCheckboxChange} />
                    <label className="on-off-checkbox-lable" htmlFor="on-off-chat"></label>
                  </div>
                  <p style={{fontSize: '11px'}}>(Sản phẩm sẽ hiển thị chức năng bình luận)</p>
                  <div className='online-dashboard-unt'>
                    <b>Đánh dấu sản phẩm sắp về hàng</b>
                    <input type="checkbox" id="on-off-check-product" className='on-off-checkbox' checked="null" />
                    <label className="on-off-checkbox-lable" htmlFor="on-off-check-product"></label>
                  </div>
                </div>
                <div className='box-white-dashboard3'>
                  <div className='box-column-dashboard-create'>
                    <b>Cài đặt giá</b>
                    <div className='flex-content-dashboard'>
                      <div className={`tab-content-dashboard ${activeTaba === 0 ? 'active-content-dashboard' : ''}`} onClick={() => handleTabClicka(0)}>
                        Giá khuyến mãi (Set giá bán)
                      </div>
                      <div className={`tab-content-dashboard ${activeTaba === 1 ? 'active-content-dashboard' : ''}`} onClick={() => handleTabClicka(1)}>
                        Giá Niêm yết
                      </div>
                    </div>
                    <div>
                      {activeTaba === 0 &&
                        <div className='text-create-s'>
                          <div className='text-to-flex'><b>Nhập giá sau khuyến mãi</b><p>(Giá sau giảm VNĐ)</p></div>
                          <input type="text" placeholder='Nhập giá tiền' value={formattedPricePlus}
                            onChange={(event) => {
                              handlePricePlusChange(event);
                              setFormattedPricePlusForFormData(event.target.value);
                            }} className='price-set-dashboard' />
                        </div>
                      }
                      {activeTaba === 1 &&
                        <div className='text-create-s'>
                          <div className='text-to-flex'><b>Nhập giá sản phẩm</b><p>(Giá Niêm yết VNĐ)</p></div>
                          <input type="text" placeholder='Nhập giá tiền'
                            value={formattedFlash}
                            onChange={(event) => {
                              handleFlashChange(event);
                              setFormattedFlashForFormData(event.target.value);
                            }}
                            className='price-set-dashboard' />
                        </div>
                      }
                    </div>

                    <div className='column-flex-price'>
                      <b>Thiết lập mã khuyến mãi</b>
                      <span>
                        <input type='text' placeholder='Nhập mã muốn tạo hoặc nhấn "Tạo" để tạo tự động...' />
                        <button className='background-model-button2'>Tạo</button>
                      </span>
                    </div>

                    <div className='online-dashboard-unt'>
                      <b>Sản phẩm có khuyến mãi quà tặng</b>
                      <input type="checkbox" id="on-off-gift" className='on-off-checkbox' checked={gift} onChange={handleGiftChange} />
                      <label className="on-off-checkbox-lable" htmlFor="on-off-gift"></label>
                    </div>
                    <p className='text-p-dashboard'>(Nhấp chọn vào checkbox nếu bạn muốn hiển thị)</p>
                    {gift && <input
                      type="text"
                      value={giftTitle}
                      onChange={handleGiftTitleChange}
                      placeholder='Nhập nội dung khuyến mãi hoặc tùy chọn vocher phía dưới' className='price-set-dashboard'
                    />}
                  </div>

                  <div className='vocher-flash-unt'>
                    <div class="vocher-unt">
                      <h3>Vocher</h3>
                      <input type="text" placeholder='Nhập giá trị Vocher...' />
                    </div>
                  </div>
                  <div className='box-column-dashboard-create'>
                    <div className='text-create-s'>
                      <b>Bạn có muốn bật nút giảm giá?</b>
                      <div className='flex-sale-dashboard'>
                        <select onChange={handleSaleChange}>
                          <option value="true">Bật</option>
                          <option value="false">Tắt</option>
                        </select>
                        <img src={saleUNT} alt="Hình ảnh minh họa" width="80" />
                        <p style={{ fontSize: '13px' }}>(Hình ảnh minh họa)</p>
                      </div>
                    </div>
                  </div>
                  <div className='btn-step'>
                    {activeTab !== 1 && <ButtonMain title={<div style={{ padding: '10px' }} onClick={handleBackStep}>Back</div>} />}
                    {activeTab !== 3 && <ButtonMain title={<div style={{ padding: '10px' }} onClick={handleNextStep}>Tiếp theo</div>} />}
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      {/* step */}
      <div>{successMessage}</div>
      <div>{errorMessage}</div>
      <div>{errorfile}</div>
      <div>{errproductName}</div>
      <div>{errContent}</div>
      <div>{errType}</div>
      <div>{errIntroduce}</div>
      <div>{errBrand}</div>
      <div>{errpricePlus}</div>
      <div>{errflash}</div>
      <div>{errorConfigurationDataMessage}</div>
      {errorGiftMessage && <div>{errorGiftMessage}</div>}
      <div>{errproin}</div>
    </div>
  );
};

export default Create;
