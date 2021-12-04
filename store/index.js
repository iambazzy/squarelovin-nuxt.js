export const state = () => ({
  cars: [
    {
      id: 1,
      name: 'Nissan'
    },
    {
      id: 2,
      name: 'Honda'
    },
    {
      id: 3,
      name: 'Toyota'
    },
    {
      id: 4,
      name: 'Toyota'
    },
    {
      id: 5,
      name: 'Toyota'
    },
    {
      id: 6,
      name: 'Toyota'
    },
    {
      id: 7,
      name: 'Toyota'
    },
    {
      id: 8,
      name: 'Toyota'
    },
  ],
  pageNo: 1,
  perPage: 5,
  searched: '',
})

export const mutations = { 
  updateLocalStorage(state) {
    localStorage.setItem('cars', JSON.stringify(state.cars));
  },
  addCar(state) {
    // PUSHING DUMMY ITEMS FOR DEMONSTRATION
    state.cars.push({
      id: state.cars[state.cars.length - 1]['id'] + 1,
      name: state.cars[state.cars.length - 1]['name']
    });
    this.commit('updateLocalStorage');
  },
  setPageInfo(state, payload) {
    state[payload.key] = payload.value;
  },
  updateItem(state, payload) {
    let updatedItem = {};
    updatedItem[payload.type] = payload.value;
    const updatedCars = state.cars.map(car => car.id !== payload.item.id ? car : { ...car, ...updatedItem });
    state.cars = updatedCars;
    this.commit('updateLocalStorage');
  },
  deleteItem(state, payload) {
    const index = state.cars.findIndex(car => car.id === payload);
    state.cars.splice(index, 1);
    this.commit('updateLocalStorage');
  },
  setSearched(state, payload) {
    state.searched = payload;
  }
}

export const actions = { }

export const getters = {
  getCars: state => state.cars,
  pageInfo: state => ({ 
    pageNo: state.pageNo,
    perPage: state.perPage
  }),
  getSearched: state => state.searched,
}