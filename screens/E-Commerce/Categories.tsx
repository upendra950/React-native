import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Loader from '../uiComponents/Loader';
import SearchBar from '../uiComponents/SearchBar';
import { useDispatch, useSelector } from 'react-redux';

export const Categories = () => {
  const [useData, setUseData] = useState<any[]>([]);
  const [sampleData, setSampleData] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const url = "https://api.escuelajs.co/api/v1/categories";
  const fetchData = async () => {

    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('__api_call');
      const updatedData = data.map((element: any) => {
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
                <View style={styles.card}>
                  
                   <Image 
                   style={styles.image} 
                   source={{uri:item.image}}
                   />
                  
                  <View style={styles.data} >
                    <Text style={styles.title}>
                       {item.name}
                    </Text>
                    <View style={styles.inp}>
                    <Text style={styles.value}>
                        CreationAt: {item.creationAt}
                    </Text></View>
                    <View style={styles.inp}><Text style={styles.value} >UpdationOn: {item.updatedAt}</Text></View>
                  </View>
                </View>
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
   
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
  },
  image:{
    height:'100%',
    width:'40%',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
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
  value:{
    fontSize:15,
    color:'#333'
  }
});
