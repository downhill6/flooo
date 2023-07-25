import SQLite from 'expo-sqlite';
import type {SQLiteDatabase} from 'expo-sqlite';

export class Dao {
  private db: SQLiteDatabase;

  constructor(public dbName: string, public tableName: string) {
    this.db = SQLite.openDatabase(dbName);
  }

  public create(sql: string) {
    return new Promise<boolean>((resolve, reject) => {
      this.db.transactionAsync(async tx => {
        try {
          await tx.executeSqlAsync(sql);
          resolve(true);
        } catch (error) {
          reject('error: sql create execute error');
        }
      });
    });
  }

  public query<T = any>(sql: string, args: (string | number)[]) {
    return new Promise<T>((resolve, reject) => {
      this.db.transactionAsync(async tx => {
        try {
          const {rows} = await tx.executeSqlAsync(sql, args);
          resolve(rows as any);
        } catch (error) {
          reject('error: sql query execute error');
        }
      }, true);
    });
  }

  public async insert<T = any>(sql: string, values: any[]) {
    return new Promise<T>((resolve, reject) => {
      this.db.transactionAsync(async tx => {
        try {
          const {rows} = await tx.executeSqlAsync(sql, values);
          resolve(rows as any);
        } catch (error) {
          reject('error: sql insert execute error');
        }
      });
    });
  }

  public async update<T = any>(sql: string, values: any[]) {
    return new Promise<T>((resolve, reject) => {
      this.db.transactionAsync(async tx => {
        try {
          const {rows} = await tx.executeSqlAsync(sql, values);
          resolve(rows as any);
        } catch (error) {
          reject('error: sql update execute error');
        }
      });
    });
  }

  public async delete(sql: string, values: any[]) {
    return new Promise<boolean>((resolve, reject) => {
      this.db.transactionAsync(async tx => {
        try {
          await tx.executeSqlAsync(sql, values);
          resolve(true);
        } catch (error) {
          reject('error: sql delete execute error');
        }
      });
    });
  }

  public async close() {
    return new Promise<boolean>((resolve, reject) => {
      try {
        this.db.closeAsync();
        resolve(true);
      } catch (error) {
        reject('error: sql close execute error');
      }
    });
  }
}
