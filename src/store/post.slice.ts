import type {IPost} from '../models/post.model';
import type {StateCreator} from 'zustand';
import {immer} from 'zustand/middleware/immer';

type PostState = {
  posts: IPost[];
};

type PostActions = {
  addPost: (post: IPost) => void;
  updatePost: (post: IPost) => void;
  deletePost: (id: number) => void;
  queryAllPosts: () => Promise<IPost[]>;
  queryPostById: (id: number) => Promise<IPost | undefined>;
};

export type PostStore = PostState & PostActions;

export const createPostSlice: StateCreator<
  PostStore,
  [],
  [['zustand/immer', PostStore]],
  PostStore
> = immer(set => ({
  posts: [],
  addPost: post => {
    console.log('addPost', post);
  },
  updatePost: post => {
    console.log('updatePost', post);
  },
  deletePost: id => {
    console.log('deletePost', id);
  },
  queryAllPosts: async () => {
    return [];
  },
  queryPostById: async id => {
    console.log('queryPostById', id);
    return undefined;
  },
}));
