import React, { useState } from 'react'
import { Alert, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { put } from 'redux-saga/effects'
import { SET_CART_DATA } from '../../redux/CounterAction'

export const ListComponent = ({ route }: any) => {
  const [isAdd, setIsAdd] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.cartdata.cartList||[])


  const addToCart = () => {
    const data = route.params?.cartData
    const dataId = data.id
    console.log('this is selector checking ------',selector)
      const Item = selector.find((item: any) => item.id === dataId)
      console.log('this is selctor lenght------')
      if (Item) {
        console.log('thhis is item checkimg ----------')
        const index = selector.find((item: any) => item.id === dataId);
            const updatedCart = selector.map((item: { id:any, quantity: number }) => {
                if (item.id === dataId) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            console.log("this is updated cart data ------",updatedCart)
            dispatch({ type: SET_CART_DATA,data:updatedCart });


        
        // console.log('this is updated price data---', index)
        Alert.alert("Increased quantity of the product in the cart");


      }
      else {
        const newItem = {...data,quantity:1}
        const updatedItems = [...selector,newItem]
        dispatch({ type: SET_CART_DATA, data:updatedItems });
        Alert.alert("Product added ")

      }
    }
  const removeFromCart = () => {
    const data = route.params?.cartData
    console.log('this is removed data', selector)
    const dataId = data.id
    let index = selector.findIndex((item: any) => item.id == dataId.id)
    selector.pop(index);
    dispatch({ type: SET_CART_DATA, selector });
    Alert.alert('item removed');
    setIsAdd(true)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.card}>
        <View style={styles.container}>
          <Image
            source={{ uri: route.params?.cartData.image }}
            style={styles.image}
          />
          <Text style={styles.title}>
            {route.params?.cartData.title}
          </Text>
          <Text style={styles.title}>
            Price: $ {route.params?.cartData.price}
          </Text>
          <Text style={styles.body}>
            {route.params?.cartData.description}
          </Text>
          <TouchableOpacity >
            {isAdd ? <Text style={styles.button} onPress={addToCart}>Add to Cart</Text> : <Text style={styles.button} onPress={removeFromCart}>Remove From Cart</Text>}
          </TouchableOpacity>

        </View>
      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,

  },
  card: {
    backgroundColor: '#F7F9F2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    height: '40%',
    width: '90%',
    borderRadius: 20,
    resizeMode: 'stretch'

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontFamily: 'Roboto',
    color: '#333',
    fontWeight: 'bold',
    padding: 5
  },
  body: {
    fontSize: 15,
    color: 'black',
    padding: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'orange',
    padding: 10,
    color: 'black',
    fontWeight: '800'

  }
})
