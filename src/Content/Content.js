import React from 'react';
import './Content.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt, faDungeon } from '@fortawesome/free-solid-svg-icons'

library.add(faSyncAlt, faDungeon)

const Content = () => (
    <div className="content">
        <a href="https://lineage2.com/" target="blank">
            <div className="content_button">
                <FontAwesomeIcon icon="dungeon" className="home_icon"/>
                <p>GO TO SITE</p>
            </div>
        </a>

        <div className="content_button">
            <FontAwesomeIcon icon="sync-alt" className="sync_icon"/>
            <p>FULL CHECK</p>
        </div>
    </div>
);

export default Content;