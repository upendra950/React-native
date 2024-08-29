import React, { useEffect, useState } from 'react'
import { Button, FlatList, StatusBar, View } from 'react-native';
import { SafeAreaView, StyleSheet, Text } from 'react-native'

export const List = () => {
  const [useData,setUseData] = useState<any[]>([]);
  const [data1,setData1] = useState<any[]>([])
  const [refreshing,setRefreshing]=useState(false);
  
  const fetchData = async()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15`);

    const data = await response.json();
    setData(data);
  }
  // useEffect(()=>{
  //   fetchData();
  // },[])
  
  const setData = (data:any)=>{
     data.map((element: any)=>{
      if(element.id <= 5){
        element['status']='Approved';
      }
      else if(element.id > 5 && element.id < 10){
        element['status'] = 'Inprogress';
      }
      else{
        element['status'] = 'Closed';
      }
      
     })
     setUseData(data);
     setData1(data);
  }
  const handleRefresh = ()=>{
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }

  const closed = ()=>{
    const  data = useData.filter((item) => item.status == 'Closed').map(({id, title, body,status}) => ({id, title,body, status}));
    setData1(data);
  }
  const approved = ()=>{
    const  data = useData.filter((item) => item.status == 'Approved').map(({id, title, body,status}) => ({id, title,body, status}));
    setData1(data);

  }
  const inProgress =()=>{
   const  data = useData.filter((item) => item.status == 'Inprogress').map(({id, title, body,status}) => ({id, title,body, status}));
   setData1(data);
  }
  const allItems =()=>{
    fetchData();
  }

  return (
    <SafeAreaView style={styles.safeArea}>
    <Text style={styles.text}> Edit your items </Text>
    <View style={styles.listContainer}>
      <FlatList 
      data={data1}
      renderItem={({ item})=>{
        return(
          <View style={styles.card}>
            <Text style={styles.title}>{item.id} . {item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Text style={styles.body}>status : {item.status}</Text>
          </View>
         
        )
      }}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      />
    </View>
    <View  style={styles.btnContainer}>
    <Text> <Button title='All' onPress={allItems}></Button></Text> 
     <Text > <Button  title='Inprogress' onPress={inProgress}></Button></Text>
     <Text > <Button title='Aprroved' onPress={approved}></Button></Text>
    <Text> <Button title='Closed' onPress={closed}></Button></Text> 
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        paddingTop:20   
    },
    text:{
        fontSize:30,
        color:"#333"
    },
    listContainer:{
      flex:1,
      padding:20
    },
    card:{
      backgroundColor: '#F7F9F2',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      margin:10,
      padding:10
    },
    title:{
      fontSize:20,
      color:'#333',
      fontFamily:'Roboto',
      padding:10
    },
    body:{
      fontSize:15,
      fontWeight:'black',
      padding:10
    },
    btnContainer:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'nowrap',
      justifyContent:'space-evenly'
    }

  })
