import React, { useState, useRef, useEffect } from 'react'
import { useSearchContext } from '../../../SearchProvider'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Icon from '../../../assets/icons/Icon'
import './Results.css'
import CodeV2 from '../../../../CodeEditor/CodeV2'
import Fade from '../../../../Fade'
// import { useMountTransition } from '../../hooks/useMountTransition'


export default function ResultRow({ setCurrentRow, currentRowIndex, searchTerm, index, className }) {

  const rowRef = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const [show, setShow] = useState(false);
  // const hasTransitionedIn = useMountTransition(isMounted, 100);


  const handleExpand = () => {
    setShow(show => !show);
    toggleExpand();
  }

  return (
    <>
      <div style={{
        position: 'relative', marginBottom: '16px', transition: 'all 1s ease-in-out'
      }}>
        <div style={{ backgroundColor: '#2b2b2b', borderTopLeftRadius: '8px', transition: 'all 1s ease-in-out', borderTopRightRadius: '8px' }} >

          <SuggestionsWrapper
            ref={rowRef}
            key={className}
            onMouseEnter={() => setCurrentRow(index)}
            onMouseLeave={() => setCurrentRow(-1)}
            onMouseOver={() => setCurrentRow(index)}
            onMouseOut={() => setCurrentRow(-1)}
          >

            <SuggestionsRowLeft>
              <div className="suggestions">
                <div className="suggestions-text">
                  <HighlightedText className={className} searchTerm={searchTerm} />
                </div>
              </div>
              <ResultsSubWrapper>
                <div>
                  <Icon size={24} color={'grey'} id="subdirectory_arrow_right" />
                </div>

                <TagBubble text={'@max : 1080'}></TagBubble>
                <TagBubble text={'@max : 1080'}></TagBubble>
                <TagBubble text={'@max : 1080'}></TagBubble>


                <div className="suggestion-bottom-text">
                  {/* <Icon id="component" color={'lightblue'} size={24}></Icon> */}
                  {/* or #<a href="#" id="hashtag">hashtag</a> */}
                </div>
              </ResultsSubWrapper>
            </SuggestionsRowLeft>



            <SuggestionsRowRight>
              <Icon color={'grey'} id="component" size={22}></Icon>
              <Icon color={'grey'} id="mark" size={22}></Icon>
            </SuggestionsRowRight>

          </SuggestionsWrapper>


          <Fade show={show}>
            {isExpanded && (
              <div className={'code-editor-selected'}>
                <CodeV2></CodeV2>
              </div>
            )}
          </Fade>


        </div>


        <BottomBar onClick={handleExpand} >
          <Icon size={16} color={'grey'} id="drop-down"> </Icon>
        </BottomBar>
        <div className='result-item-divider'> </div>

      </div>
    </>

  )
}



function SuggestionsWrapper({ children, index, currentRowIndex, ...props }) {
  return (
    <div className={`suggestions-wrapper ${index === currentRowIndex ? 'suggestions-wrapper selected' : ''}`} {...props}>
      {children}
    </div>
  )
}



  function BottomBar({ children, ...props }) {
    return (
      <div {...props} className="bottom-bar">
        {children}
      </div>
    )
  }


  function SuggestionsRowRight({ children }) {
    return (
      <div className="suggestion-row_right">
        {children}
      </div>
    )
  }


  function SuggestionsRowLeft({ children }) {
    return (
      <div className="suggestion-row_left">
        {children}
      </div>
    )
  }


  function TagBubble({ text }) {
    return (
      <div className="media-query-bubble">
        <div className="media-query_text">{text}</div>
      </div>
    )
  }


  function ResultsSubWrapper({ children }) {
    return (
      <div className="search-result-sub-wrapper">
        {children}
      </div>
    )
  }


  const HighlightedText = ({ className, searchTerm }) => {
    const parts = className.split(searchTerm);
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="highlight">{searchTerm}</span>
            )}
          </React.Fragment>
        ))}
      </>
    )
  }