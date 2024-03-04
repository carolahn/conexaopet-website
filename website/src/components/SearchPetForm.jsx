import React, { useEffect, useState } from "react";
import './NewPetForm.css';
import { mockTypeData, mockGenderData, mockAgeData, mockSizeData, mockBreedData, mockProtectorData, mockPersonalityData, mockGetAlong } from './mockFormData';
import MultiSelect from "./MultiSelect";

const SearchPetForm = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [breed, setBreed] = useState('');
  const [protector, setProtector] = useState('');
  const [personalities, setPersonalities] = useState([]);
  const [convivio, setConvivio] = useState([]);

  const handlePersonalitiesChange = (selectedPersonalities) => {
    setPersonalities(selectedPersonalities);
  };

  const handleConvivioChange = (selectedConvivio) => {
    setConvivio(selectedConvivio);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      nome: name,
      tipo: type,
      genero: gender,
      idade: age,
      porte: size,
      raca: breed,
      protetor: protector,
      personalidades: personalities,
      convivio: convivio,
    };

    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  };


  return (
    <div className='search-pet-form'>
      <form onSubmit={handleSubmit}>
        <div className="row mb-1">
          <label htmlFor="petType" className="col-sm-2 col-form-label">Tipo</label>
          <div className="col-sm-10">
            <select className="form-select" placeholder="Selecione" id="petType" name="petType" aria-label="Selecione o tipo de animal" value={type} onChange={(e) => setType(e.target.value)}>
              <option value=""></option>
              {mockTypeData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.tipo}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-1">
          <label htmlFor="petName" className="col-sm-2 col-form-label">Nome</label>
          <div className="col-sm">
            <div className="input-group">
              <input type="text" className="form-control" id="petName" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="row mb-1">
          <label htmlFor="petCity" className="col-sm-2 col-form-label">Cidade</label>
          <div className="col-sm">
            <div className="input-group">
              <input type="text" className="form-control" id="petCity" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="row mb-1">
          <label htmlFor="petGender" className="col-sm-2 col-form-label">Sexo</label>
          <div className="col-sm-10">
            <select className="form-select" id="petGender" name="petGender" aria-label="Selecione o sexo do animal" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value=""></option>
              {mockGenderData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.gender}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-1">
          <label htmlFor="petAge" className="col-sm-2 col-form-label">Idade</label>
          <div className="col-sm">
            <select className="form-select" id="petAge" name="petAge" aria-label="Selecione a idade do animal" value={age} onChange={(e) => setAge(e.target.value)}>
              <option value=""></option>
              {mockAgeData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.idade}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-1">
          <label htmlFor="petSize" className="col-sm-2 col-form-label">Porte</label>
          <div className="col-sm">
          <select className="form-select" id="petSize" name="petSize" aria-label="Selecione o porte do animal" value={size} onChange={(e) => setSize(e.target.value)}>
              <option value=""></option>
              {mockSizeData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.porte}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-1">
          <label htmlFor="petBreed" className="col-sm-2 col-form-label">Raça</label>
          <div className="col-sm-10">
            <select className="form-select" id="petBreed" name="petBreed" aria-label="Selecione a raça do animal" value={breed} onChange={(e) => setBreed(e.target.value)}>
              <option value=""></option>
              {mockBreedData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.raca}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-1">
          <label htmlFor="petProtector" className="col-sm-2 col-form-label">Protetor</label>
          <div className="col-sm-10">
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
          <MultiSelect options={mockPersonalityData} 
            placeholder={'Personalidade'} attribute={'personalidade'} 
            onChange={handlePersonalitiesChange} 
            initialValues={null}/>
        </div>

        <div className="row mb-1">
          <MultiSelect options={mockGetAlong} 
            placeholder={'Convívio'} attribute={'convivio'} 
            onChange={handleConvivioChange}
            initialValues={null}/>
        </div>

        <button type="submit" className="btn w-100 btn-publish">Buscar</button>
      </form>

      <style>
        {`
          .search-pet-form {
            width: 80%;
            padding-top: 15px;
            margin: 0 auto;
            font-family: 'Helvetica Neue', Arial, sans-serif;
          }

          #petSize {
            width: 100%;
          }
        `}
      </style>

    </div>
  );
};

export default SearchPetForm;