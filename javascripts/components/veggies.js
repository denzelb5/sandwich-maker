import utilities from "../helpers/utilities.js";

const veggie = [
    {id: 'veggie1', name: 'Lettuce', price: .50},
    {id: 'veggie2', name: 'Tomato', price: .50},
    {id: 'veggie3', name: 'Pickles', price: .50},
    {id: 'veggie4', name: 'Olives', price: .50},
    {id: 'veggie5', name: 'Sprouts', price: .50}
];

const veggieOptions = () => {
    let domString = '';
    for (let i = 0; i < veggie.length; i++) {
        domString += `
        <div class="form-group form-check">
    <input type="checkbox" class="form-check-input veggies" id=${veggie[i].id}>
    <label class="form-check-label" for=${veggie[i].id}>${veggie[i].name} $${veggie[i].price.toFixed(2)}</label>
  </div>
        `;
        utilities.printToDom(domString, 'veggie-menu');
    }
}

const getSelectedVeggies = () => {
    const selectedVeggies = [];
    const veggieCheckboxes = document.getElementsByClassName('veggies');
    for (let j = 0; j < veggieCheckboxes.length; j++) {
        for (let k = 0; k < veggie.length; k++) {
            if (veggieCheckboxes[j].checked & veggieCheckboxes[j].id === veggie[k].id) {
                selectedVeggies.push(veggie[k]);
            }
        }
    }
    return selectedVeggies;
}

export default { veggieOptions, getSelectedVeggies }