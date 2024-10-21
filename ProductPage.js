import React, { useState } from 'react';

const initialProductData = {
  'PL001': {
    name: 'Water Bottle',
    usageDuration: 2,
    origin: 'Recycled Plastic',
    description: 'A reusable water bottle made from recycled materials.',
    manufacturingDate: '2023-01-01',
  },
  'PL002': {
    name: 'Grocery Bag',
    usageDuration: 0.08,
    origin: 'Virgin Plastic',
    description: 'A disposable plastic bag made from non-recycled materials.',
    manufacturingDate: '2024-02-01',
  },
};

const ProductPage = () => {
  const [productData, setProductData] = useState(initialProductData);
  const [productCode, setProductCode] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleInputChange = (e) => setProductCode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = productData[productCode];
    if (product) {
      const expiryDate = new Date(product.manufacturingDate);
      expiryDate.setFullYear(expiryDate.getFullYear() + product.usageDuration);
      product.expiryDate = expiryDate.toDateString();
      setSelectedProduct(product);
    } else {
      alert('Invalid product code. Please try again.');
    }
  };

  const handleCloseModal = () => setSelectedProduct(null);

  return React.createElement(
    'div',
    { className: 'page-content' },
    React.createElement('h1', null, 'Automated Waste Collection System'),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Enter product code (e.g., PL001)',
        value: productCode,
        onChange: handleInputChange,
        required: true
      }),
      React.createElement('button', { type: 'submit' }, 'Check Product')
    ),
    selectedProduct &&
      React.createElement(
        'div',
        { className: 'modal' },
        React.createElement(
          'div',
          { className: 'modal-content' },
          React.createElement('h2', null, selectedProduct.name),
          React.createElement('p', null, `Usage Duration: ${selectedProduct.usageDuration} years`),
          React.createElement('p', null, `Origin: ${selectedProduct.origin}`),
          React.createElement('p', null, `Description: ${selectedProduct.description}`),
          React.createElement('p', null, `Manufacturing Date: ${selectedProduct.manufacturingDate}`),
          React.createElement('p', null, `Expiry Date: ${selectedProduct.expiryDate}`),
          React.createElement('button', { onClick: handleCloseModal }, 'Close')
        )
      )
  );
};

export default ProductPage;
