// 1. Selecionamos os elementos do HTML
const botaoBuscar = document.getElementById("btn-buscar");
const divListaUsuarios = document.getElementById("lista-usuarios");


// 2. Criamos a função que vai buscar os dados
async function buscarUsuarios() {
  botaoBuscar.innerText = "Buscando...";
  botaoBuscar.disabled = true;

  try {
    // 3. Fazemos a requisição GET para a API
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

    // 4. Verificamos se foi um sucesso
    if (!resposta.ok) {
      throw new Error(`Erro: Status ${resposta.status}`);
    }

    // 5. Convertemos para JSON
    const usuarios = await resposta.json();

    // 6. Limpamos a div
    divListaUsuarios.innerHTML = "";

    // 7. Percorremos cada usuário
    usuarios.forEach((usuario) => {
      const cartao = document.createElement("div");
      cartao.classList.add("cartao-usuario");

      cartao.innerHTML = `
                <h3>${usuario.name}</h3>
                <p><strong>E-mail:</strong> ${usuario.email}</p>
                <p><strong>Cidade:</strong> ${usuario.address.city}</p>
                <p><strong>Empresa:</strong> ${usuario.company.name}</p>
            `;

      divListaUsuarios.appendChild(cartao);
    });
  } catch (erro) {
    console.error("Erro:", erro);
    divListaUsuarios.innerHTML = `<p style="color: red;">Erro ao carregar os dados.</p>`;
  } finally {
    botaoBuscar.innerText = "Buscar Usuários";
    botaoBuscar.disabled = false;
  }
}



// 8. Adicionamos o ouvinte de eventos
botaoBuscar.addEventListener("click", buscarUsuarios);
