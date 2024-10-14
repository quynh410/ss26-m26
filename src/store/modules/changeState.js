const getCompany = {
    state: {
        company: 'Rikkei Academy'
      },
      mutations: {
        CHANGE_COMPANY_NAME(state) {
          state.company = 'RikkeiSoft';
        }
      },
      getters: {
        getCompany(state) {
          return state.company;
        }
      }
}
export default getCompany