import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div>
          <img className="dpu-logo" src="https://www.dpu.edu.tr/app/views/panel/ckfinder/userfiles/1/images/logolar/dpu-logo1.png" alt="" />
        </div>
        <h1 className="heading">WTUC</h1>
        <div>
          <input placeholder="İsim" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Oda Numarası" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Giriş Yap</button>
        </Link>
      </div>
    </div>
  );
}
