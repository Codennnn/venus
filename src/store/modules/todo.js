const state = {
  todoList: [
    {
      id: '10',
      title: '苍苍竹林寺，杳杳钟声晚。荷笠带斜阳，青山独归远。',
      tag: ['1', '2'],
      done: false,
      star: false,
      date: ['2020-06-09', '2020-06-10'],
    },
    {
      id: '11',
      title: '故园东望路漫漫，双袖龙钟泪不干。马上相逢无纸笔，凭君传语报平安。',
      tag: ['2', '3'],
      done: false,
      star: false,
      date: ['2020-06-09', '2020-06-10'],
    },
    {
      id: '12',
      title: '向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。',
      tag: ['1'],
      done: false,
      star: false,
      date: ['2020-02-09', '2020-06-10'],
    },
    {
      id: '13',
      title: '独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。',
      tag: ['3', '4'],
      done: false,
      star: false,
      date: ['2020-01-23', '2020-02-23'],
    },
    {
      id: '14',
      title: '葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？',
      done: true,
      star: true,
      date: ['2020-06-09', '2020-06-10'],
    },
    {
      id: '15',
      title: '宣室求贤访逐臣，贾生才调更无伦。可怜夜半虚前席，不问苍生问鬼神。',
      tag: ['1', '2'],
      done: false,
      star: false,
      date: ['2020-06-09', '2020-06-10'],
    },
    {
      id: '16',
      title:
        '客路青山外，行舟绿水前。潮平两岸阔，风正一帆悬。海日生残夜，江春入旧年。乡书何处达？归雁洛阳边。',
      tag: ['1', '2'],
      done: false,
      star: true,
      date: ['2020-06-09', '2020-06-10'],
    },
    {
      id: '17',
      title:
        '故人具鸡黍，邀我至田家。绿树村边合，青山郭外斜。开轩面场圃，把酒话桑麻。待到重阳日，还来就菊花。',
      tag: ['2', '1'],
      done: false,
      star: false,
      date: ['2020-06-09', '2020-06-10'],
    },
    {
      id: '18',
      title: '寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。',
      tag: ['4'],
      done: true,
      star: false,
    },
    {
      id: '19',
      title:
        '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。海内存知己，天涯若比邻。无为在歧路，儿女共沾巾。',
      tag: ['3', '4', '1'],
      done: false,
      star: true,
    },
    {
      id: '20',
      title: '折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。',
      tag: ['4', '2'],
      done: false,
      star: false,
      date: ['2020-04-04', '2020-06-14'],
    },
    {
      id: '21',
      title: '岐王宅里寻常见，崔九堂前几度闻。正是江南好风景，落花时节又逢君。',
      done: true,
      star: true,
      date: ['2020-05-20', '2020-06-10'],
    },
    {
      id: '22',
      title: '功盖三分国，名成八阵图。江流石不转，遗恨失吞吴。',
      tag: ['2'],
      done: false,
      star: false,
      date: ['2020-08-09', '2020-09-10'],
    },
  ],
  barKey: ['1'],
  isTodoDrawerOpened: false,
  currEditTodo: {},
}

const mutations = {
  SET_TODO_DRAWER_STATUS(state, status) {
    if (!status) {
      state.currEditTodo = {}
    }
    state.isTodoDrawerOpened = status
  },
  SET_TODO_BAR_KEY(state, key) {
    state.barKey = [key]
  },
  SET_CURR_EDIT_TODO(state, todoItem) {
    state.currEditTodo = todoItem
  },
}

const actions = {}

const getters = {
  filterItems: (state) => {
    const [key] = state.barKey

    if (['1', '2', '3', '4'].includes(key)) {
      if (key === '1') {
        return state.todoList.filter(({ trash }) => !trash)
      }
      if (key === '2') {
        return state.todoList.filter(({ done, trash }) => done && !trash)
      }
      if (key === '3') {
        return state.todoList.filter(({ star }) => star)
      }
      if (key === '4') {
        return state.todoList.filter(({ trash }) => trash)
      }
    } else {
      if (key === '5') {
        return state.todoList.filter(({ tag }) => tag?.includes('1'))
      }
      if (key === '6') {
        return state.todoList.filter(({ tag }) => tag?.includes('2'))
      }
      if (key === '7') {
        return state.todoList.filter(({ tag }) => tag?.includes('3'))
      }
      if (key === '8') {
        return state.todoList.filter(({ tag }) => tag?.includes('4'))
      }
    }
    return []
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
