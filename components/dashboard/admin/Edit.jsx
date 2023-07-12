import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const { id } = useParams();
  const [image, setImage] = useState({});
  const [productName, setProductName] = useState('');
  const [img, setImg] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImage();
  }, [id]);

  const fetchImage = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/uploads/${id}`);
      setImage(response.data);
      setProductName(response.data.productName);
      setImg(response.data.img);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUpdate = async () => {
    try {
      if (selectedImage) {
        const formData = new FormData();
        formData.append('images', selectedImage);

        const response = await axios.post('http://localhost:5000/uploads', formData);

        await axios.put(`http://localhost:5000/uploads/${id}`, {
          img: response.data.img, // Thay đổi giá trị của state img thành đường dẫn của hình ảnh sau khi upload
          productName,
        });

        setImg(response.data.img);

        // Thực hiện các xử lý cần thiết sau khi cập nhật thành công
      } else {
        await axios.put(`http://localhost:5000/uploads/${id}`, {
          img,
          productName,
        });

        // Thực hiện các xử lý cần thiết sau khi cập nhật thành công
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='unitech-container-main-dashboard'>
      <title>Unitech - Chỉnh sửa nội dung</title>
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <img src={selectedImage ? URL.createObjectURL(selectedImage) : image.img} alt="Product" />
      <button onClick={handleUpdate}>Cập nhật</button>
    </div>
  );
}

export default Edit;