import React, { useState } from 'react';

export function TwitterCard({ avatar, name, username }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className='tw-cardInfo'>
      <header>
        <img src={avatar} alt={`Avatar of ${name}`} />
        <div>
          <strong>{name}</strong>
          <span>@{username}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleFollow} className={isFollowing ? 'following' : ''}>
          {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
      </aside>
    </article>
  );
}
