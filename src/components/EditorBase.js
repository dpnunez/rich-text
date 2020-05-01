import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'

const EditorBase = ({EditorStyle, ControlsStyle, WrapperStyles, handleExternal, ...props}) => {
		const [rich, setRich] = useState(EditorState.createEmpty())
		
		// Manage styles/actions triggered by key comands
		// Ex.: (Bold = ctrl + b, Italic = ctrl + i, Underline = ctrl + u)
			const handleKeyCommand = (command, editorState) => {
				const newState = RichUtils.handleKeyCommand(editorState, command);
				newState && setRich(newState)
			}


		// Manage Editor state outside the Editor component
		useEffect(() => {
			handleExternal && handleExternal(rich)
		}, [rich])

    return (
			<EditorWrapper style={WrapperStyles} className='Rich-txt_wrapper'>
				<div style={{height: 400, overflow: 'auto'}}>
					<Editor
						className='Rich-txt_editor'
						editorState={rich}
						onChange={setRich}
						handleKeyCommand={handleKeyCommand}
					/>
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