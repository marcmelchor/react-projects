import { useState } from 'react'

import './TwitterFollowCard.css'

export function TwitterFollowCard({ children, userName = 'unknown', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const buttonText = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing ?
    'follow-card__follow-button follow-card__follow-button--is-following' :
    'follow-card__follow-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='follow-card'>
      <header className='follow-card__header'>
        <img
          className='follow-card__avatar'
          alt="The avatar from midudev"
          src={`https://unavatar.io/${userName}`}/>
        <div className='follow-card__info'>
          <strong className='follow-card__info__name'>{children}</strong>
          <span className='follow-card__info__user'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          onClick={handleClick}
          className={buttonClassName}>
          <span className='follow-card__follow-button__text'>
            {buttonText}
          </span>
          <span className='follow-card__follow-button__text--unfollow'>
            Unfollow
          </span>
        </button>
      </aside>
    </article>
  )
}
