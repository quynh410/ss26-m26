import { createStore } from 'vuex';

import countModules from './modules/count';
import todoListModules from './modules/todoList';
import profileModules from './modules/profile';
import listUSerModules from './modules/listUser';
import listProductsModules from './modules/listProducts';
import randomNumberModuls from './modules/randomNumber';
import ChangeState from '@/components/ChangeState.vue';
import getCompany from './modules/changeState';
import changeColorModules from './modules/color';

const store = createStore({
    modules: {
        countModules,
        todoListModules,
        profileModules,
        listUSerModules,
        listProductsModules,
        randomNumberModuls,
        getCompany,
        changeColorModules,

    }
})

export default store;