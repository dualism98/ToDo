import React from 'react'

export default function ListElement({text, id, onChange, check}){

    const classes = ['Listtext']

    if(check){
        classes.push('done')
    }

    return(
        <li>
            <span>
                <input type="checkbox" className="Checkbox" onChange={() => onChange(id)}/>
            </span>
            <p className={classes.join(' ')}>{text}</p>
        </li>
    )
}