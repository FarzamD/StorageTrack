import React, { useEffect, useState } from 'react';
import ItemPanel from './ItemPanel';
import { connect, useSelector } from 'react-redux';
import { Alert } from 'react-native';

const Home= (props)=>{
    //get items from store
    const items= useSelector(state=> state.items)

    //test useEffect on Component mount
    // useEffect(()=>{
    //     // Alert.alert('Home component','Home component mounted')
    //     Alert.alert('props.items',JSON.stringify(props.items))
    // },[])

    //state to hold items for component
    // const [componentItems, setComponentItems] = useState(props.items);
    const [componentItems, setComponentItems] = useState(props.items);
    //update items when store changes
    useEffect(()=>{
            setComponentItems(items);
            // Alert.alert('store',JSON.stringify(items.map(item=>item.name)))

        }, [items]
    );

    return (
    <>
        {componentItems.map( 
        (item,i)=><ItemPanel key={i} item={item}/>
        )}
    </>
)}
// const mapStateToProps = (state) => ({
//     items: state.items
// });
// export default connect(mapStateToProps)(Home);
export default Home;