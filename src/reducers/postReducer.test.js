import blog from './postReducer';
import { ADD_ENTRY } from './postReducer';


const initialState = {
    blog
}

export default function reducer(state = initialState, post) {
    switch(post.type) {
        case ADD_ENTRY:
        return {...state, blog: {...state.blog, [post.payload.title]: post.payload.body}}
      default:
          return state;   
    }
}