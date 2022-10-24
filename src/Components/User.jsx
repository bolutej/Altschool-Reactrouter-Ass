import React from "react";
import { useEffect, useState } from "react";
import Contact from "./Contact";

const User = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = 10;

  const getProfile = async (page) => {
    setIsloading(true);
    const data = await fetch(
      `https://randomuser.me/api/?page=${page}&seed=4d1a9d8ef9f34996`
    );
    const response = await data.json();
    setUser(response.results[0]);
    setIsloading(false);
  };

  useEffect(() => {
    getProfile(currentPage);
  }, [currentPage]);

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <div className="pages">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      {[...Array(pages).keys()].map((_, index) => (
        <button
          key={index}
          className="buttons"
          style={{
            backgroundColor:
              index + 1 === currentPage ? "black" : "transparent",
            color: index + 1 === currentPage ? "white" : "black",
          }}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={currentPage === pages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

      <Contact user={user} />
      <p>
        Pages: {currentPage} of {pages}
      </p>
    </div>
  );
};

export default User;
