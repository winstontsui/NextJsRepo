import React from "react";

// Here we define the shape of our user objects.
interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  /* Fetch function allows us to send http requests to the backend.
  This returns a promise, so we have to wait to get the response.
  It is a built-in javaScript function used to make HTTP requests.

  One thing I can do is to not have a cache:
   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  
  Another is to keep data fresh for only a certain period of time.
  */

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users:</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <br></br>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
