import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let result = document.cookie
    .split("; ")
    .find((row) => row.startsWith("status="))
    ?.split("=")[1];

  const createCookie = () => {
    if (result) {
      console.log("cookie already set");
    } else {
      console.log("cookie was not set yet, but now");
      document.cookie = "status=loggedIn; path=/; SameSite=None; Secure";
      setIsLoggedIn(true);
    }
  };

  const deleteCookie = () => {
    if (result) {
      document.cookie =
        "status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      console.log("cookie deleted");
      setIsLoggedIn(false);
    } else {
      console.log("cookie not found");
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
        >
          <span>Create Cookie</span>
        </button>
        <button
          className="bg-black text-white p-2 rounded mt-10 ml-5"
          onClick={deleteCookie}
        >
          <span>Delete Cookie</span>
        </button>
      </div>
      <div className="text-center mt-10 text-xl font-bold">
        {isLoggedIn ? (
          <h1 className="text-green-800">You are logged in</h1>
        ) : (
          <h1 className="text-red-800">You are not logged in</h1>
        )}
      </div>
    </div>
  );
}

export default App;
