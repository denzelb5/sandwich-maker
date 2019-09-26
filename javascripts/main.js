import cheese from "./components/cheese.js"
import bread from "./components/bread.js"
import meat from "./components/meat.js"
import veggies from "./components/veggies.js"

const init = () => {
    bread.breadChoices()
    meat.meatOptions()
    cheese.cheeseOptions()
    veggies.veggieOptions()
    
}
init();