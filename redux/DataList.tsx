import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Loader from '../screens/uiComponents/Loader';
import SearchBar from '../screens/uiComponents/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList, UserList } from './CounterAction';


export const DataList = () => {
  const [isAll, setIsAll] = useState(true);
  const [isApproved, setIsApproved] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isProgress, setIsProgress] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const reduxData = useSelector((state: any) => state.data);
  const [filteredData, setFilteredData] = useState<any[]>([]);


  useEffect(() => {
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    filterDataWithLoader();
  }, [searchQuery, isAll, isProgress, isClosed, isApproved, reduxData]);

  const filterDataWithLoader = () => {
    setLoading(true);
    setTimeout(() => {
      let filteredData = reduxData;
      // Apply status filter
      if (!isAll) {
        if (isApproved) {
          filteredData = filteredData[0].filter((item: any) => item.status === "Approved");
        }
        if (isProgress) {
          filteredData = filteredData[0].filter((item: any) => item.status === 'Inprogress');

        }
        if (isClosed) {
          filteredData = filteredData[0].filter((item: any) => item.status === 'Closed');
        }
      }
      if(isAll){
        filteredData = filteredData[0]
      }

      // Apply search filter
      if (searchQuery) {
        filteredData = filteredData.filter((item: any) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      setFilteredData(filteredData);
      setLoading(false);
    }, 500);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };
  const closedItems = () => {
    setIsClosed(true);
    setIsProgress(false);
    setIsAll(false);
    setIsApproved(false);
    setSearchQuery('');
  }
  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(getUserList());
    setRefreshing(false);
    setSearchQuery('');
  };
  const approvedItems = () => {
    setIsApproved(true);
    setIsAll(false);
    setIsClosed(false);
    setIsProgress(false);
    setSearchQuery('');
  }
  const allItems = () => {
    setIsAll(true);
    setIsApproved(false);
    setIsClosed(false);
    setIsProgress(false);
    setSearchQuery('');
  }
  const inProgressItems = () => {
    setIsProgress(true);
    setIsAll(false);
    setIsApproved(false);
    setIsClosed(false);
    setSearchQuery('');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => allItems()}>
          <Text style={isAll ? styles.btnActive : styles.btn}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inProgressItems()}>
          <Text style={isProgress ? styles.btnActive : styles.btn}>InProgress</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => approvedItems()}>
          <Text style={isApproved ? styles.btnActive : styles.btn}>Approved</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => closedItems()}>
          <Text style={isClosed ? styles.btnActive : styles.btn}>Closed</Text>
        </TouchableOpacity>
      </View>

      <SearchBar value={searchQuery} onChange={handleSearchChange} />

      {loading ? (
        <Loader />
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.title}>
                  {item.id}. {item.title}
                </Text>
                <Text style={styles.body}>{item.body}</Text>
                <Text style={styles.body}>Status: {item.status}</Text>
              </View>
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
  },
  title: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'Roboto',
    padding: 10,
  },
  body: {
    fontSize: 15,
    fontWeight: 'black',
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
    color: 'white',
  },
});