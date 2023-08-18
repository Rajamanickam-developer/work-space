import { Component } from "react";
import Data from "./TableBody/tableBody"

class Props extends Component{
    render(){
        const {charactersData, deleteCharacter} = this.props;
     return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job domain</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <Data deleteCharacter={deleteCharacter} charData={charactersData}/>

            </table>
        )
    }
}

export default Props;