import { openDB } from "$lib/config";

export const get = async () => {
  const db = await openDB();

  const sql = "SELECT * FROM todo";
  const result = await db.all(sql);

  return { body: { status: true, todos: result } };
};

export const post = async (request) => {
  const data = JSON.parse(request.body);
  const db = await openDB();

  const query = "INSERT INTO todo(body) VALUES (:body)";
  const params = {
    ":body": data.body,
  };

  const result = await db.run(query, params);

  const sql = "SELECT * FROM todo";
  const todos = await db.all(sql);
  
  if (result.lastID) {
    return {
      body: { status: true, todos },
    };
  } else {
    return {
      body: { status: false, todos },
    };
  }
};

export const del = async (request) => {
  const data = JSON.parse(request.body);
  const db = await openDB();

  const query = "DELETE FROM todo WHERE id = :id";
  const params = {
    ":id": data.id,
  };

  const result = await db.run(query, params);

  const sql = "SELECT * FROM todo";
  const todos = await db.all(sql);

  if (result.changes) {
    return {
      body: { status: true, todos },
    };
  } else {
    return {
      body: { status: false, todos },
    };
  }
};

export const put = async (request) => {
  console.log("dfghdfig");
  const data = JSON.parse(request.body);
  const db = await openDB();

  const query = "UPDATE todo SET done = :done WHERE id = :id";
  const params = {
    ":id": data.id,
    ":done": !data.done,
  };

  const result = await db.run(query, params);

  const sql = "SELECT * FROM todo";
  const todos = await db.all(sql);

  if (result.changes) {
    return {
      body: { status: true, todos },
    };
  } else {
    return {
      body: { status: true, todos },
    };
  }
};
