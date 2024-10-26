import React, {useState} from 'react'
function GaleriaDeImagens(){
  const [imagens,setImagens] = useState([
    'https://th.bing.com/th/id/OIP.SJKdnRDtslA5DoNKMbfpNwHaEL?rs=1&pid=ImgDetMain',
    'https://via.placeholder.com/250',
    'https://via.placeholder.com/250'
  
  ])
  const adicionarImagem = ()=> {
    setImagens([...imagens,'https://via.placeholder.com/250'])
    setImagens([...imagens,'https://th.bing.com/th/id/OIP.SJKdnRDtslA5DoNKMbfpNwHaEL?rs=1&pid=ImgDetMain'])
  }

  return(
    <div>
      <h1>Seja bem vindo</h1>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} />
        ))}
      </div>
      <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button>
    </div>
  );
}

export default GaleriaDeImagens