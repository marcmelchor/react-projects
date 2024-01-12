import './App.css'

import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [
  {
    userName: 'apple',
    name: 'Apple',
    isFollowing: true
  },
  {
    userName: 'microsoft',
    name: 'Microsoft',
    isFollowing: false
  },
  {
    userName: 'marc_melchor_',
    name: 'Marc Melchor',
    isFollowing: true
  }
]

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        )
      }
    </section>
  )
}
