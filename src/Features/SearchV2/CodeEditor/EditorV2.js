import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import "codemirror/theme/base16-dark.css"
import "codemirror/theme/monokai.css"
import "codemirror/theme/seti.css"
import "codemirror/theme/duotone-dark.css"
import "codemirror/theme/duotone-light.css"
import "codemirror/theme/icecoder.css"
import "codemirror/theme/idea.css"
import "codemirror/theme/mbo.css"
import "codemirror/theme/mdn-like.css"
import "codemirror/theme/midnight.css"
import "codemirror/theme/neo.css"
// import "codemirror/theme/night.css"
import "codemirror/theme/panda-syntax.css"
// import "codemirror/theme/rubyblue.css"

// import "codemirror/theme/xq-dark.css"
// import "codemirror/theme/xq-light.css"
// import "codemirror/theme/yeti.css"

import Icon from '../components/assets/icons/Icon'
// import 'codemirror/mode/xml/xml'
// import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
export default function EditorV2(props) {
  const {
    language,
    displayName,
    value,
    onChange,
    initialCode
  } = props
  const [open, setOpen] = useState(true)
  const [code, setCode] = useState(initialCode)

  function handleChange(editor, data, value) {
    setCode(value)
    onChange(value)
  }

  return (
    <div className={`editor-container`}>
      {/* <div className="editor-title">
        {displayName}
        <Icon id="clipboard" color={'grey'} size={20} ></Icon>

      </div> */}
      <ControlledEditor
        onBeforeChange={handleChange}
        value={code}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,

          lineWiseCopyCut: true,
          autoCloseBrackets: true,
          autoCloseTags: true,
          matchBrackets: true,
          matchTags: true,

          autoRefresh: true,
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
          highlightSelectionMatches: true,
          hintOptions: true,



          lint: true,
          mode: language,
          theme: 'base16-dark',
          lineNumbers: true
        }}
      >sd</ControlledEditor>
    </div>
  )
}
