// 스토어를 생성하는 함수륾 만들어서 내보냄
// 이 함수는 store/index.js 에서 불러와서 사용하게됨

import { createStore } from 'redux';
import modules from './modules';

const configure = () => {
  const store = createStore(modules);
  return store;
}

export default configure;
