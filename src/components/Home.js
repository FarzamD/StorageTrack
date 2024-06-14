import React from 'react';
import ItemPanel from './ItemPanel';

export default (props)=>(
  props.items.map( 
    (itm,i)=><ItemPanel key={i} item={itm}/>
  )
)
