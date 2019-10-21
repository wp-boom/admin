export default {
  changeTokenModal(params){
    let action = {
      type:'CHANGE_TOKEN_MODSL',
      params:params
    }
    return action
  },
  changeTokenModalAsync(){
    return (dispatch)=>{
      let action = {type:'CHANGE_TOKEN_MODSL'}
      setTimeout(()=>{
        console.log('我来了')
        let showModal = false
        action.params = showModal
        dispatch(action)
      },1000)
    }
  }
}