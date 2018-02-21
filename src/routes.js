import addWord from './components/addWord.vue';
import showVocabulary from './components/showVocabulary.vue';
import singleWord from './components/singleWord.vue';

export default[
  {
    path: '/',
    component: showVocabulary
  }, {
    path : '/add',
    component: addWord
  }, {
    path : '/word/:id',
    component: singleWord
  }
]
