import utilities from "../helpers/utilities.js"



const cheeses = [{
    id: 'cheese1',
    name: 'Swiss',
    price: 1.00
},
{
    id: 'cheese2',
    name: 'Muenster',
    price: 1.00
},
{
    id: 'cheese3',
    name: 'Cheddar',
    price: 1.00
},
{
    id: 'cheese4',
    name: 'Montery Jack',
    price: 1.00
}];

const cheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++) {
        domString += `
        <div class="form-group form-check">
    <input type="checkbox" class="form-check-input cheese" id=${cheeses[i].id}>
    <label class="form-check-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
  </div>
        `;
        utilities.printToDom(domString, 'cheese-menu');
    }
    
}

const getSelectedCheeses = () => {
    const selectedCheeses = [];
    //get all cheese checkboxes
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    //keep the checked ones
    for(let j = 0; j < cheeseCheckboxes.length; j++){
        for(let k = 0; k < cheeses.length; k++){
          if(cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses[k].id){
            selectedCheeses.push(cheeses[k]);
          }
        }
      }
    //print to a new array
    return selectedCheeses;
}

export default { cheeseOptions, getSelectedCheeses };