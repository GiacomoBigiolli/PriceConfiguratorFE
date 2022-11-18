import React from "react";
import {Message, Button, Select} from "semantic-ui-react";
import '../filecss/configurazione.css';
import Intestazione from './intestazione';
import DropDownList from "./dropDownList";

    class Configurazione extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                typology: []
            };
            this.generateDropDownList = this.generateDropDownList.bind(this);
            this.componentDidMount = this.componentDidMount.bind(this);
        }

        generateDropDownList(){
            let list = [];
            this.state.typology.map(i => {
                list.push(
                    <DropDownList typology={i}/>
                );
            })
            return list;
        }
    
        componentDidMount(){
            let typologyURL = 'http://localhost:3000/typology';
            fetch(typologyURL)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({Typology: data.Typology})
                })
                .catch(err => {
                    console.log(err);
                })
        }

        render () {

            return (
                <>
                    <Intestazione />
                        <div className = "spazia">
                            <center>
                                <div className = "spazia">
                                    <label>Typology: </label>
                                        <select name = 'Typology' id='Typology'>
                                            {this.generateDropDownList()}
                                        </select>
                                            <br />
                                    <label>Stroke: </label>
                                    <Select></Select>
                                        <br />
                                    <label>Diameter: </label>
                                    <Select></Select>
                                </div>
                                <div className = "spazia">
                                    <Button>Calcola prezzo</Button>
                                </div>
                                    <Message name = 'prezzo' id = 'prezzo'>Prezzo</Message>
                            </center>
                        </div>
                </>
            );
            
        }

    }

    export default Configurazione;