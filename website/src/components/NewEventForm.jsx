import React, { useState, useEffect} from 'react';
import { mockPetData, mockAddressData, mockProtectorData } from './mockFormData';
import ImageUploader from './ImageUploader';
import MultiSelect from './MultiSelect';
import DateTimePicker from './DateTimePicker';
import AddressForm from './AddressForm';
import './NewEventForm.css';

const NewEventForm = ({initialValues}) => {
  const [images, setImages] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [dateHour, setDateHour] = useState({});
  const [address, setAddress] = useState({});
  const [protector, setProtector] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialValues) {
      setImages(initialValues.images || []);
      setAnimals(initialValues.animals || []);
      setDateHour(initialValues.dateHour || {});
      setAddress(initialValues.address || {});
      setProtector(initialValues.protector || '');
      setDescription(initialValues.description || '');
    }
  }, [initialValues]);

  // Recuperar valores do localStorage ao iniciar
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('eventFormData'));

    if (storedData) {
      setImages(storedData.images || []);
      setAnimals(storedData.animals || []);
      setDateHour(storedData.dateHour || {});
      setAddress(storedData.address || {});
      setProtector(storedData.protector || '');
      setDescription(storedData.description || '');
    }
  }, []);

  // Armazenar valores no localStorage sempre que houver uma alteração
  useEffect(() => {
    const formData = {
      images: images,
      animals: animals,
      dateHour: dateHour,
      address: address,
      protector: protector,
      description: description,
    };

    localStorage.setItem('eventFormData', JSON.stringify(formData));
  }, [images, animals, dateHour, address, protector, description]);

  const handleImagesChange = (selectedImages) => {
    setImages(selectedImages);
  }

  const handleAnimalsChange = (selectedAnimals) => {
    setAnimals(selectedAnimals);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpando localStorage após o envio do formulário
    localStorage.removeItem('eventFormData');

    const formData = {
      images: images,
      animals: animals,
      dateHour: dateHour,
      address: address,
      protector: protector,
      description: description,
    };

    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  };

  return (
    <div className='new-event-form'>
      <ImageUploader label='Selecione as imagens' onChange={handleImagesChange}/>
      
      <form onSubmit={handleSubmit}>
        <div className='row mb-1'>
          <MultiSelect options={mockPetData} placeholder={'Animais'} attribute={'nome'} onChange={handleAnimalsChange}/>
        </div>

        <div className='row mb-1 event-date'>
          <DateTimePicker setDateHour={setDateHour} />
        </div>

        <div className='row mb-1 event-place'>
          <AddressForm addressList={mockAddressData} setAddress={setAddress}/>
        </div>

        <div className="row mb-1 new-event-protector">
          <label for="petProtector" className="col-sm-2 col-form-label">Protetor</label>
          <div className="col-sm-10" style={{ display: 'contents' }}>
            <select className="form-select" id="petProtector" name="petProtector" aria-label="Selecione o protetor" value={protector} onChange={(e) => setProtector(e.target.value)}>
              <option value=""></option>
              {mockProtectorData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nickname}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-sm">
            <div className="input-group">
              <textarea type="text" className="form-control" id="petDescription" placeholder="Descrição" rows="3" style={{ resize: "none" }} value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
          </div>
        </div>

        <button type="submit" className="btn w-100 btn-publish">Publicar</button>          
      </form>
    </div>
  );
};

export default NewEventForm;