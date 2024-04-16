// let titulo = document.getElementById('titulo');
// let botaoTeste = document.getElementById('botaoTeste');

// botaoTeste.addEventListener('click', () => {
//   alert("clicou");
// })

// function clickTeste(event) {
//   alert("clicou");
// }

// console.log(titulo.innerText);
// console.log(titulo.innerHTMLs);
// titulo.innerText = 'oi';
// titulo.style.color = 'red';
// titulo.style.backgroundColor = 'blue';


let input = document.getElementById('todos');
let botao = document.getElementById('botao');
let divItens = document.getElementById('divItens');
let corCards = document.getElementById('color');
let corTexto = document.getElementById('corTexto');

let itens = [];
getLocalStore();

botao.addEventListener('click', (_) => {
  if (input.value.replace(/ /g, '')) {
    itens.push(
      {
        descricao: input.value,
        corCards: corCards.value,
        corTexto: corTexto.value,
      }
    )
  }
  // console.log(input.value);
  addLocalStorage();
  addCard();
});

// function excluir(_){
//   divItens.removeChild(divItens.lastChild);
//   itens.pop();
// }  

function addCard() {

  divItens.innerHTML = '';
  itens.forEach((objeto, indice) => {
    let { descricao, corCards, corTexto} = objeto;
    let linha = document.createElement('div');
    linha.className = 'row mt-3';
      linha.innerHTML = 
      `
        <class="col-12">
          <div class="corCards">
            <div class="card">
              <div class="card-body" style="background-color: ${corCards}">
                <span style="color: ${corTexto}">
                  ${indice} - ${descricao}
                </span>
              </div>
            </div>
          </div>
        </div>
      `;
      divItens.appendChild(linha);  
  });
  input.value = ' ';
  
};

function excluir(_) {
  const idExclusao = prompt('Informe o numero da exclusão');
  if(idExclusao.toString().replace(/\D/g, '')) {
    itens.splice(idExclusao, 1);
  }
  addCard();
  addLocalStorage();
}

function getLocalStore() {
  try {
    itens = JSON.parse(localStorage.getItem('itens'));
    addCard();
  } catch (error) {
    localStorage.setItem('itens', '[]');
  }
}

function addLocalStorage() {
  localStorage.setItem('itens', JSON.stringify(itens));
}

























  // let linha = document.createElement('div');
  // // console.log(linha);
  // linha.className = 'row mt-3';
  // // console.log(linha);
  // // if(input.value == "") {
  //   // return false;
  // // }
  // // else {
  //   linha.innerHTML = 
  //   `
  //     <div class="col-12">
  //       <div class="card">
  //         <div class="card-body">
  //           <span>
  //             ${input.value}
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //   `;
  //   divItens.appendChild(linha);  
  //   input.value = ' ';
  // // }