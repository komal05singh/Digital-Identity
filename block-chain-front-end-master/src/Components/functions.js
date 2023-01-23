const parseData = (data) => {
  const parsedData = [];
  Object.keys(data).map((key) => {
    const single_data = data[key];
    parsedData.push({
      id: single_data["_id"]["$oid"],
      docName: single_data["documentName"],
      date: single_data["timestamp"]["$date"],
      userName: single_data["userName"],
      details: single_data["documentData"],
      shared_with: ["username1", "username2", "username2"],
    });
  });
  return parsedData;
};

export { parseData };
