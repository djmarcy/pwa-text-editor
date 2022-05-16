import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// DONE: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Goal: Store content
  const contactDb = await openDB("jate", 1);

  const tx = contactDb.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");

  const request = store.put({ jate: content });

  const result = await request;
  console.log("🚀 - data saved to the database", result);

  console.error("putDb not implemented");
};

// DONE: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Goal: Get content from stored data
  const contactDb = await openDB("jate", 1);

  const tx = contactDb.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");

  const request = store.getAll();

  const result = await request;
  console.log("🚀 - data saved to the database", result);

  console.error("getDb not implemented");
};

initdb();
