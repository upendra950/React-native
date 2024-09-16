import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Loader from '../uiComponents/Loader';
import SearchBar from '../uiComponents/SearchBar';
import { useDispatch, useSelector } from 'react-redux';

export const List = () => {
  const [useData, setUseData] = useState<any[]>([]);
  const [sampleData, setSampleData] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isAll, setIsAll] = useState(true);
  const [isProgress, setIsProgress] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const url = "https://jsonplaceholder.typicode.com/posts?_limit=70";
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
  }, [searchQuery, isAll, isProgress, isClosed, isApproved]);

  const filterDataWithLoader = () => {
    setLoading(true);
    setTimeout(() => {
      let filteredData = useData;

      // Apply status filter
      if (!isAll) {
        if (isApproved) filteredData = filteredData.filter((item) => item.status === 'Approved');
        if (isProgress) filteredData = filteredData.filter((item) => item.status === 'Inprogress');
        if (isClosed) filteredData = filteredData.filter((item) => item.status === 'Closed');
      }

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

  const setStatusFilter = (status: string) => {
    setIsAll(status === 'All');
    setIsApproved(status === 'Approved');
    setIsProgress(status === 'Inprogress');
    setIsClosed(status === 'Closed');
  };

  const handleFilterChange = (status: string) => {
    setStatusFilter(status);
    filterDataWithLoader();
  };


  const pullData = () => {
    fetchData().then(() => {
      let filteredData = useData;
      if (!isAll) {
        if (isApproved) filteredData = filteredData.filter((item) => item.status === 'Approved');
        if (isProgress) filteredData = filteredData.filter((item) => item.status === 'Inprogress');
        if (isClosed) filteredData = filteredData.filter((item) => item.status === 'Closed');
      }
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
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => handleFilterChange('All')}>
          <Text style={isAll ? styles.btnActive : styles.btn}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterChange('Inprogress')}>
          <Text style={isProgress ? styles.btnActive : styles.btn}>InProgress</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterChange('Approved')}>
          <Text style={isApproved ? styles.btnActive : styles.btn}>Approved</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterChange('Closed')}>
          <Text style={isClosed ? styles.btnActive : styles.btn}>Closed</Text>
        </TouchableOpacity>
      </View>

      <SearchBar value={searchQuery} onChange={handleSearchChange} />

      {loading ? (
        <Loader />
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={sampleData}
            renderItem={({ item }) => (
              // <View style={styles.card}>
              //   <Text style={styles.title}>
              //     {item.id}. {item.title}
              //   </Text>
              //   <Text style={styles.body}>{item.body}</Text>
              //   <Text style={styles.body}>Status: {item.status}</Text>
              // </View>
              <SafeAreaView>
                <View style={styles.card}>
                  <View>
                   <Image
                   style={styles.image} 
                   source={require('../profile.jpeg')}
                   />
                  </View>
                  <View style={styles.data}>
                    <Text style={styles.title}>
                      {item.id}. {item.title.slice(0, 14)}
                    </Text>
                    <Text style={styles.body}>{item.body.slice(0, 10)}</Text>
                    <Text style={styles.status}>Status: {item.status}</Text>
                  </View>
                </View>
              </SafeAreaView>
            )}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 20,
  },
  listContainer: {
    flex: 1,
    padding: 20,
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
    display:'flex',
    flexDirection:'row',
    borderRadius:10
  },
  title: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'Roboto',
    padding: 10,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 15,
    fontWeight: 'black',
    padding: 10,
    color: 'gray'
  },
  status: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    padding: 10,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    borderRadius: 10,
    backgroundColor: 'transparent',
    color: 'black',
    borderColor: '#3C3D37',
    borderWidth: 1,
    padding: 10,
  },
  btnActive: {
    backgroundColor: '#1E2A5E',
    borderRadius: 10,
    borderColor: '#3C3D37',
    borderWidth: 1,
    padding: 10,
    color: 'white'
  },
  image:{
    height:150,
    width:110,
    borderRadius:20
    
  },
  data:{
    padding: 10,
    marginLeft:10
    
  }
});
