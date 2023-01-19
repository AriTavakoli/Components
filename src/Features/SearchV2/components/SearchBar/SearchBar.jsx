import React, { useState, useEffect, useRef } from 'react';
import { useSearchDispatch, useSearchContext } from '../SearchProvider';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './SearchBar.css'
import Icon from '../assets/icons/Icon';
import Settings from '../Settings/Settings';
import Fade from '../../Fade';
import useOnClickOutside from '../hooks/useOnClickOutside';
import $ from 'jquery';


function SearchBar({ children }) {
  const { searchTerm, handleSearch } = useSearchContext();
  const { selectedCategories, toggleCategory } = useSearchContext();
  const [show, setShow] = useState(false);
  const settingsRef = useRef();

  const toggleSettings = () => { setShow(!show); }

  useOnClickOutside(settingsRef, () => setShow(false));


  return (
    <>
      <div>
        <div >
          <div
            className="search-bar-container" >
            <div className="search-bar">
              <div className="search-icon-container">
                <Icon id="search" size={18} color={"grey"} />
                {/* <SearchIcon /> */}
              </div>
              <div className="filter-holder">
                {selectedCategories.map((category) => {
                  return (
                    <div key={category.id} className="filter-button" onClick={() => toggleCategory(category)}>
                      <span>{category.name}</span>
                      <svg onClick={() => toggleCategory(category)} width="12" height="12" style={{ alignItems: 'center' }}>
                        <path fill="white" d="M2 2L10 10M10 2L2 10" stroke="white" stroke-width="2" />
                      </svg>
                    </div>
                  )
                })}
                <input className="search-bar-input" autoFocus="autoFocus" type="text" onChange={(e) => { handleSearch(e.target.value) }} value={searchTerm} placeholder="Find anything..." />
              </div>
              <div ref={settingsRef} className="ex-icon" >
                <Icon id="settings" color={show ? "white" : "grey"}
                  onClick={() => { toggleSettings() }} size={20} />
                <Fade show={show}>
                  <Settings ></Settings>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default SearchBar;