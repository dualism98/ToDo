import React from 'react'

export default function ListElement({text, id, onChange, onClick, check}){

    const classes = ['Listtext']
    var checker = false
    if(check === 'true'){
        classes.push('done')
        checker = true
    }

    return(
        <li>
            <span>
                <input type="checkbox" className={'Checkbox'} checked={checker} onChange={() => onChange(id)}/>
            </span>
            <p className={classes.join(' ')}>{text}</p>
            <input type="button" className="Delete" onClick={() => onClick(id)} value='&times;' />
        </li>
    )
}
