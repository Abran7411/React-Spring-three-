import React from 'react'
import { Footer } from '@pmndrs/branding'

export default function Overlay({ ready, clicked, setClicked }) {
  return (
    <>
      <div className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${clicked && 'clicked'}`}>
        <div onClick={() => ready && setClicked(true)}>{!ready ? 'loading' : 'Welcome'}</div>
      </div>
      <Footer
        date="16. May"
        year="1999"
        link1={<a href="https://github.com/">Wayne Enterprises</a>}
        link2={<a href="https://google.com">Rennie-AB-GenZod4</a>}
      />
    </>
  )
}
