const countModules = {
    state: {
        count: 10,
    },
    // noi xu li cac ham dong bo
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    },
    actions: {},
    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    }
}

export default countModules;