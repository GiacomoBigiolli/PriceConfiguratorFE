import React from "react";
import '../filecss/configurazione.css';
import Intestazione from './intestazione';
import DropDownList from "./dropDownList";
//import {Message, Button, Select, Grid} from "semantic-ui-react";

    class Configurazione extends React.Component {
        constructor (props) {
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
                    <div>
                        <br />
                        <div class = 'box'>
                            <center>
                                <div class = 'columns'>
                                    <div class = 'column'>
                                        <p class = 'title is-3'>
                                            Typology:
                                        </p>
                                    </div>
                                    <div class = 'column'>
                                        <div class = "select is-info">
                                            <select name = 'typology' id='typology'>
                                                {this.generateDropDownList()}
                                            </select>
                                        </div>
                                    </div>
                                    <div class = 'column'>
                                        <p class = 'title is-3'>
                                            Stroke:
                                        </p>
                                    </div>
                                    <div class = 'column'>
                                        <div class = 'select is-info'>
                                            <select name = 'stroke' id='stroke'>

                                            </select>
                                        </div>
                                    </div>
                                    <div class = 'column'>
                                        <p class = 'title is-3'>
                                            Diameter:
                                        </p>
                                    </div>
                                    <div class = 'column'>
                                        <div class = 'select is-info'>
                                            <select name = 'diameter' id = 'diameter'>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </center>
                            <br />
                        </div>
                            <br />
                        <div class = 'box'>
                            <center>
                                <button class = 'button is-info is-medium is-outlined'>
                                    Calcola prezzo
                                </button>
                            </center>
                            <br />
                        </div>
                        <div class = 'box'>
                            <center>
                                <section class='has-background-light p-5'>
                                    <p class = 'title is-3'>
                                        Prezzo
                                    </p>
                                </section>
                                <section class='section'>
                                    <p class='title is-4'>
                                        €
                                    </p>
                                </section>
                            </center>
                        </div>
                    </div>

            {/* <div className="spazia">
                    <div>
                        <div></div>
                            <center>
                                <div>
                                    <Grid columns={2}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <label>Typology:</label>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <select name = 'Typology' id='Typology'>
                                                    {this.generateDropDownList()}
                                                </select>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <label>Stroke: </label>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Select></Select>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <label>Diameter: </label>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Select></Select>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    <div className="spazia">
                                        <Button>Calcola prezzo</Button>
                                            <br /><br />
                                        <textarea readOnly disabled name = 'prezzo' id = 'prezzo'>Prezzo</textarea>
                                    </div>
                                </div>
                            </center>
                        <div></div>
                    </div>

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
                                    <textarea readOnly disabled name = 'prezzo' id = 'prezzo'>Prezzo</textarea>
                                    <Message name = 'prezzo' id = 'prezzo'>Prezzo</Message>
                            </center>
                        </div>
                </div> */}
                </>
            );

        }

    }

    export default Configurazione;