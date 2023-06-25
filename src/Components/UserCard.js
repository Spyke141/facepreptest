import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../LoadingSpinner/Spinner";

function UserCard() {
  const [user, setUser] = useState([]);
  const [pageSize, setPageSize] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1500));

    const res = await fetch(
      `https://randomuser.me/api/?results=20&page=${pageSize}`
    );
    const data = await res.json();

    const newUser = [...user, ...data.results];
    setUser((oldUserList) => [...oldUserList, ...newUser]);
    setPageSize((oldPageSize) => oldPageSize + 1);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
    console.log('useEffect for fetching user data called');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const InfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchUser();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", InfiniteScroll);
    return () => {
      window.removeEventListener("scroll", InfiniteScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="row">
        {user.map((user) => (
          <div className="col-md-3 col-lg-2 col-sm-4 my-2 rounded-3 text-bg-secondary mx-2" key={user.uuid}>
            <img src={user.picture.large} alt={user.picture.medium} className="my-2 text-center"/>
            <div className="card-body text-bg-secondary text-center my-2">
              <h6>{!user.id.value ? 'usertemp9911' : user.id.value}</h6>
              <h6>{user.name.first} {user.name.last}</h6>
              <h6>Age : {user.dob.age}</h6>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">{loading && <Spinner></Spinner>}</div>
    </>
  );
}

export default UserCard;
