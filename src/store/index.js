import Vue from 'vue'
import Vuex from 'vuex'
import { ajaxT } from 'util'
import _ from 'underscore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    secondary: false,
    companyName: [],
    username: ''
  },
  mutations: {
    setSecondary(state, type) {
      state.secondary = type
    },
    setCompanyList(state, dataList) {
      state.companyName = dataList
    }
  },
  getters: {
    getSecondary: state => state.secondary,
    getAutoCompanyName: state => state.companyName,
    getCompanyName: state => _.filter(state.companyName, item => item.id !== '0')
  },
  actions: {
    getCompanyList({ commit }, baseURL) {
      ajaxT
        .post('manage/findCompany', {
          baseURL
        })
        .then(res => {
          let data = res.data
          let count = 0
          commit(
            'setCompanyList',
            _.map(_.filter(data, item => item.id), item => {
              if (item.id === '0') return { value: item.id, label: '所有平台', onlyId: count++ }
              else return { value: item.id, label: item.text, onlyId: count++ }
            })
          )
        })
    }
  }
})
