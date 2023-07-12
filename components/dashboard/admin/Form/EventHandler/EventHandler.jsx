import { useState } from 'react';

const useEventHandlers = () => {
  const [content, setContent] = useState('');
  const [memory, setMemory] = useState('');
  const [display, setDisplay] = useState('');
  const [productName, setProductName] = useState('');
  const [type, setType] = useState('');
  const [current, setCurrent] = useState('');
  const [brand, setBrand] = useState('');
  const [pricePlus, setPricePlus] = useState('');
  const [introduce, setiItroduce] = useState('')
  const [card, setCard] = useState('');
  const [proin, setProin] = useState('');
  const [flash, setFlash] = useState('');
  const [chip, setChip] = useState('');
  const [resolution, setEesolution] = useState('');
  const [typeram, setTyperam] = useState('');
  const [internalmemory, setInternalmemory] = useState('');
  const [harddrive, setHarddrive] = useState('');
  const [camera, setCamera] = useState('');
  const [pin, setPin] = useState('');
  const [gift, setGift] = useState(false);
  const [commentson, setCommentson] = useState(false);
  const [colorswicth, setColorswicth] = useState(false);
  const [romswicth, setRomswicth] = useState(false);
  const [system, setSystem] = useState('');
  const [inputValue, setInputValue] = useState("");
  const [sale, setSale] = useState(true);
  const [isMemoryChecked, setIsMemoryChecked] = useState(false);
  const [isInternalmemoryChecked, setIsInternalmemoryChecked] = useState(false);
  const [isHarddriveChecked, setIsHarddriveChecked] = useState(false);
  const [isCameraChecked, setIsCameraChecked] = useState(false);
  const [isPinChecked, setIsPinChecked] = useState(false);
  const [isSystemChecked, setIsSystemChecked] = useState(false);
  const [isDisplayChecked, setIsDisplayChecked] = useState(false);
  const [isChipChecked, setIsChipChecked] = useState(false);
  const [isEesolutionChecked, setIsResolutionChecked] = useState(false);
  const [isTyperamChecked, setIsTyperamChecked] = useState(false);
  const [isCardChecked, setIsCardChecked] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [enableTabs, setEnableTabs] = useState([true, false, false]);
  const [showInput, setShowInput] = useState(false);
  const [colorInputs, setColorInputs] = useState([{ color1: '', color2: '' }]);
  const [capacityInputs, setCapacityInputs] = useState([{ datarom1: '' }]);
  const [configurationData, setConfigurationData] = useState([{ name: '', config: '' }]);
  const [checked, setChecked] = useState(false);
  const [giftTitle, setGiftTitle] = useState('');
  const [isOpenset, setIsOpenset] = useState(false);
  const [isOpenset1, setIsOpenset1] = useState(false);
  const [isOpenset2, setIsOpenset2] = useState(false);
  const [activeTabc, setActiveTabc] = useState(0);
  const [activeTaba, setActiveTaba] = useState(0);

  const handleConfigurationChange = (e, index, field) => {
    const { value } = e.target;
    const newConfigurationData = [...configurationData];
    newConfigurationData[index][field] = value;
    setConfigurationData(newConfigurationData);
  };


  const addConfigurationInput = () => {
    setConfigurationData(prevData => [...prevData, { name: '', config: '' }]);
  };

  const removeConfigurationInput = (index) => {
    setConfigurationData(prevData => prevData.filter((_, i) => i !== index));
  };

  const handleTabClickc = (index) => {
    setActiveTabc(index);
  };

  const handleTabClicka = (index) => {
    setActiveTaba(index);
  };

  const openModal = () => {
    setIsOpenset(true);
  };

  const closeModal = () => {
    setIsOpenset(false);
  };

  const openModal1 = () => {
    setIsOpenset1(true);
  };

  const closeModal1 = () => {
    setIsOpenset1(false);
  };

  const openModal2 = () => {
    setIsOpenset2(true);
  };

  const closeModal2 = () => {
    setIsOpenset2(false);
  };


  const handleContentChange = (event, editor) => {
    setContent(editor.getData());
  };

  const handleIntroduceChange = (event, editor) => {
    setiItroduce(editor.getData());
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleCurrentChange = (event) => {
    setCurrent(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
    setCurrent('');
  };

  const handleFlashChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    setFlash(value);
  };

  const formattedFlash = Number(flash).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  const handlePricePlusChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); //Xóa tất cả các ký tự không phải số
    setPricePlus(value);
  };

  const formattedPricePlus = Number(pricePlus).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  const handleGiftChange = (e) => {
    setGift(e.target.checked);
    if (!e.target.checked) {
      setGiftTitle(''); // Nếu checkbox không được chọn, reset giá trị của ô input giftTitle
    }
  };

  const handlesetCommentsonCheckboxChange = (event) => {
    const { checked } = event.target;
    setCommentson(checked);
  };

  const handleGiftTitleChange = (e) => {
    setGiftTitle(e.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleMemoryChange = (event) => {
    setMemory(event.target.value);
  };

  const handleCardChange = (event) => {
    setCard(event.target.value);
  };

  const handleSaleChange = (event) => {
    setSale(event.target.value === 'true');
  };

  const handleDisplayChange = (event) => {
    setDisplay(event.target.value);
  };

  const handleChipChange = (event) => {
    setChip(event.target.value);
  };

  const handleResolutionChange = (event) => {
    setEesolution(event.target.value);
  };

  const handleTyperamChange = (event) => {
    setTyperam(event.target.value);
  };

  const handleInternalmemoryChange = (event) => {
    setInternalmemory(event.target.value);
  };

  const handleHarddriveChange = (event) => {
    setHarddrive(event.target.value);
  };

  const handleCameraChange = (event) => {
    setCamera(event.target.value);
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleSystemChange = (event) => {
    setSystem(event.target.value);
  };

  const handleProinChange = (event, editor) => {
    setProin(editor.getData());
  };

  //checkbox
  const handleInternalmemoryCheckboxChange = (e) => {
    setIsInternalmemoryChecked(e.target.checked);
  };

  const handleHarddriveCheckboxChange = (e) => {
    setIsHarddriveChecked(e.target.checked);
  };

  const handleCameraCheckboxChange = (e) => {
    setIsCameraChecked(e.target.checked);
  };

  const handlePinCheckboxChange = (e) => {
    setIsPinChecked(e.target.checked);
  };

  const handleSystemCheckboxChange = (e) => {
    setIsSystemChecked(e.target.checked);
  };

  const handleChipCheckboxChange = (e) => {
    setIsChipChecked(e.target.checked);
  };

  const handleResolutionCheckboxChange = (e) => {
    setIsResolutionChecked(e.target.checked);
  };

  const handleTyperamCheckboxChange = (e) => {
    setIsTyperamChecked(e.target.checked);
  };

  const handleDisplayCheckboxChange = (e) => {
    setIsDisplayChecked(e.target.checked);
  };

  const handleMemoryCheckboxChange = (e) => {
    setIsMemoryChecked(e.target.checked);
  };

  const handleCardCheckboxChange = (e) => {
    setIsCardChecked(e.target.checked);
  };

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setColorswicth(checked);
  };

  const handlesetCapacityCheckboxChange = (event) => {
    const { checked } = event.target;
    setRomswicth(checked);
  };

  // Thêm trường màu mới
  const handleAddColor = () => {
    setColorInputs([...colorInputs, { color1: '', color2: '' }]);
  };

  // Cập nhật giá trị màu
  const handleColorChange = (index, field, value) => {
    const updatedColors = [...colorInputs];
    updatedColors[index][field] = value;
    setColorInputs(updatedColors);
  };

  // Xóa trường màu
  const handleRemoveColor = (index) => {
    const updatedColors = [...colorInputs];
    updatedColors.splice(index, 1);
    setColorInputs(updatedColors);
  };

  // Thêm Dung lượng
  const handleAddCapacity = () => {
    setShowInput(true);
  };

  const handleAddCapacityValue = () => {
    if (inputValue.trim()) {
      const updatedCapacity = [...capacityInputs, { datarom1: inputValue }];
      setCapacityInputs(updatedCapacity);
    }
    setInputValue("");
    setShowInput(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleCapacityChange = (index, field, value) => {
    const updatedCapacity = [...capacityInputs];
    const selectedIndex = updatedCapacity.findIndex((input) => input[field] === value);

    if (selectedIndex === -1) {
      updatedCapacity.push({ [field]: value });
    } else {
      updatedCapacity.splice(selectedIndex, 1);
    }

    setCapacityInputs(updatedCapacity);
  };


  const handleTabClick = (tabIndex) => {
    if (enableTabs[tabIndex - 1]) {
      setActiveTab(tabIndex);
    }
  };

  const handleNextStep = () => {
    const nextTabIndex = activeTab + 1;

    if (nextTabIndex === 2) {
      setEnableTabs((prevEnableTabs) => {
        const updatedEnableTabs = [...prevEnableTabs];
        updatedEnableTabs[1] = true;
        return updatedEnableTabs;
      });
    }

    if (nextTabIndex === 3) {
      setEnableTabs((prevEnableTabs) => {
        const updatedEnableTabs = [...prevEnableTabs];
        updatedEnableTabs[2] = true;
        return updatedEnableTabs;
      });
    }

    if (nextTabIndex > 3) {
      setActiveTab(1);
    } else {
      setActiveTab(nextTabIndex);
    }
  };

  const handleBackStep = () => {
    const prevTabIndex = activeTab - 1;

    if (prevTabIndex === 2) {
      setEnableTabs((prevEnableTabs) => {
        const updatedEnableTabs = [...prevEnableTabs];
        updatedEnableTabs[2] = false;
        return updatedEnableTabs;
      });
    }

    if (prevTabIndex === 1) {
      setEnableTabs((prevEnableTabs) => {
        const updatedEnableTabs = [...prevEnableTabs];
        updatedEnableTabs[1] = false;
        return updatedEnableTabs;
      });
    }

    setActiveTab(prevTabIndex);
  };

  return {
    content,
    memory,
    card,
    sale,
    productName,
    introduce,
    isMemoryChecked,
    isCardChecked,
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
    showInput,
    activeTabc,
    configurationData,
    checked,
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
    closeModal1,
    openModal1,
    setChecked,
    handleRemoveColor,
    addConfigurationInput,
    removeConfigurationInput,
    handleConfigurationChange,
    handleTabClickc,
    handleAddCapacity,
    handleInputChange,
    handleAddCapacityValue,
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
    handleBackStep,
    handleNextStep,
    handleTabClick,
    handleMemoryCheckboxChange,
    handleCardCheckboxChange,
    handleContentChange,
    handleProductNameChange,
    handleMemoryChange,
    handleCardChange,
    handleSaleChange,
    handleIntroduceChange,
    handleTypeChange,
  };
};

export default useEventHandlers;
