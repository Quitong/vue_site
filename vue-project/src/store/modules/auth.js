import axios from 'axios';
const state = {
    user: null,
};
const getters = {
    StateUser: state => state.user,
};
const actions = {
    async Register({dispatch}, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        UserForm.append('email', form.email)
        await dispatch('LogIn', UserForm)
      },
    async LogIn({commit}, User) {
        await axios.post('get-token', User)
        //TODO: Взять токен , сделать обработчик ошибок
        await commit('setUser', User.get('username'))
      },
};
const mutations = {
    setUser(state, username){
        state.user = username
    }
};
export default {
  state,
  getters,
  actions,
  mutations
};