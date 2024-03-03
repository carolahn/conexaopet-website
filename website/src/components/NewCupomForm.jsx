import React, { useState, useEffect} from 'react';
import { mockPetData, mockAddressData, mockProtectorData } from './mockFormData';
import ImageUploader from './ImageUploader';
import MultiSelect from './MultiSelect';
import DateTimePicker from './DateTimePicker';
import AddressForm from './AddressForm';
import { formatarData } from '../utils/formatarData';

const NewCupomForm = () => {
  const [images, setImages] = useState([]);
  const [valor, setValor] = useState('');
  const [dateHour, setDateHour] = useState({});

  const handleImagesChange = (selectedImages) => {
    setImages(selectedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      images: images,
      valor: valor,
      validade: formatarData(dateHour),
    };

    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  };

  return (
    <div className='new-cupom-form'>
      <ImageUploader label='Selecione a imagem' onChange={handleImagesChange}/>

      <form onSubmit={handleSubmit}>
        <div className="row mb-1">
          <div className='input-cupom'>
            <label htmlFor="cupomValue" className="col-sm-2 col-form-label">Cupom</label>
          </div>
          <div className="col-sm">
            <div className="input-group">
              <input type="text" className="form-control" id="cupomValue" value={valor} onChange={(e) => setValor(e.target.value)} />
            </div>
          </div>
        </div>

        <div className='row mb-1 event-date'>
          <DateTimePicker setDateHour={setDateHour} showHour={false} dataLabel='Validade'/>
        </div>

        <button type="submit" className="btn w-100 btn-publish">Publicar</button>          

      </form>

      <style>
        {`
          .new-cupom-form {
            width: 80%;
            padding-top: 15px;
            margin: 0 auto;
            font-family: 'Helvetica Neue', Arial, sans-serif;
          }

          .col-sm {
            width: 76%;
          }

          .input-cupom {
            width: 24%;
            display: contents;
          }

          .btn-publish {
            width: 100%;
            background-color: var(--color-contrast) !important;
            border: 1px solid var(--color-contrast-2) !important;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.25rem;
            cursor: pointer;
            margin-top: 10px;
            transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
          }
          
          .btn-publish:hover {
            background-color: var(--color-contrast-2) !important;
          }
        `}
      </style>
    </div>
  );
};

export default NewCupomForm;