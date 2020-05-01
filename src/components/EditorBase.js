import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import {Editor, EditorState} from 'draft-js'
import 'draft-js/dist/Draft.css'

const EditorBase = ({EditorStyle, ControlsStyle, WrapperStyles, handleExternal, ...props}) => {
		const [rich, setRich] = useState(EditorState.createEmpty())
		
		useEffect(() => {
			handleExternal && handleExternal(rich)
		}, [rich])

    return (
			<EditorWrapper style={WrapperStyles} className='Rich-txt_wrapper'>
				<div style={{height: 400, overflow: 'auto'}}>
					<Editor className='Rich-txt_editor' editorState={rich} onChange={setRich} />
				</div>
			</EditorWrapper>
    )
}

const section_styles = `
	border-radius: 5px;
	border: 1px solid lightgray;
	padding: 15px;
	padding-right: 0;
	margin: 5px 0;
`

const EditorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	${section_styles}
`

export default EditorBase