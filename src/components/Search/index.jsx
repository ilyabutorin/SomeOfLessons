import React from 'react'
import s from './style.module.css'

export default function Search({search_handler}) {

    const search = event => {
        search_handler(event.target.value);
    };

  return (
    <div>
        <input className={s.input} onChange={search} type="text" placeholder='Type here' name='title'/>
        <button>Add</button>
    </div>
    
  )
}

// добавить компонент Search с полем ввода и при вводе значения оно должно выводитьсяё
  // в консоль