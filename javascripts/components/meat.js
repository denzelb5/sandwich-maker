import utilities from "../helpers/utilities.js"

const meats = [
    {id: 'meat1', name: 'Turkey', price: 2.00},
    {id: 'meat2', name: 'Ham', price: 2.00},
    {id: 'meat3', name: 'Pastrami', price: 3.00},
    {id: 'meat4', name: 'Salami', price: 3.00},
    {id: 'meat5', name: 'Roast Beef', price: 3.00},
    {id: 'meat6', name: 'Tofu', price: 2.00}
];

const meatOptions = () => {
    let domString3 = '';
    for (let i = 0; i < meats.length; i++) {
        domString3 += ` 
        <div class="form-group form-check">
    <input type="checkbox" class="form-check-input meat" id=${meats[i].id}>
    <label class="form-check-label" for=${meats[i].id}>${meats[i].name}</label>
  </div>
        `;
        utilities.printToDom(domString3, 'meat-menu');
    }
};

export default { meatOptions };

