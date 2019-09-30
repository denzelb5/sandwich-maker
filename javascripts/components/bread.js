import utilities from "../helpers/utilities.js";

const breads = [
    {id: 'bread1', name: 'White', price: 2.00},
    {id: 'bread2', name: 'Wheat', price: 2.00},
    {id: 'bread3', name: 'Sourdough', price: 2.00},
    {id: 'bread4', name: 'Rye', price: 2.00} 
]

const breadOptions = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++) {
    domString += `
    <div class="form-group form-check">
    <input type="checkbox" class="form-check-input bread" id=${breads[i].id}>
    <label class="form-check-label" for=${breads[i].id}>${breads[i].name} $${breads[i].price.toFixed(2)}</label>
  </div>
    `;
    utilities.printToDom(domString, 'bread-menu')
    }
};

const getSelectedBreads = () => {
    const selectedBreads = [];
    const checkboxBreads = document.getElementsByClassName('bread');
    for (let j = 0; j < checkboxBreads.length; j++) {
        for (let k = 0; k < breads.length; k++) {
            if (checkboxBreads[j].checked && checkboxBreads[j].id === breads[k].id) {
                selectedBreads.push(breads[k])
            }
        }
    }
    return selectedBreads;
}

export default { breadOptions, getSelectedBreads };