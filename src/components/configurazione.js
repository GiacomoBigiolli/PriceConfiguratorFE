import React from "react";
import {Message, Button, Select} from "semantic-ui-react";
import '../filecss/configurazione.css';
import Intestazione from './intestazione';
import DropDownList from "./dropDownList";

    class Configurazione extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                tipology: []
            };
            this.generateDropDownList = this.generateDropDownList.bind(this);
            this.componentDidMount = this.componentDidMount.bind(this);
        }

        generateDropDownList(){
            let list = [];
            this.state.tipology.map(i => {
                list.push(
                    <DropDownList tipology={i}/>
                );
            })
            return list;
        }
    
        componentDidMount(){
            let tipologyURL = 'http://localhost:3000/tipology';
            fetch(tipologyURL)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({tipology: data.tipology})
                })
                .catch(err => {
                    console.log(err);
                })
        }

        render () {

            return (
                <>
                    <Intestazione />
                        <div className="spazia">
                            <center>
                                <div className="spazia">
                                    <select name='tipology' id='tipology'>
                                        {this.generateDropDownList()}
                                    </select>
                                        <br />
                                    <Select></Select>
                                        <br />
                                    <Select></Select>
                                </div>
                                <div className="spazia">
                                    <Button>Calcola prezzo</Button>
                                </div>
                                    <Message name='prezzo' id='prezzo'>Prezzo</Message>
                            </center>
                        </div>
                </>
            );
        }
    }

    export default Configurazione;