const todoListModules = {
    state:{
        jobs:[
            {id:1, name:'Job 1', status:false},
            {id:2, name:'Job 2', status:false},
            {id:3, name:'Job 3', status:false}
        ]
    
    },
    mutations:{
        addJob(state, payload){
            state.jobs.push(payload);
        },
    }
}
export default todoListModules;