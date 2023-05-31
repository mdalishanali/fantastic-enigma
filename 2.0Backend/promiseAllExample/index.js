// Example for Promise.all, resolve , reject
// this is psuedo code
const findAll = async () => {
  try {
    const users = Users.find({});
    const products = users.find({});
    let [users, products] = await Promise.all([users, products]);
    return {
      users,
      products,
    };
  } catch (error) {}
};

function fetchData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 === 0) {
        resolve(`Even value: ${value}`);
      } else {
        reject(`Odd value: ${value}`);
      }
    }, 2000);
  });
}

fetchData(5);
