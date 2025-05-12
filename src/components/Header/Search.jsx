import React from 'react'
import logo from '../../assets/logo.png'

export const Search = () => {
  return (
    <section className='search'>
      <div className="container c_flex">
        <div className="logo width">
          <img src={logo} alt="" className='logo-size'/>
        </div>
        <div className="search-box f_flex">
          <i className='fa fa-search'></i>
          <input type="text" placeholder='Search and hit enter...' />
          <span>All Category</span>
        </div>
        <div className="icon f_flex width">
          <i className='fa fa-user icon_circle'></i>
        </div>
      </div>
    </section>
  )
}

export default Search