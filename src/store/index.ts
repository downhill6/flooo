import {create} from 'zustand';
import {createPostSlice, PostStore} from './post.slice';

export type Store = PostStore;

export const useStore = create<Store>((...args) => {
  return {
    ...createPostSlice(...args),
  };
});
