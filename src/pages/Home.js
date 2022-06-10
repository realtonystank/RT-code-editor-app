import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };
  const joinRoom = (e) => {
    if (!roomId || !userName) {
      toast.error("Room Id and username is required");
      return;
    }

    //Redirect

    navigate(`/editor/${roomId}`, {
      state: {
        username: userName,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          src="/code-sync.png"
          alt="code-sync-logo"
          className="homePageLogo"
        ></img>
        <h4 className="mainLabel">Paste Inviation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          ></input>
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            onKeyUp={handleInputEnter}
          ></input>
          <button onClick={joinRoom} className="btn joinBtn">
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then &nbsp;
            <a href="" onClick={createNewRoom} className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Realtime Code Editor &nbsp;// <a href="#">Code Sync</a> //
        </h4>
      </footer>
    </div>
  );
};

export default Home;
