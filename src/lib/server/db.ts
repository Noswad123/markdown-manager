import Database from 'better-sqlite3';
import {DB_PATH} from '$env/static/private';
import {type MdFile} from './types';

const dbPath=DB_PATH;

console.log(DB_PATH);
if (!dbPath) {
  throw new Error('Must define DB_PATH!');
}

const db = new Database(dbPath, { verbose: console.log});

export function getMdFiles(limit = 50): MdFile[] {
  const sql = `select * from files where extension='md' limit ${limit};`;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all();
  return rows as MdFile[];
}


