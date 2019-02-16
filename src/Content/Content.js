import React, { Component } from 'react';
import './Content.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faSyncAlt)

const Content = () => (
    <div className="content">
        <div className="content_button">
            <p>GO TO SITE</p>
        </div>

        <div className="content_button">
            <p><FontAwesomeIcon icon="sync-alt" className="sync_icon"/> <spacer width="15" type="block"> </spacer>FULL CHECK</p>
        </div>
    </div>
);

export default Content;