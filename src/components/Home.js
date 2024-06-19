import React, { useEffect, useState } from 'react';
import ItemPanel from './ItemPanel';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { editItem, removeItem } from '../redux/actions/items';

const Home= (props)=>{
    //get items from store
    const items= useSelector(state=> state.items)
    const dispatch= useDispatch();

    //test useEffect on Component mount
    useEffect(()=>{
        // Alert.alert('Home component','Home component mounted')
        Alert.alert('props.items',JSON.stringify(props.items))
    },[])

    //state to hold items for component
    const [componentItems, setComponentItems] = useState(props.items);
    //update items when store changes
    useEffect(()=>{
            setComponentItems(items);
            // Alert.alert('store',JSON.stringify(items.map(item=>item.name)))
        }, [items]
    );

    // funcs
    modifyItem=( action )=>{
        modifiedItems= componentItems.map((item)=>{
            if (item.id === action.id) {
                return {...item, ...action.updates}
            } else {
                return item
            }
        })
        setComponentItems(modifiedItems);
        // dispatch(editItem(action))
        dispatch(editItem(action.id, action.updates))
    }
    deleteItem=(id)=>{
        dispatch(removeItem({id}))
    }

    return (
    <>
        {componentItems.map( 
            (item,i)=><ItemPanel del={deleteItem} onChange={modifyItem} key={i} item={item}/>
        )}
    </>
)}
export default Home;