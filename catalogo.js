let adm = '1010';
const figura = `<i class="bi bi-play-fill"></i>`;

const listaDeFilmes = [
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'A Máscara de Ferro',
    link: 'http://vods.conexao-vs.live:80/movie/38055.mp4',
    imagem: 'https://image.tmdb.org/t/p/w300//f4TV8H3kQQdzXtAXPRDCzLILKIy.jpg',
    ano: 2019,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Gladiador 2 (HDCAM)',
    link: 'https://vz-58099e5d-dc6.b-cdn.net/bcdn_token=ire_i14vH53P14c0kuVyofcUZEwkqpvZHCh__-LOoT8&expires=1732573845&token_path=%2F/bdbc45cd-999d-4fd6-af09-d239260556e4/480p/video.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/13221.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Operação Natal (HDCAM)',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NTZjMWQzMGEtYWQ5ZC00NTZkLWI5NGYtYWEyMTVhZmU5NGNj.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/13164.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Enfeitiçados',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/MmNjMGRlYzUtODYzMC00ZmY0LWIwYzktMmIwZWI4Y2M1N2E4.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/13303.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Apocalipse Z: O Princípio do Fim',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NzQ3NzMwOWItM2FjMC00ZTBkLWE0ODktNDQyMGNkODFjMzlj.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/13051.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: '1992',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/MDY1ZGQ2NGYtNjgyMi00N2JiLTlmNzAtMjM5MjI0ZDA1ODlk.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/13313.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Wicked (HDCAM)',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/OWRiYThmNDEtZDIxMS00ODA1LWI4ZDQtZjkxNWQ4YTk4NzBl.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/13283.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: '65: Ameaça Pré-Histórica',
    link: 'http://vods.conexao-vs.live:80/movie/30012.mp4',
    imagem: 'https://image.tmdb.org/t/p/w300//uwAUZ2yD6mgQl2lhuEkRDpl5lmR.jpg',
    ano: 2023,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'GTMAX',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/M2FlYTAzYjgtZjA5Yy00ZmQxLTk0MTItNmQ4OWI3NGQ5ODQz.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/13270.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Sorria 2',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/YWYyZmY4OWEtMjhiMC00ZmZhLWI3MGEtNWRhYjNkOWY1OGMx.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12992.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Descendentes 2',
    link: 'http://vods.conexao-vs.live:80/movie/38151.mp4',
    imagem: 'https://image.tmdb.org/t/p/w300//5jGEBYg13Sa1J3D6KOlQ2EH8Uxg.jpg',
    ano: 2017,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Venom: A Última Rodada (HDCAM)',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/YTU5MjU5MTMtNmExMS00M2JmLWIyOTQtNTYwZjNjOTllODgz.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12991.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'A Caverna Azul',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ODAyY2ZkNDctMmM5OS00YzkyLTk0MjQtNDNlMWRkMGEwYzZk.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12938.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Lá Fora',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/OGQwMjdiYjYtMTgyZi00ZGM4LWIzZDItZjYyYWRmNzc2Mjk1.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12926.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Melhor Viúva Do Que Mal Acompanhada',
    link: 'https://space.vscine.biz/filmes/melhorviuva/playlist.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12587.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Tigres e Hienas',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NmI3NWNiYmQtMWYyMi00YTZkLTkyNDUtM2E0YTc5NjI5NDEy.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/13300.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Robô Selvagem',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ZTkzZDZjYjUtZmRjYy00ODU5LThmZjQtMThiMDhjNThkNTY3.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12752.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Coringa: Delírio a Dois (HDCAM)',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ODk0YmM1MzUtZTdiOC00MTc1LWE0YTItZDFhMWNmZDkxZTMy.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12823.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'O Poço 2',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ZmY2NjVkZTItNTY3ZS00ODg1LTlkNWItMDBkNTIwYWY4YWFh.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12814.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'A Substância',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NmRlNWM4Y2YtN2YyZi00YTVlLWE1NTgtYzVmOTYyNzgyZjdj.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/13181.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'É Assim Que Acaba',
    link: 'https://space.vscine.biz/filmes/eassimqueacabahd/playlist.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12715.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Transformers: O Início',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NDFhMzM3YjEtNTM5Ni00Y2VlLTlmNTgtYTRlYzViZTU1Yzc5.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12713.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'O Caso dos Irmãos Menendez',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/MTQyY2FjODYtNDY5Ni00ZWE4LWE1MDctMzE4NjRkZjVlYzU1.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12840.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'A Hora do Vampiro',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/NDVkZGMwNzUtZjQ0OC00NDhlLWI3MDYtZmM3OGUyMDFhMmQ1.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12800.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Hellboy e o Homem Torto',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/MDJhYzFhN2EtMDFiYi00NWFiLWIzNjAtMDViMWM0ZmUyODk5.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12615.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  },
  {
    id: `${Math.floor(Math.random() * 10000)}`,
    nome: 'Amores Solitários',
    link: 'https://sinalprivado.info/m3u8/MQ==/dnotNTgwOTllNWQtZGM2/ZGU4ODkyNDctMmU1Yy00YzMwLTk4MzMtY2JmMGNmMmVhMjk4.m3u8',
    imagem: 'https://cdn.syncdev.com.br//uploads/video_thumb/12874.jpg',
    ano: 2024,
    icone: figura,
    usuarios: [adm]
  }
];



