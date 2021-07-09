import React from "react";

import { Text, View } from "react-native";

const CostsItem = ({body, title, userId}) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>{body}</Text>
        <Text>{userId}</Text>
      </View>
    </View>
  );
};

export default CostsItem;
