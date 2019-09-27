import cheese from "./components/cheese.js"
import bread from "./components/bread.js"
import meat from "./components/meat.js"
import veggies from "./components/veggies.js"
import condiments from "./components/condiments.js"

const init = () => {
    bread.breadOptions()
    meat.meatOptions()
    cheese.cheeseOptions()
    veggies.veggieOptions()
    condiments.condimentOptions()
    
}
init();