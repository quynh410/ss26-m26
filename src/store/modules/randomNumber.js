const randomNumberModuls = {
    state: {
        numbers: []
    },
    mutations: {
        ADD_RANDOM_NUMBER(state, number) {
            state.numbers.push(number);
        }
    },
    actions: {
        generateRandomNumber({ commit }) {
            const randomNum = Math.floor(Math.random() * 100);
            commit('ADD_RANDOM_NUMBER', randomNum);
        }
    },
    getters: {
        getNumbers(state) {
            return state.numbers;
        }
    }
}
export default randomNumberModuls