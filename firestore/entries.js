module.exports = (collectionName, doc, recordCounters, writeRecord) => {
  console.log(doc);
  return {
    id: doc["firestore_id"],
    date: doc.date,
    capacity: doc.capacity,
    uid: doc.userId,
  };
};
