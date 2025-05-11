import React from 'react'
import "./Header.css" 
import { Search } from './Search'
import { Head } from './Head'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <>
        <Head />
        <Search />
        <Navbar />
    </>
  )
}

export default Header