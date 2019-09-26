import utilities from "../helpers/utilities.js";

const breads = [
    {id: 'bread1', name: 'White', price: 2.00},
    {id: 'bread2', name: 'Wheat', price: 2.00},
    {id: 'bread3', name: 'Sourdough', price: 2.00},
    {id: 'bread4', name: 'Rye', price: 2.00} 
]

const breadChoices = () => {
    let domString2 = '';
    for (let i = 0; i < breads.length; i++) {
    domString2 += `
    <div class="form-group form-check">
    <input type="checkbox" class="form-check-input bread" id=${breads[i].id}>
    <label class="form-check-label" for=${breads[i].id}>${breads[i].name}</label>
  </div>
    `;
    utilities.printToDom(domString2, 'bread-menu')
    }
};

export default { breadChoices };