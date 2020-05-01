import React, { useState } from 'react'

import styled from 'styled-components'
import EditoBase from './components/EditorBase'
import { convertToRaw } from 'draft-js'
import ReactJson from 'react-json-view'

const App = () => {

  const [examplesRaw, setExamplesRaw] = useState({
    basic: {},
  })

  return (
    <div>
      <h1>##Examples</h1>
      <hr />
      <h3>##Basic</h3>
      <Row>
        <Col>
          <EditoBase handleExternal={(newState) => setExamplesRaw({
            ...examplesRaw,
            basic: convertToRaw(newState.getCurrentContent())
          })}/>
        </Col>
        <Col>
        <ReactJson src={examplesRaw.basic} />
        </Col>
      </Row>
    </div>
  )
}

const Row = styled.div`
  display: flex;
  flex: 1;
`

const Col = styled.div`
  flex-direction: column;
  flex: 1;
`



export default App;
