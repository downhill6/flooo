import {PostDb} from '../infrastructure/post.db';
import {createPost, updatePostContent} from '../domain/post';
// import {IPost} from '../models/post.model';

export class PostService {
  private postDb: PostDb;

  constructor() {
    this.postDb = new PostDb();
  }

  public async createPost(creator_id: string, content: string) {
    const post = createPost(creator_id, content);
    const res = await this.postDb.insert([
      post.creator_id,
      post.content,
      post.created_time,
      post.updated_time,
      JSON.stringify(post.tags),
    ]);
    return res;
  }

  public async updatePostContent(id: number, newContent: string) {
    const post = await this.postDb.queryById(id);
    if (!post) {
      throw new Error('Post not found');
    }
    const updatedPost = updatePostContent(post, newContent);
    await this.postDb.update([
      updatedPost.content,
      updatedPost.updated_time,
      JSON.stringify(updatedPost.tags),
      id,
    ]);
    return updatedPost;
  }

  public async deletePost(id: number) {
    const post = await this.postDb.queryById(id);
    if (!post) {
      throw new Error('Post not found');
    }
    await this.postDb.delete(id);
    return post;
  }

  public async queryAllPosts() {
    return this.postDb.queryAll();
  }

  public async queryPostById(id: number) {
    return this.postDb.queryById(id);
  }
}
