import React from 'react'

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://secure.gravatar.com/avatar/ddc1b32ee608ad129a157e54976e7516" alt="Avatar"></img>
                    <h1><small>Mr.</small> <br></br> Joshi</h1>
                </div>

                <div className="Badge__section-info">
                    <p>Frontend Developer/UI Designer</p>
                    <p>@therookie</p>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge