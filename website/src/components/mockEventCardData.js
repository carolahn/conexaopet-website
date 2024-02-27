const mockEventCardData = [
  {
    id: 1,
    protetor: {
      imagem: 'https://via.placeholder.com/200',
      nickname: 'protetorpaulo',
      celular: '41999991234',
    },
    imagens: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
    ],
    animais: [
      {
        id: 1,
        nome: 'Fido',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Cachorro',
        sexo: 'macho',
        idade: '2 anos',
        porte: 'Médio',
        raca: 'Vira-lata',
        protetor: 'Protetor XYZ',
        convivio: 'Convive bem com outros animais',
        personalidade: 'Brincalhão e carinhoso',
        descricao: 'Fido é um cachorro adorável em busca de um lar. Ele adora brincar e está pronto para ser o seu melhor amigo!',
      },
      {
        id: 2,
        nome: 'Luna',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Gato',
        sexo: 'fêmea',
        idade: '1 ano',
        porte: 'Pequeno',
        raca: 'Siamês',
        protetor: 'Protetor ABC',
        convivio: 'Prefere ser o único animal da casa',
        personalidade: 'Calma e independente',
        descricao: 'Luna é uma gatinha adorável que gosta de tranquilidade. Ela procura um lar acolhedor onde possa ser a rainha do pedaço!',
      }
    ],
    dataHoraInicio: '2024-02-26 13:00',
    dataHoraFim: '2024-02-26 18:00',
    local: {
      nome: 'Cobasi Linha Verde',
      rua: 'Av. Senador Salgado Filho',
      numero: 580,
      bairro: 'Prado Velho',
      cidade: 'Curitiba',
      uf: 'PR'
    },
    descricao: 'Neste final de semana acontecerá a feira de adoção na Cobasi Linha Verde. Muitos filhotes e jovens adultos aguardando pela adoção. Venha se apaixonar.',
  },

  {
    id: 2,
    protetor: {
      imagem: 'https://via.placeholder.com/200',
      nickname: 'protetorjoana',
      celular: '41999992345',
    },
    imagens: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
    ],
    animais: [
      {
        id: 3,
        nome: 'Bolt',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Cachorro',
        sexo: 'macho',
        idade: '3 anos',
        porte: 'Grande',
        raca: 'Labrador Retriever',
        protetor: 'Protetora ZZZ',
        convivio: 'Energético e amigável',
        personalidade: 'Adora brincar e correr',
        descricao: 'Bolt é um labrador cheio de energia em busca de um lar ativo. Ele adora brincar de buscar a bolinha e está pronto para ser seu parceiro de aventuras!',
      },
      {
        id: 4,
        nome: 'Mia',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Gato',
        sexo: 'fêmea',
        idade: '2 anos',
        porte: 'Médio',
        raca: 'Persa',
        protetor: 'Protetor DEF',
        convivio: 'Adora companhia de outros gatos',
        personalidade: 'Elegante e brincalhona',
        descricao: 'Mia é uma gatinha persa muito elegante. Ela procura um lar onde possa receber carinho e brincar com seus companheiros felinos!',
      }
    ],
    dataHoraInicio: '2024-03-05 14:00',
    dataHoraFim: '2024-03-05 18:00',
    local: {
      nome: 'Pet Shop Patinhas Felizes',
      rua: 'Rua das Alegrias',
      numero: 123,
      bairro: 'Vila Feliz',
      cidade: 'Curitiba',
      uf: 'PR'
    },
    descricao: 'Adoção responsável! Venha conhecer os animais que estão em busca de um novo lar no Pet Shop Patinhas Felizes.',
  },
	{
    id: 3,
    protetor: {
      imagem: 'https://via.placeholder.com/200',
      nickname: 'protetorpaulo',
      celular: '41999991234',
    },
    imagens: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
    ],
    animais: [
      {
        id: 5,
        nome: 'Fido',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Cachorro',
        sexo: 'macho',
        idade: '2 anos',
        porte: 'Médio',
        raca: 'Vira-lata',
        protetor: 'Protetor XYZ',
        convivio: 'Convive bem com outros animais',
        personalidade: 'Brincalhão e carinhoso',
        descricao: 'Fido é um cachorro adorável em busca de um lar. Ele adora brincar e está pronto para ser o seu melhor amigo!',
      },
      {
        id: 6,
        nome: 'Luna',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Gato',
        sexo: 'fêmea',
        idade: '1 ano',
        porte: 'Pequeno',
        raca: 'Siamês',
        protetor: 'Protetor ABC',
        convivio: 'Prefere ser o único animal da casa',
        personalidade: 'Calma e independente',
        descricao: 'Luna é uma gatinha adorável que gosta de tranquilidade. Ela procura um lar acolhedor onde possa ser a rainha do pedaço!',
      }
    ],
    dataHoraInicio: '2024-02-26 13:00',
    dataHoraFim: '2024-02-26 18:00',
    local: {
      nome: 'Cobasi Linha Verde',
      rua: 'Av. Senador Salgado Filho',
      numero: 580,
      bairro: 'Prado Velho',
      cidade: 'Curitiba',
      uf: 'PR'
    },
    descricao: 'Neste final de semana acontecerá a feira de adoção na Cobasi Linha Verde. Muitos filhotes e jovens adultos aguardando pela adoção. Venha se apaixonar.',
  },

  {
    id: 4,
    protetor: {
      imagem: 'https://via.placeholder.com/200',
      nickname: 'protetorjoana',
      celular: '41999992345',
    },
    imagens: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
    ],
    animais: [
      {
        id: 7,
        nome: 'Bolt',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Cachorro',
        sexo: 'macho',
        idade: '3 anos',
        porte: 'Grande',
        raca: 'Labrador Retriever',
        protetor: 'Protetora ZZZ',
        convivio: 'Energético e amigável',
        personalidade: 'Adora brincar e correr',
        descricao: 'Bolt é um labrador cheio de energia em busca de um lar ativo. Ele adora brincar de buscar a bolinha e está pronto para ser seu parceiro de aventuras!',
      },
      {
        id: 8,
        nome: 'Mia',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Gato',
        sexo: 'fêmea',
        idade: '2 anos',
        porte: 'Médio',
        raca: 'Persa',
        protetor: 'Protetor DEF',
        convivio: 'Adora companhia de outros gatos',
        personalidade: 'Elegante e brincalhona',
        descricao: 'Mia é uma gatinha persa muito elegante. Ela procura um lar onde possa receber carinho e brincar com seus companheiros felinos!',
      }
    ],
    dataHoraInicio: '2024-03-05 14:00',
    dataHoraFim: '2024-03-05 18:00',
    local: {
      nome: 'Pet Shop Patinhas Felizes',
      rua: 'Rua das Alegrias',
      numero: 123,
      bairro: 'Vila Feliz',
      cidade: 'Curitiba',
      uf: 'PR'
    },
    descricao: 'Adoção responsável! Venha conhecer os animais que estão em busca de um novo lar no Pet Shop Patinhas Felizes.',
  },
	{
    id: 5,
    protetor: {
      imagem: 'https://via.placeholder.com/200',
      nickname: 'protetorpaulo',
      celular: '41999991234',
    },
    imagens: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
    ],
    animais: [
      {
        id: 9,
        nome: 'Fido',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Cachorro',
        sexo: 'macho',
        idade: '2 anos',
        porte: 'Médio',
        raca: 'Vira-lata',
        protetor: 'Protetor XYZ',
        convivio: 'Convive bem com outros animais',
        personalidade: 'Brincalhão e carinhoso',
        descricao: 'Fido é um cachorro adorável em busca de um lar. Ele adora brincar e está pronto para ser o seu melhor amigo!',
      },
      {
        id: 10,
        nome: 'Luna',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Gato',
        sexo: 'fêmea',
        idade: '1 ano',
        porte: 'Pequeno',
        raca: 'Siamês',
        protetor: 'Protetor ABC',
        convivio: 'Prefere ser o único animal da casa',
        personalidade: 'Calma e independente',
        descricao: 'Luna é uma gatinha adorável que gosta de tranquilidade. Ela procura um lar acolhedor onde possa ser a rainha do pedaço!',
      }
    ],
    dataHoraInicio: '2024-02-26 13:00',
    dataHoraFim: '2024-02-26 18:00',
    local: {
      nome: 'Cobasi Linha Verde',
      rua: 'Av. Senador Salgado Filho',
      numero: 580,
      bairro: 'Prado Velho',
      cidade: 'Curitiba',
      uf: 'PR'
    },
    descricao: 'Neste final de semana acontecerá a feira de adoção na Cobasi Linha Verde. Muitos filhotes e jovens adultos aguardando pela adoção. Venha se apaixonar.',
  },

  {
    id: 6,
    protetor: {
      imagem: 'https://via.placeholder.com/200',
      nickname: 'protetorjoana',
      celular: '41999992345',
    },
    imagens: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
    ],
    animais: [
      {
        id: 11,
        nome: 'Bolt',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Cachorro',
        sexo: 'macho',
        idade: '3 anos',
        porte: 'Grande',
        raca: 'Labrador Retriever',
        protetor: 'Protetora ZZZ',
        convivio: 'Energético e amigável',
        personalidade: 'Adora brincar e correr',
        descricao: 'Bolt é um labrador cheio de energia em busca de um lar ativo. Ele adora brincar de buscar a bolinha e está pronto para ser seu parceiro de aventuras!',
      },
      {
        id: 12,
        nome: 'Mia',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Gato',
        sexo: 'fêmea',
        idade: '2 anos',
        porte: 'Médio',
        raca: 'Persa',
        protetor: 'Protetor DEF',
        convivio: 'Adora companhia de outros gatos',
        personalidade: 'Elegante e brincalhona',
        descricao: 'Mia é uma gatinha persa muito elegante. Ela procura um lar onde possa receber carinho e brincar com seus companheiros felinos!',
      }
    ],
    dataHoraInicio: '2024-03-05 14:00',
    dataHoraFim: '2024-03-05 18:00',
    local: {
      nome: 'Pet Shop Patinhas Felizes',
      rua: 'Rua das Alegrias',
      numero: 123,
      bairro: 'Vila Feliz',
      cidade: 'Curitiba',
      uf: 'PR'
    },
    descricao: 'Adoção responsável! Venha conhecer os animais que estão em busca de um novo lar no Pet Shop Patinhas Felizes.',
  },
	{
    id: 7,
    protetor: {
      imagem: 'https://via.placeholder.com/200',
      nickname: 'protetorpaulo',
      celular: '41999991234',
    },
    imagens: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
    ],
    animais: [
      {
        id: 13,
        nome: 'Fido',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Cachorro',
        sexo: 'macho',
        idade: '2 anos',
        porte: 'Médio',
        raca: 'Vira-lata',
        protetor: 'Protetor XYZ',
        convivio: 'Convive bem com outros animais',
        personalidade: 'Brincalhão e carinhoso',
        descricao: 'Fido é um cachorro adorável em busca de um lar. Ele adora brincar e está pronto para ser o seu melhor amigo!',
      },
      {
        id: 14,
        nome: 'Luna',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Gato',
        sexo: 'fêmea',
        idade: '1 ano',
        porte: 'Pequeno',
        raca: 'Siamês',
        protetor: 'Protetor ABC',
        convivio: 'Prefere ser o único animal da casa',
        personalidade: 'Calma e independente',
        descricao: 'Luna é uma gatinha adorável que gosta de tranquilidade. Ela procura um lar acolhedor onde possa ser a rainha do pedaço!',
      }
    ],
    dataHoraInicio: '2024-02-26 13:00',
    dataHoraFim: '2024-02-26 18:00',
    local: {
      nome: 'Cobasi Linha Verde',
      rua: 'Av. Senador Salgado Filho',
      numero: 580,
      bairro: 'Prado Velho',
      cidade: 'Curitiba',
      uf: 'PR'
    },
    descricao: 'Neste final de semana acontecerá a feira de adoção na Cobasi Linha Verde. Muitos filhotes e jovens adultos aguardando pela adoção. Venha se apaixonar.',
  },

  {
    id: 8,
    protetor: {
      imagem: 'https://via.placeholder.com/200',
      nickname: 'protetorjoana',
      celular: '41999992345',
    },
    imagens: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
    ],
    animais: [
      {
        id: 15,
        nome: 'Bolt',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Cachorro',
        sexo: 'macho',
        idade: '3 anos',
        porte: 'Grande',
        raca: 'Labrador Retriever',
        protetor: 'Protetora ZZZ',
        convivio: 'Energético e amigável',
        personalidade: 'Adora brincar e correr',
        descricao: 'Bolt é um labrador cheio de energia em busca de um lar ativo. Ele adora brincar de buscar a bolinha e está pronto para ser seu parceiro de aventuras!',
      },
      {
        id: 16,
        nome: 'Mia',
        cidade: 'Curitiba',
        imagens: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
        tipo: 'Gato',
        sexo: 'fêmea',
        idade: '2 anos',
        porte: 'Médio',
        raca: 'Persa',
        protetor: 'Protetor DEF',
        convivio: 'Adora companhia de outros gatos',
        personalidade: 'Elegante e brincalhona',
        descricao: 'Mia é uma gatinha persa muito elegante. Ela procura um lar onde possa receber carinho e brincar com seus companheiros felinos!',
      }
    ],
    dataHoraInicio: '2024-03-05 14:00',
    dataHoraFim: '2024-03-05 18:00',
    local: {
      nome: 'Pet Shop Patinhas Felizes',
      rua: 'Rua das Alegrias',
      numero: 123,
      bairro: 'Vila Feliz',
      cidade: 'Curitiba',
      uf: 'PR'
    },
    descricao: 'Adoção responsável! Venha conhecer os animais que estão em busca de um novo lar no Pet Shop Patinhas Felizes.',
  },
];

export default mockEventCardData;
