import axios from 'axios';

import * as types from './types';

let actions={
  [types.VIRW_LOADING]:({commit},payload)=>{//第一个参数==obj {commit,dispatch,state,getters}
    commit(types.VIRW_LOADING,payload)
  },
  [types.VIRW_BHEADER]:({commit},payload)=>{//第一个参数==obj {commit,dispatch,state,getters}
    commit(types.VIRW_BHEADER,payload)
  },
  [types.VIRW_BFOOTER]:({commit},payload)=>{//第一个参数==obj {commit,dispatch,state,getters}
    commit(types.VIRW_BFOOTER,payload)
  },
  [types.CHECK_USER]:({commit},payload)=>{//第一个参数==obj {commit,dispatch,state,getters}
    
   return axios({
       url:'/data/user.json',
       params:{username:payload.username,password:payload.password}
     }).then(
       res => {
        if(res.data.data.username == payload.username && res.data.data.password == payload.password){
          commit({type:types.CHECK_USER,user:res.data})
          return res.data.auth
        }
      }
         
     )
  }

};
export default actions;