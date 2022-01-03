import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Gerçek zamanlı sohbet uygulaması WTUC <span role="img" aria-label="emoji">💬</span></h1>
      <h2>React, express, node ve socket.io ile oluşturuldu <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Geliştiriciler: Rıdvan KAHVECİ<span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Şuanda sohbet eden kişiler:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;