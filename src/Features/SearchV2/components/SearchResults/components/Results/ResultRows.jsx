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

  return (
    <>
      <div style={{
        position: 'relative', marginBottom: '16px', transition: 'all 1s ease-in-out'
      }}>
        <div style={{ backgroundColor: '#2b2b2b', borderTopLeftRadius: '8px', transition: 'all 1s ease-in-out', borderTopRightRadius: '8px' }} >
          <div
            ref={rowRef}
            // ref={animationParent}
            // onClick={() => console.log('searched', currentRowIndex)}
            className={`suggestions-wrapper ${index === currentRowIndex ? 'suggestions-wrapper selected' : ''}`}
            key={className}
            onMouseEnter={() => setCurrentRow(index)}
            onMouseLeave={() => setCurrentRow(-1)}
            onMouseOver={() => setCurrentRow(index)}
            onMouseOut={() => setCurrentRow(-1)}
          >
            <div className="suggestion-row_left">

              <div className="suggestions">
                <div className="suggestions-text">
                  <HighlightedText className={className} searchTerm={searchTerm} />
                </div>
              </div>

              <div className="search-result-sub-wrapper">
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
              </div>
            </div>

            <div className="suggestion-row_right">
              <Icon color={'grey'} id="component" size={22}></Icon>
              <Icon color={'grey'} id="mark" size={22}></Icon>
            </div>

          </div>


          <Fade show={show}>
            {isExpanded && (
              <div className={'code-editor-selected'}>
                <CodeV2></CodeV2>
              </div>
            )}
          </Fade>


        </div>


        <div onClick={() => { setShow(show => !show); toggleExpand(); }} className="bottom-bar" >
          <Icon size={16} color={'grey'} id="drop-down"> </Icon>
        </div>
        <div className='result-item-divider'> </div>

      </div>
    </>

  )
}



function TagBubble({ text }) {
  return (
    <div className="media-query-bubble">
      <div className="media-query_text">{text}</div>
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