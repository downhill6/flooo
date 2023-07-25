import type {IPost} from '../models/post.model';

export function createPost(
  creator_id: string,
  content: string,
): Omit<IPost, 'id'> {
  const created_time = new Date().toISOString();
  // todo: parse tags
  return {
    created_time,
    updated_time: created_time,
    deleted_time: null,
    content,
    creator_id,
    tags: [],
  };
}

export function updatePostContent(post: IPost, newContent: string) {
  // todo: parse tags
  post.content = newContent;
  post.updated_time = new Date().toISOString();
  return post;
}
