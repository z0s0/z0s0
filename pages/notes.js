import React from 'react'
import PageDescription from "../src/page_description"
import {Col, Divider} from 'antd'

import {Note, Notes} from '../src/note'

const pageDescriptionText = 
  <article>
    <p>Here I write small tweet-like notes and postmortems from my experience. They will serve me as reminders and may be helpful to others.</p>
    <p>Common notes marked as ✅, postmortems 😠 and ideas 💡</p>
    <p>And important. If you are disagree please PM me, I'd like to discuss.</p>
  </article>
  
  export default () => 
    <Col offset={6}>
        <PageDescription children={pageDescriptionText}/> 
        <Divider/>

        {
            Notes.map((noteProps, idx) => 
            <>
              <Note key={idx} {...noteProps}/>
              <Divider/>
            </>  
        )
        }
   </Col>
