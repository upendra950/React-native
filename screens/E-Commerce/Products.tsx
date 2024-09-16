import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Loader from '../uiComponents/Loader';
import SearchBar from '../uiComponents/SearchBar';
import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import jsonData from "../Data.json"


export const Products = ({navigation}:any) => {
  const [useData, setUseData] = useState<any[]>([]);
  const [sampleData, setSampleData] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const route =useRoute();
 const Stack =createNativeStackNavigator();

    
   

  const url = "https://api.escuelajs.co/api/v1/products";
  const fetchData = async () => {

    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('__api_call');
      const updatedData = jsonData.map((element: any) => {
        if (element.id <= 25) {
          return { ...element, status: 'Approved' };
        } else if (element.id > 25 && element.id < 60) {
          return { ...element, status: 'Inprogress' };
        } else {
          return { ...element, status: 'Closed' };
        }
      });
      setUseData(updatedData);
      setSampleData(updatedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    })
  }, []);

  useEffect(() => {
    filterDataWithLoader();
  }, [searchQuery]);

  const filterDataWithLoader = () => {
    setLoading(true);
    setTimeout(() => {
      let filteredData = useData;

      // Apply status filter

      // Apply search filter
      if (searchQuery) {
        filteredData = filteredData.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setSampleData(filteredData);
      setLoading(false);
    });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };



  const handleFilterChange = (status: string) => {
    filterDataWithLoader();
  };


  const pullData = () => {
    fetchData().then(() => {
      let filteredData = useData;
      setSampleData(filteredData)

    })
      .catch((Error) => { console.log('Unable to fetch Data' + Error) });

  }

  const handleRefresh = () => {
    setRefreshing(true);
    pullData();
    setRefreshing(false);
    setSearchQuery('')
  };
  const handleData =({item}:any)=>{
    navigation.navigate('ListComponent',{title:item.title})
  }

  return (
    <SafeAreaView style={styles.safeArea}>
       <View style={styles.search}><SearchBar value={searchQuery} onChange={handleSearchChange} /></View>
        <ImageBackground source={require('../Sun.jpg')} resizeMode='stretch' style={styles.img}>

      {loading ? (
        <Loader />
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={sampleData}
            renderItem={({ item }) => (
             
              <SafeAreaView>
                <Pressable onPress={()=>{navigation.navigate('ListComponent',{cartData:{
                        id:item.id,
                        title:item.title,
                        description:item.description,
                        price:item.price,
                        image:item.images[0],
                        update:item.updatedAt,
                        create:item.creationAt}
                    })}}>
                <View style={styles.card}>
                   <Image 
                   style={styles.image} 
                   source={{uri:item.images[0]}}
                   />
                  
                  <View style={styles.data} >
                    <View style={styles.inpTitle}>
                    <Text style={styles.title}>
                       {item.title}
                    </Text></View>
                    <View style={styles.inp}>
                    <Text style={styles.value}>
                        CreationAt: {item.creationAt}
                    </Text></View>
                    <View style={styles.inp}><Text style={styles.value} >UpdationOn: {item.updatedAt}</Text></View>
                  </View>
                
                </View>
                </Pressable>
              </SafeAreaView>
            )}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      )}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  search:{
  backgroundColor:'#373A40'
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
  }
});
