import utilities from "../helpers/utilities.js"
import cheese from './cheese.js';
import bread from './bread.js';
import meats from './meat.js';
import condiments from './condiments.js';
import veggies from './veggies.js';

const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i = 0; i < items.length; i++) {
        domString2 += `<h2>${items[i].name}</h2>`

    }
    utilities.printToDom(domString2, 'final-order')
};

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meats.getSelectedMeats();
    const selectedBreads = bread.getSelectedBreads();
    const finalSandwichChoices = [...selectedBreads, ...selectedCheeses, ...selectedMeats]
    
        createFinalOrder(finalSandwichChoices);
    
    
    
}


const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-secondary">Make Sandwich</button>';
    utilities.printToDom(domString, 'order-button');
    document.getElementById('order-button').addEventListener('click', createOrderEvent) 
};


export default { printOrderButton };