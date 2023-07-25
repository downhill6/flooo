import {Dao} from './dao';
import {IPost} from '../models/post.model';

export class PostDb {
  private dao: Dao;

  constructor() {
    this.dao = new Dao('db', 'post');
    this.createTable();
  }

  public async createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS post (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        creator_id TEXT NOT NULL,
        content TEXT NOT NULL,
        created_time TEXT NOT NULL,
        updated_time TEXT NOT NULL,
        deleted_time TEXT,
        tags TEXT NOT NULL
      );
    `;
    return this.dao.create(sql);
  }

  public async insert(values: any[]) {
    const sql = `
      INSERT INTO post (creator_id, content, created_time, updated_time, tags)
      VALUES (?, ?, ?, ?, ?);
    `;
    return this.dao.insert<IPost>(sql, values);
  }

  public async update(values: any[]) {
    const sql = `
      UPDATE post
      SET content = ?, updated_time = ?, tags = ?
      WHERE id = ?;
    `;
    return this.dao.update<IPost>(sql, values);
  }

  public async delete(id: number) {
    const sql = `
      DELETE FROM post
      WHERE id = ?;
    `;
    return this.dao.update(sql, [id]);
  }

  public async queryAll() {
    const sql = `
      SELECT * FROM post;
    `;
    return this.dao.query<IPost[]>(sql, []);
  }

  public async queryById(id: number) {
    const sql = `
      SELECT * FROM post
      WHERE id = ?;
    `;
    return this.dao.query<IPost>(sql, [id]);
  }
}
