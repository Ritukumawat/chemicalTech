import React, { useState } from 'react';

const ManufacturerPage = () => {
  const [productData, setProductData] = useState({});
  const [newProduct, setNewProduct] = useState({
    code: '',
    name: '',
    usageDuration: '',
    origin: '',
    description: '',
    manufacturingDate: '',
  });

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProductData((prevData) => ({
      ...prevData,
      [newProduct.code]: {
        name: newProduct.name,
        usageDuration: parseFloat(newProduct.usageDuration),
        origin: newProduct.origin,
        description: newProduct.description,
        manufacturingDate: newProduct.manufacturingDate,
      },
    }));
    alert('Product added successfully!');
    setNewProduct({
      code: '',
      name: '',
      usageDuration: '',
      origin: '',
      description: '',
      manufacturingDate: '',
    });
  };

  return React.createElement(
    'div',
    { className: 'page-content' },
    React.createElement('h1', null, 'Manufacturer Page'),
    React.createElement(
      'form',
      { onSubmit: handleAddProduct },
      React.createElement('input', {
        type: 'text',
        name: 'code',
        placeholder: 'Product Code',
        value: newProduct.code,
        onChange: handleInputChange,
        required: true,
      }),
      React.createElement('input', {
        type: 'text',
        name: 'name',
        placeholder: 'Product Name',
        value: newProduct.name,
        onChange: handleInputChange,
        required: true,
      }),
      React.createElement('input', {
        type: 'number',
        name: 'usageDuration',
        placeholder: 'Usage Duration (years)',
        value: newProduct.usageDuration,
        onChange: handleInputChange,
        required: true,
      }),
      React.createElement('input', {
        type: 'text',
        name: 'origin',
        placeholder: 'Origin (e.g., Recycled, Virgin, Sustainable)',
        value: newProduct.origin,
        onChange: handleInputChange,
        required: true,
      }),
      React.createElement('textarea', {
        name: 'description',
        placeholder: 'Description',
        value: newProduct.description,
        onChange: handleInputChange,
        required: true,
      }),
      React.createElement('input', {
        type: 'date',
        name: 'manufacturingDate',
        value: newProduct.manufacturingDate,
        onChange: handleInputChange,
        required: true,
      }),
      React.createElement('button', { type: 'submit' }, 'Add Product')
    )
  );
};

export default ManufacturerPage;
