import React from 'react'
import PageDescription from "../src/page_description"
import {Divider} from 'antd'

import {Note, Notes} from '../src/note'

const pageDescriptionText = "Here I write small tween-like notes and postmortems from my experience. They will serve me as reminders and may be helpful to others."
  export default () => 
    <div>
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
   </div>
