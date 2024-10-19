const catalogo = document.querySelector('ul');

listaDeFilmes.forEach(filme => {
  const li = document.createElement('li');

  li.addEventListener('click', e => {
    let idDaImagemClicada = e.target['id'];
    let usuario = Number(prompt('Senha:'));

    listaDeFilmes.forEach(filme => {
      if(filme.id === idDaImagemClicada){
        if(filme.usuarios.includes(usuario)){
          return;
        } else{
          e.preventDefault();
          return;
        } 
      }
    })
    return;
  })

  const img = document.createElement('img');
  img.src = filme.imagem;
  img.alt = filme.nome;
  img.setAttribute('id', filme.id);

  const p = document.createElement('p');
  p.innerHTML = filme.icone;
  const p2 = document.createElement('p');
  p2.textContent = filme.ano;
  p2.setAttribute('class', 'ano');

  const link = document.createElement('a');
  link.href = `player.html?link=${encodeURIComponent(filme.link)}&nome=${encodeURIComponent(filme.nome)}`;
  //link.target = '_blank';  // Abrir em nova aba
  link.appendChild(img);

  li.appendChild(link);
  li.appendChild(p);
  li.appendChild(p2);
  catalogo.appendChild(li);
});

alert('Bem-vindo!');
