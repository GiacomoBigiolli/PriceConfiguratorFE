import React from "react";
import {Message, Button, Select} from "semantic-ui-react";
import '../filecss/configurazione.css';
import Intestazione from './intestazione';

    class Configurazione extends React.Component {

        render () {

            return (
                <>
                    <Intestazione />
                        <div className="spazia">
                            <div className="spazia">
                                <Select></Select>
                                    <br />
                                <Select></Select>
                                    <br />
                                <Select></Select>
                            </div>
                            <div className="spazia">
                                <Button>Calcola prezzo</Button>
                            </div>
                                <Message name='prezzo' id='prezzo'>Prezzo</Message>
                        </div>
                </>
            );
        }

    }

    export default Configurazione;