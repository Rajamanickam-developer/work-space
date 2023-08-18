import { Component } from "react";
import Props from "./components/props"
import Styles from "../src/assets/style.css"

class App extends Component{


  state = {
    tableData : [
      {
        name: "Raj",
        job: "Full Stack Developer"
      },
      {
        name: "Manickam",
        job: "Data Analyst"
      },
      {
        name: "Ajith",
        job: "Fronted Developer"
      },
      {
        name: "Siva",
        job: "Backend Developer"
      }
    ]
  }

  deleteCharacter =(index)=>{
    const {tableData} = this.state;

    let filtered = tableData.filter((character,ind)=>{
      return ind!==index;
    })

    this.setState({tableData:filtered})
  }

  render(){
    const {tableData} = this.state;

    return (
      <>
      <Props deleteCharacter={this.deleteCharacter} charactersData={tableData}/>
  
      </>
    );

  }


}

export default App;
