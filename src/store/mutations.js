const mutations = {
  SET_REDIRECT_PATH(state, path) {
    state.redirectPath = path
  },
  SET_SIDE_MENU_STATUS(state, status) {
    state.isSideMenuOpened = status
  },
  SET_HEADER_STATUS(state, status) {
    state.isHeaderFixed = status
  },
}

export default mutations
