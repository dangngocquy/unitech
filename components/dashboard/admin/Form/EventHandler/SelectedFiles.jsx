import { useState } from 'react';

const useSelectedFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...files]);

    const filePreviewsList = [];
    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        filePreviewsList[index] = e.target.result;
        setFilePreviews([...filePreviews, ...filePreviewsList]);
      };
      reader.readAsDataURL(file);
    });
  };


  const handleFileRemove = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);

    const newFilePreviews = [...filePreviews];
    newFilePreviews.splice(index, 1);
    setFilePreviews(newFilePreviews);

  };


  return { selectedFiles, filePreviews, handleFileSelect, handleFileRemove };
};

export default useSelectedFiles;
