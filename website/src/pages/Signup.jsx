import React, { useState } from 'react';
import SimpleHeader from '../components/SimpleHeader';
import ImageUploader from '../components/ImageUploader';
import { mockUserTypeData } from '../components/mockFormData';

const Signup = () => {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [password, setPassword] = useState('');
  const [images, setImages] = useState([]);
  const [pix, setPix] = useState([]);
  const [site, setSite] = useState([]);

  const handleImagesChange = (selectedImages) => {
    setImages(selectedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      images: images,
      tipo_usuario: userType,
      nome: name,
      nickname: nickname,
      celular: phone,
      cidade: city,
      uf: uf,
      senha: password,
      pix: pix,
      site: site,
    };

    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  
  };


  return (
    <div className='sign-up-container'>
        <SimpleHeader title='Cadastrar' />
      <div className='signup-body'>
        { (userType === '2' || userType === '3') && (
          <ImageUploader label='Selecione o avatar' onChange={handleImagesChange}/>
        )}
        <form onSubmit={handleSubmit}>

          
          <div className="row mb-1">
            <label htmlFor="petType" className="col-sm-2 col-form-label">Tipo</label>
            <div className="col-sm-10">
              <select className="form-select" placeholder="Selecione" id="petType" name="petType" aria-label="Selecione o tipo de animal" value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option value=""></option>
                {mockUserTypeData.map((item) => (
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
            <label htmlFor="petName" className="col-sm-2 col-form-label">Nickname</label>
            <div className="col-sm">
              <div className="input-group">
                <input type="text" className="form-control" id="petName" value={nickname} onChange={(e) => setNickname(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="row mb-1">
            <label htmlFor="petName" className="col-sm-2 col-form-label">Celular</label>
            <div className="col-sm">
              <div className="input-group">
                <input type="text" className="form-control" id="petName" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
          </div>

          <div>
            <div className="row-cidade mb-1">
              <div className='label-cidade'>
                <label htmlFor="petName" className="col-sm-2 col-form-label">Cidade</label>
              </div>
              <div className='input-cidade-container'>
                <div className="input-cidade">
                    <input type="text" className="form-control" id="petName" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className='label-uf'>
                  <label htmlFor="petName" className="col-sm-2 col-form-label el-label-uf">UF</label>
                </div>
                <div className="input-uf">
                    <input type="text" className="form-control" id="petName" value={uf} onChange={(e) => setUf(e.target.value)} />
                </div>

              </div>
            </div>
          </div>

          <div className="row mb-1">
            <label htmlFor="petName" className="col-sm-2 col-form-label">Senha</label>
            <div className="col-sm">
              <div className="input-group">
                <input type="text" className="form-control" id="petName" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
          </div>

          { (userType === '2' || userType === '3') && (
            <div className="row mb-1">
              <label htmlFor="petName" className="col-sm-2 col-form-label">Chave pix</label>
              <div className="col-sm">
                <div className="input-group">
                  <input type="text" className="form-control" id="petName" value={pix} onChange={(e) => setPix(e.target.value)} />
                </div>
              </div>
            </div>
          )}

          { userType === '3' && (
            <div className="row mb-1">
              <label htmlFor="petName" className="col-sm-2 col-form-label">Site</label>
              <div className="col-sm">
                <div className="input-group">
                  <input type="text" className="form-control" id="petName" value={site} onChange={(e) => setSite(e.target.value)} />
                </div>
              </div>
            </div>
          )}

          <button type="submit" className="btn w-100 btn-publish">Cadastrar</button>
        </form>


      </div>

      <style>
        {`
          .signup-container {
            width: 100%;
            
          }
          
          .signup-body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            max-width: 500px;
            margin: 70px auto 0 auto;
            height: 100vh;
            padding: 0 10px;
          }

          .row-cidade {
            display: flex;
            width: 100%;
          }

          .input-cidade-container {
            display: flex;
            width: 95%;
          }
          .label-uf {
            display: flex;
            align-items: center;
            justify-content: end;
            width: 24%;
            padding-right: 5px;
          }

          .input-cidade {
            width: 100%
          }

          .input-uf {
            width: 30%
          }

          .el-label-uf {
            width: auto;
          }

          label {
            width: 24%;
          }

          .label-cidade {
            display: flex;
            align-items: center;
            width: 24%;
          }
          
          @media (max-width: 900px) {
            .signup-container {
              margin-top: 50px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Signup;
