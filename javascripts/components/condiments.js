import utilities from "../helpers/utilities.js"

const condiment = [
    {id: 'condiment1', name: 'Mayo', price: .50},
    {id: 'condiment2', name: 'Mustard', price: .50},
    {id: 'condiment3', name: 'Ketchup', price: .50},
    {id: 'condiment4', name: 'Pesto', price: .50}
];

const condimentOptions = () => {
    let domString = '';
    for (let i = 0; i < condiment.length; i++) {
        domString += `
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input condiment" id=${condiment[i].id}>
            <label class="form-check-label" for=${condiment[i].id}>${condiment[i].name}</label>
        </div>
        `;
        utilities.printToDom(domString, 'condiment-menu');
    }
}

const getSelectedCondiments = () => {
    const selectedCondiments = [];
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    for (let j = 0; j < condimentCheckboxes.length; j++) {
        for (let k = 0; k < condiment.length; k++) {
            if (condimentCheckboxes[j].checked && condimentCheckboxes[j].id === condiment[k].id){
                selectedCondiments.push(condiment[k])
            }
        }
    }
    return selectedCondiments;
}

export default { condimentOptions, getSelectedCondiments };