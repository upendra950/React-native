import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { SET_CART_DATA } from '../../redux/CounterAction'

export const Cart = () => {
  const dispatch = useDispatch();
  const cartRedux  = useSelector((state:any)=>state.cartdata.cartList||[])
  const [isCart, setIsCart] = useState(true)
  const [cartData,setCartData]=useState<any[]>([]);
    // console.log('this is cart',cartRedux)

  
useEffect(()=>{
   setCartData(cartRedux);
   if(cartRedux.length>0){
    setIsCart(false)
    
   }

})

const deleteItem =(product:any)=>{
  const updatedCart = cartRedux.filter((item:any)=>item.id !== product.id)
    if(updatedCart.length==0){
      setIsCart(true);
    }
    dispatch({ type: SET_CART_DATA,data:updatedCart });
}
  return (
    <SafeAreaView style={styles.safeArea}>
      {isCart?<View style={styles.cart}><Text style={styles.cartText}>cart is empty, add some  items </Text>
      <IonIcon name='happy-outline' style={styles.icon}/></View>:
      <View style={styles.listContainer}>
          <FlatList
            data={cartData}
            renderItem={({ item }) => (
             
              <SafeAreaView>
               
                <View style={styles.card}>
                   <Image 
                   style={styles.image} 
                   source={{uri:item?.image}}
                   />
                  
                  <View style={styles.data} >
                    <View style={styles.inpTitle}>
                    <Text style={styles.title}>
                       {item?.title}
                    </Text></View>
                    <View style={styles.inp}>
                    <Text style={styles.value}>
                        Price: $ {item?.price}
                        
                    </Text>
                    <Text style={styles.value}>Quantity: {item?.quantity}</Text></View>
                    <View style={styles.inp}><Text style={styles.value} >UpdationOn: {item?.update}</Text></View>
                    <View style={styles.inp}>
                      <TouchableOpacity onPress={()=>deleteItem(item)}>
                        <Text style={styles.button}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
      
              </SafeAreaView>
            )}
          />
        </View>
        
      }
  </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  icon:{
  fontSize:30,
  color:'#FFB200',
  margin:10
  },
  cart:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  cartText:{
 fontSize:20,
 fontWeight:'700'

  },
  listContainer: {
    flex: 1,
    padding: 20,
  },
  img:{
 flex:1,
 justifyContent:'center'
  },
  card: {
    backgroundColor: '#F7F9F2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    // padding: 10,
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    paddingLeft:5
  },
  image:{
    height:'100%',
    width:'40%',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
   resizeMode:'stretch'
  },
  data:{
    flexWrap:'wrap',
    width:'60%',
    marginHorizontal:5
  },
  title:{
    fontSize: 20,
    color: '#333',
    fontFamily: 'Roboto', 
    fontWeight: 'bold',
    padding:10
  },
  inp:{
    justifyContent:'center',
    padding:10,
  },
  inpTitle:{
    justifyContent:'center',
  },
  value:{
    fontSize:15,
    color:'#333'
  },
  button:{
    borderWidth:1,
    borderColor:'gray',
    borderRadius:10,
    backgroundColor:'orange',
    padding:10,
    color:'black',
    fontWeight:'800',
    textAlign:'center'
    
  }
})
