// Função de utilidade para formatar a data
export const formatarData = (dataHora) => {
    const data = new Date(dataHora);
    
    // Obter dia, mês e ano
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString().slice(-2);
  
    // Obter hora e minuto
    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');
  
    // Formatar como dd/mm/yy hh:mm
    return `${dia}/${mes}/${ano}`;
  };
  
  // Exemplo de uso
  const dataHoraOriginal = '2024-02-28 10:30';
  const dataFormatada = formatarData(dataHoraOriginal);
  console.log(dataFormatada); // Saída: 28/02/24 10:30