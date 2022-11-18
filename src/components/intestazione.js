import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../filecss/header.css';
import logo from '../img/logoCypag.svg'

    class intestazione extends React.Component {

        render () {

            return (
                <>
                    <div className = 'sfondoHeader'>
                        <img src = {logo} alt = '' className = 'imgLogo'></img>
                    </div>
                </>
            );

        }
    }

    export default intestazione;