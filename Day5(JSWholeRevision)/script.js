let getJson = async () => {
  let response = await fetch("zlm.json");
  if (response === 404) {
    throw new Error("Invalid Link");
  }
  let data = await response.json();
  return data;
};
getJson()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
