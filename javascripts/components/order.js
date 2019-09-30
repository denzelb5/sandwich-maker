import utilities from "../helpers/utilities.js"
import cheese from './cheese.js';
import bread from './bread.js';
import meats from './meat.js';
import condiments from './condiments.js';
import veggies from './veggies.js';

const createFinalOrder = (items) => {
    const total = items.reduce((prev, curr) => prev + curr.price, 0);
    let domString2 = '';
    for (let i = 0; i < items.length; i++) {
        domString2 += `<h5>${items[i].name} $${items[i].price.toFixed(2)}</h5>`
    }
    domString2 += `<h4>Total = $${total.toFixed(2)}</h4>`;
    utilities.printToDom(domString2, 'final-order')
};



const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meats.getSelectedMeats();
    const selectedBreads = bread.getSelectedBreads();
    const selectedVeggies = veggies.getSelectedVeggies();
    const selectedCondiments = condiments.getSelectedCondiments();
    const finalSandwichChoices = [...selectedBreads, ...selectedCheeses, ...selectedMeats, ...selectedVeggies, ...selectedCondiments]
    createFinalOrder(finalSandwichChoices);
}

const clearMenuItems = () => {
    const domString3 = '';
    $('input[type=checkbox]').each(function() { 
        this.checked = false; 
    });
    utilities.printToDom(domString3, 'final-order') 
}

const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-secondary">Make Sandwich</button> \
        <input id="clear-button" class="btn btn-primary" type="reset" value="Clear">';
    utilities.printToDom(domString, 'order-button-container');
    document.getElementById('order-button').addEventListener('click', createOrderEvent)
    document.getElementById('clear-button').addEventListener('click', clearMenuItems);
};





export default { printOrderButton };