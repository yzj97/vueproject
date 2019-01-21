import * as types from './types'

let mutations={ // mutations['INCREMENT']->mutations[INCREMENT]

  // ['INCREMENT']:(state,payload)=>{
  [types.VIRW_LOADING]:(state,payload)=>{
    state.bLoading = payload
  },
  [types.VIRW_BHEADER]:(state,payload)=>{
    state.bHeader = payload
  },
  [types.VIRW_BFOOTER]:(state,payload)=>{
    state.bFooter = payload
  },
  [types.CHECK_USER]:(state,payload)=>{
    console.log(payload)
     state.user = payload.user
  }

 
};
export default mutations;

/* let A='a'

let obj={
  [A]:1,
  a:1,
  b:2
}

var aa=12;
alert(window.aa)
alert(obj.a)
alert(obj['a'])
alert(obj[A])  */