import React from 'react'
import logo from './logo.svg'
import './Home.css'
import { Link } from 'react-router-dom'

function HomePageView() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>리액트로 만든 토이프로젝트 게시판</p>
        <Link to="/board">Go to Main</Link>
      </header>
    </div>
  )
}

export default HomePageView
