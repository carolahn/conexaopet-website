import React, { useState, useRef, useEffect } from 'react';

const MultiSelect = ({ options, placeholder, attribute, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const dropdownRef = useRef(null);

  const handleOptionChange = (id) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(id)) {
        return prevSelectedOptions.filter((optionId) => optionId !== id);
      } else {
        return [...prevSelectedOptions, id];
      }
    });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.tagName !== 'INPUT'
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Chama a função onChange passando os valores selecionados
    onChange(selectedOptions);
  }, [selectedOptions, onChange]);

  return (
    <div style={containerStyles}>
      <input
      className="form-control"
        type="text"
        placeholder={selectedOptions.length > 0 ? '' : placeholder}
        value={selectedOptions
          .map((id) => options.find((item) => item.id === id)?.[attribute])
          .filter(Boolean)
          .join(', ')}
        onChange={handleInputChange}
        onClick={toggleDropdown}
        style={inputStyles}
      />
      {isOpen && (
        <div
          ref={dropdownRef}
          style={{
            position: 'absolute',
            zIndex: 1,
            backgroundColor: '#ffffff',
            border: '1px solid #ccc',
            width: '100%',
            maxHeight: '120px',
            overflowY: 'auto',
            marginTop: '5px',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
          }}
        >
          {options.map((option) => (
            <div key={option.id} style={optionContainerStyles}>
              <input
                type="checkbox"
                id={option.id}
                value={option.id}
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleOptionChange(option.id)}
                style={checkboxStyles}
              />
              <label htmlFor={option.id} style={labelStyles}>
                {option[attribute]}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const containerStyles = {
  position: 'relative',
  display: 'inline-block',
  width: 'calc(100% - 1.3em)',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
};

const optionContainerStyles = {
  padding: '5px',
  display: 'flex',
  alignItems: 'center',
  color: '#000000',
  fontSize: '1rem',
};

const checkboxStyles = {
  marginRight: '5px',
};

const labelStyles = {
  margin: '0',
  color: '#000000',
};

export default MultiSelect;
