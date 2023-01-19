import React, { useState, useEffect, useRef, forwardRef } from 'react';
// import SearchBar from './Components/SearchBar/SearchBar';
// import CodeExtractor from '../../Parser/codeExtractor';
// import WebflowExtractor from '../../Parser/webflowExtractor';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useSearchDispatch, useSearchContext } from './SearchProvider';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import SearchProvider from './SearchProvider';
import Filter from './Filter/Filter';
import TabParent from '../Tabs';
// const testdata = require('../../testData.json')
// const testCSS = require('../../test.css');



const SearchV2 = forwardRef(function SearchV2(props, searchRef) {

  //

  return (
    <>

      <div
        ref={searchRef}
        className = "ssddddd"
        style={{
          // paddingLeft: '200px',
          position: 'relative',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          overflow: 'hidden',
          width: '700px',
          backgroundColor: '#181818',
          paddingBottom: '10px',
          marginBottom: '10px',
        }}>
        <SearchProvider>
          <SearchBar>
            {/* <Filter></Filter> */}
          </SearchBar>

          <TabParent >
            <SearchResults></SearchResults>
            <SearchResults></SearchResults>
            <SearchResults></SearchResults>
          </TabParent>
          {/* <SearchResults></SearchResults> */}

        </SearchProvider>


        <div style = {{marginBottom: '20px', paddingBottom:'20px'}}></div>
      </div>
      {/* <div>{searchTerm}</div>
      <button onClick={() => { handleSearch() }}>add</button>
      <button onClick={() => { dispatch({ type: 'search', payload: 'hi there' }) }}>add</button> */}
    </>
  )






})


export default SearchV2;