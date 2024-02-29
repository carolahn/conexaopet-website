import React, { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";
import './NewPetForm.css';
import { mockTypeData, mockGenderData, mockSizeData, mockBreedData, mockProtectorData, mockPersonalityData, mockGetAlong } from './mockFormData';
import MultiSelect from "./MultiSelect";

const NewPetForm = () => {
  const [weight, setWeight] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [breed, setBreed] = useState('');
  const [protector, setProtector] = useState('');
  const [personalities, setPersonalities] = useState([]);
  const [convivio, setConvivio] = useState([]);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  // Recuperar valores do localStorage ao iniciar
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));

    if (storedData) {
      setWeight(storedData.peso || '');
      setSelectedSize(storedData.porte || '');
      setName(storedData.nome || '');
      setType(storedData.tipo || '');
      setGender(storedData.genero || '');
      setYear(storedData.idadeAnos || '');
      setMonth(storedData.idadeMeses || '');
      setBreed(storedData.raca || '');
      setProtector(storedData.protetor || '');
      setPersonalities(storedData.personalidades || []);
      setConvivio(storedData.convivio || '');
      setDescription(storedData.descricao || '');
    }
  }, []);

  // Armazenar valores no localStorage sempre que houver uma alteração
  useEffect(() => {
    const formData = {
      peso: weight,
      porte: selectedSize,
      nome: name,
      tipo: type,
      genero: gender,
      idadeAnos: year,
      idadeMeses: month,
      raca: breed,
      protetor: protector,
      personalidades: personalities,
      convivio: convivio,
      descricao: description,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
  }, [weight, selectedSize, name, type, gender, year, month, breed, protector, personalities, convivio, description]);

  useEffect(() => {
    const calculateSizeFromWeight = () => {
      const weightValue = parseFloat(weight);

      if (weightValue <= 5) {
        setSelectedSize('1'); // Size 1: Miniatura
      } else if (weightValue <= 10) {
        setSelectedSize('2'); // Size 2: Pequeno
      } else if (weightValue <= 25) {
        setSelectedSize('3'); // Size 3: Médio
      } else if (weight > 25) {
        setSelectedSize('4'); // Size 4: Grande
      } else {
        setSelectedSize('');
      }
    };

    calculateSizeFromWeight();
  }, [weight]);

  const handlePersonalitiesChange = (selectedPersonalities) => {
    setPersonalities(selectedPersonalities);
  };

  const handleConvivioChange = (selectedConvivio) => {
    setConvivio(selectedConvivio);
  };

  const handleImagesChange = (selectedImages) => {
    setImages(selectedImages);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpando localStorage após o envio do formulário
    localStorage.removeItem('formData');

    const formData = {
      nome: name,
      tipo: type,
      genero: gender,
      idadeAnos: year,
      idadeMeses: month,
      peso: weight,
      porte: selectedSize,
      raca: breed,
      protetor: protector,
      personalidades: personalities,
      convivio: convivio,
      descricao: description,
    };

    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  };

  return (
    <div className='new-pet-form'>
      <ImageUploader label='Selecione as imagens' onChange={handleImagesChange}/>
      
      <form onSubmit={handleSubmit}>

        <div className="row mb-1">
          <label for="petName" class="col-sm-2 col-form-label">Nome</label>
          <div className="col-sm">
            <div class="input-group">
              <input type="text" class="form-control" id="petName" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="row mb-1">
          <label for="petType" class="col-sm-2 col-form-label">Tipo</label>
          <div class="col-sm-10">
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
          <label for="petGender" class="col-sm-2 col-form-label">Sexo</label>
          <div class="col-sm-10">
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
          <label for="petGender" class="col-sm-2 col-form-label">Idade</label>
          <div className="col-sm">
            <div class="input-group pet-idade">
              <input type="text" class="form-control" id="petYear" placeholder="anos" value={year} onChange={(e) => setYear(e.target.value)}/>
          
              <input type="text" class="form-control" id="petMonth" placeholder="meses" value={month} onChange={(e) => setMonth(e.target.value)}/>
            </div>
          </div>
        </div>

        <div className="row mb-1">
          <label for="petWeight" class="col-sm-2 col-form-label">Porte</label>
          <div className="col-sm">
            <div class="input-group pet-porte">
              <input type="text" class="form-control" id="petWeight" placeholder="kg" value={weight} onChange={(e) => setWeight(e.target.value)}/>

      
              <select className="form-select" id="petSize" name="petSize" aria-label="Selecione o porte do animal" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} disabled>
                <option key='' value=''>porte</option>
                {mockSizeData.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.porte}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row mb-1">
          <label for="petBreed" class="col-sm-2 col-form-label">Raça</label>
          <div class="col-sm-10">
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
          <label for="petProtector" class="col-sm-2 col-form-label">Protetor</label>
          <div class="col-sm-10">
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
          <MultiSelect options={mockPersonalityData} placeholder={'Personalidade'} attribute={'personalidade'} onChange={handlePersonalitiesChange}/>
        </div>

        <div className="row mb-1">
          <MultiSelect options={mockGetAlong} placeholder={'Convívio'} attribute={'convivio'} onChange={handleConvivioChange}/>
        </div>

        <div className="row mb-1">
          <div className="col-sm">
            <div class="input-group">
              <textarea type="text" class="form-control" id="petDescription" placeholder="Descrição" rows="3" style={{ resize: "none" }} value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
          </div>
        </div>

        <button type="submit" class="btn w-100 btn-publish">Publicar</button>
      </form>

    </div>
  );
};

export default NewPetForm;