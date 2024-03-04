import React, { useState } from "react";
import './NewPetForm.css';
import { mockProtectorData, mockAddressData } from './mockFormData';
import DateTimePicker from "./DateTimePicker";


const SearchEventForm = () => {
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [protector, setProtector] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      data: date,
      local: place,
      protetor: protector,
      cidade: city,
    };

    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  };

  return (
    <div className='search-event-form'>
      <form onSubmit={handleSubmit}>
        <div className='row mb-1 event-date'>
          <DateTimePicker setDateHour={setDate} showHour={false} dataLabel='Data' />
        </div>

        <div className="row mb-1">
          <label htmlFor="petCity" className="col-sm-2 col-form-label">Cidade</label>
          <div className="col-sm-10" style={{ width: '76%'}}>
            <div className="input-group">
              <input type="text" className="form-control" id="petCity" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="row mb-1 new-event-protector">
          <label for="eventLocal" className="col-sm-2 col-form-label">Local</label>
          <div className="col-sm-10" style={{ display: 'contents' }}>
            <select className="form-select" id="eventLocal" name="eventLocal" aria-label="Selecione o local" value={place} onChange={(e) => setPlace(e.target.value)}>
              <option value=""></option>
              {mockAddressData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nome}
                </option>
              ))}
            </select>
          </div>
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

        <button type="submit" className="btn w-100 btn-publish">Buscar</button>          
      </form>

      <style>
        {`
          .search-event-form {
            width: 80%;
            padding-top: 15px;
            margin: 0 auto;
            font-family: 'Helvetica Neue', Arial, sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default SearchEventForm;