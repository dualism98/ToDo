import React from 'react'

export default function ListElement({data, size, onClick}){
    var count = 0
    
    for (let i = 0; i < size; i++){
        (data[i][2] === false ? count++ : count = count)
    }
    
    if (data.length !== 0){
      return(
        <div className="Footer">
          <p className="Footer-text">{count} items left</p>
          <input type="button" onClick={() => onClick(0)} className="All" value="All"/>
          <input type="button" onClick={() => onClick(1)} className="All" value="Active"/>
          <input type="button" onClick={() => onClick(2)} className="Completed" value="Completed"/>
          <input type="button" onClick={() => onClick(3)} className="Completed" value="Delete All"/>    
        </div>
      )
    }
    else return(<div><p>Пустой список :с</p></div>)

}
