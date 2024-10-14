const changeColorModules = {
    state: {
        isDarkMode: localStorage.getItem('darkMode') === 'true'
      },
      mutations: {
        SET_DARK_MODE(state, value) {
          state.isDarkMode = value;
          localStorage.setItem('darkMode', value);
        }
      },
      getters: {
        isDarkMode(state) {
          return state.isDarkMode;
        }
      }
}
export default changeColorModules;