

const Data = (props)=>{
    const {charData, deleteCharacter} = props;

    const value = charData.map((character, index)=>{
        return (
        <tr key={index}>
            <td>{character.name}</td>
            <td>{character.job}</td>
            <td><button onClick={()=>{deleteCharacter(index)}}>Delete</button></td>
        </tr>)
    });

 return(
    <tbody>
        {value}
    </tbody>
 )
}

export default Data;