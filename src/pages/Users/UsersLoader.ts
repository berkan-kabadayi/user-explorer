export const usersLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Albumd could not be fetched");
  }

  const users = await response.json();
  return users;
};
