import axios from "axios";

const SERVER_URL = "http://localhost:9000";

// @description = get all pizza
// @route = http://localhost:9000/pizza
export const getAllPizzas = () => {
    const url = `${SERVER_URL}/pizza`;
    return axios.get(url)
}

// @description = get single pizza with pizzaId
// @route = http://localhost:9000/pizza/:pizzaId
export const getPizzaInfo = (pizzaId) => {
    const url = `${SERVER_URL}/pizza/${pizzaId}`;
    return axios.get(url)
}