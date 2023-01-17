import React, { useState, useEffect } from "react";
import EditorV2 from "./EditorV2";
import './styles.css'

function CodeV2() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setSrcDoc(`
  //       <html>
  //         <body>${html}</body>
  //         <style>${css}</style>
  //         <script>${js}</script>
  //       </html>
  //     `);
  //   }, 250);

  //   return () => clearTimeout(timeout);
  // }, [html, css, js]);

  return (
    <>
      <div className="pane">

        <EditorV2
          initialCode={`.classExample {
    color: red;
}`}
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />

      </div>

    </>
  );
}

export default CodeV2;
