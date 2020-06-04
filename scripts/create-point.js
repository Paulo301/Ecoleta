
function populateUFs(){
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    //res => res.json() pode assumir essa forma quando tiver 1 parametro e 1 linha de retorno simples
    .then((res)=>{ return res.json()}) 
    .then( states => {
      for (const state of states){

        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

      }
    })

}

populateUFs()

function getCities(event){
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");

  const ufValue = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  citySelect.innerHTML = "<option value>Selecione a cidade</option>"
  citySelect.disabled = true;

  fetch(url)
    .then((res)=>{ return res.json()}) 
    .then( cities => {
      for (const city of cities){

        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;

      }
      citySelect.disabled = false;
    });
  
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities);

//Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect){
  item.addEventListener("click", handleSelectedItem);
}

const collectedItems =   document.querySelector("input[name=items]");

var selectedItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;

  //adicionar ou remover uma classe com javascript
  itemLi.classList.toggle("selected");

  const itemId = itemLi.dataset.id;

  //Verificar se existem itens selecionados, se sim
  //pegar os itens selecionados

  const alreadySelected = selectedItems.findIndex(function (item) {
    const itemFound = item == itemId
    return itemFound
  })

  //Se já estiver selecionado 
  if(alreadySelected >= 0){
    //retirar da seleção
    const filteredItems = selectedItems.filter(function (item) {
      const itemIsDifferent = item != itemId
      return itemIsDifferent
    });

    selectedItems = filteredItems;

  }else {
    //Se não estiver selecionado, adicionar à seleção
    selectedItems.push(itemId);
  }

  //Atualizar o campo escondido com os itens selecionados
  collectedItems.value = selectedItems;

}