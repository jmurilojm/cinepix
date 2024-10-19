let adm = 1001;
const listaDeFilmes = [
  {
    id: '0001',
    nome: 'A Caverna Azul',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ODAyY2ZkNDctMmM5OS00YzkyLTk0MjQtNDNlMWRkMGEwYzZk.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12938.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '0002',
    nome: 'Lá Fora',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/OGQwMjdiYjYtMTgyZi00ZGM4LWIzZDItZjYyYWRmNzc2Mjk1.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12926.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '0003',
    nome: 'Melhor Viúva Do Que Mal Acompanhada',
    link: 'https://space.vscine.biz/filmes/melhorviuva/playlist.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12587.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '0004',
    nome: 'Terrifier 3 / Aterrorizante 3 (HDCAM)',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NmYyNGI3ZTYtMjA3My00NTIzLTkyZmMtMWZhNDI2YzE2MGVi.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12881.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '0005',
    nome: 'Reality de Horror - Influencers em Pânico',
    link: 'https://space.vscine.biz/filmes/AmpHouseMassacre/playlist.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12157.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '0006',
    nome: 'Coringa: Delírio a Dois (HDCAM)',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ODk0YmM1MzUtZTdiOC00MTc1LWE0YTItZDFhMWNmZDkxZTMy.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12823.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '0007',
    nome: 'O Poço 2',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ZmY2NjVkZTItNTY3ZS00ODg1LTlkNWItMDBkNTIwYWY4YWFh.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12814.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '0008',
    nome: 'Robô Selvagem (HDCAM)',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/YjY4ZjYxMjktNmJjZi00MDgzLThmNTAtNWU3NDFhZjg4ODc1.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12752.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '0009',
    nome: 'É Assim Que Acaba',
    link: 'https://space.vscine.biz/filmes/eassimqueacabahd/playlist.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12715.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '0010',
    nome: 'Transformers: O Início (HDCAM)',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/YTZlNjI2YTYtNjhmYy00MWE2LTkwOWEtZGE5NTljZTUxMGMy.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12713.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '0011',
    nome: 'O Caso dos Irmãos Menendez',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/MTQyY2FjODYtNDY5Ni00ZWE4LWE1MDctMzE4NjRkZjVlYzU1.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12840.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '012',
    nome: 'A Hora do Vampiro',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NDVkZGMwNzUtZjQ0OC00NDhlLWI3MDYtZmM3OGUyMDFhMmQ1.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12800.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '013',
    nome: 'Hellboy e o Homem Torto',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/MDJhYzFhN2EtMDFiYi00NWFiLWIzNjAtMDViMWM0ZmUyODk5.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12615.jpg',
    ano: 2024,
    usuarios: [adm]
  },
  {
    id: '014',
    nome: 'Amores Solitários',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ZGU4ODkyNDctMmU1Yy00YzMwLTk4MzMtY2JmMGNmMmVhMjk4.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12874.jpg',
    ano: 2024,
    usuarios: [adm]
  }
];
