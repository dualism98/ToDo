import React from 'react'

export default function ListElement({data, size}){
    var count = 0
    
    for (let i = 0; i < size; i++){
        (data[i][2] === false ? count++ : count = count)
    }

    
    if (count !== 0){
      return(
        <div className="Footer">
          <p className="Footer-text">{count} items left</p>
        </div>
      )
    }
    else return(<div></div>)

}