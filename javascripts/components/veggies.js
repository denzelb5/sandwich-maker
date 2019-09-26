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
    <input type="checkbox" class="form-check-input" id=${veggie[i].id}>
    <label class="form-check-label" for=${veggie[i].id}>${veggie[i].name}</label>
  </div>
        `;
        utilities.printToDom(domString, 'veggie-menu');
    }
}

export default { veggieOptions }