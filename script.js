const catalogo = document.querySelector('ul');

listaDeFilmes.forEach(filme => {
  const li = document.createElement('li');

  li.addEventListener('click', e => {
    let idDaImagemClicada = e.target['id'];
    console.log(idDaImagemClicada)
    let usuario = Number(prompt('Senha:'));

    listaDeFilmes.forEach(filme => {
      if(filme.id === idDaImagemClicada){
        if(filme.usuarios.includes(usuario)){
          return
        } else{
          alert('Desculpe! Você não possui acesso a este filme.')
          e.preventDefault()
        } 
      }
    })
    return
  })

  const img = document.createElement('img');
  img.src = filme.imagem;
  img.alt = filme.nome;
  img.setAttribute('id', filme.id);

  const p = document.createElement('p');
  p.textContent = filme.ano;

  const link = document.createElement('a');
  link.href = `player.html?link=${encodeURIComponent(filme.link)}&nome=${encodeURIComponent(filme.nome)}`;
  link.appendChild(img);

  li.appendChild(link);
  li.appendChild(p);
  catalogo.appendChild(li);
});
