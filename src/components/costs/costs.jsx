import React from "react";
import { FlatList, Text, SafeAreaView } from "react-native";

import CostsItem from "./costs-item";

const Costs = () => {
  const [costsData, setCostsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false)

  const renderItem = ({ item }) => (
    <CostsItem title={item.title} body={item.body} userId={item.userId} />
  );
  
  const getData = async() => {
    setIsLoading(true)
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json()
      setCostsData(result)
    }catch( error ) {
      console.log('error', error)
    }
    finally{
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        data={costsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onRefresh={getData}
        refreshing={isLoading}
      />
    </SafeAreaView>
  );
};

export default Costs;
