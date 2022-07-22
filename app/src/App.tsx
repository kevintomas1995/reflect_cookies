import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let result = document.cookie
    .split("; ")
    .find((row) => row.startsWith("status="));

  const createCookie = () => {
    if (result) {
      return;
    } else {
      const now = new Date();
      const time = now.getTime();
      const expireTime = time + 3600000;

      now.setTime(expireTime);
      document.cookie = `status=loggedIn; path=/; expires=${now.toUTCString()}`;

      setIsLoggedIn(true);
    }
  };

  const deleteCookie = () => {
    if (result) {
      document.cookie =
        "status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    result && setIsLoggedIn(true);
  }, [result]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold text-3xl text-center">
          Simple react cookie example
        </h1>
      </div>
      <div>
        <button
          className="bg-black text-white p-2 rounded mt-10"
          onClick={createCookie}
          id="createCookie"
        >
          <span>Create Cookie</span>
        </button>
        <button
          className="bg-black text-white p-2 rounded mt-10 ml-5"
          onClick={deleteCookie}
          id="deleteCookie"
        >
          <span>Delete Cookie</span>
        </button>
      </div>
      <div className="text-center mt-10 text-xl font-bold" id="statusText">
        {isLoggedIn ? (
          <h1 className="text-green-800">You are authenticated!</h1>
        ) : (
          <h1 className="text-red-800">You are NOT authenticated</h1>
        )}
      </div>
    </div>
  );
}

export default App;
