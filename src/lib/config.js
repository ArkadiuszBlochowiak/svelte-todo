import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const DB_FILENAME = "./data/todos.sqlite3.db";

export const openDB = async () => {
  return open({
    filename: DB_FILENAME,
    driver: sqlite3.Database,
  });
};
