import React, { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

const Leaderboard = () => {
  const [users, setUsers] = useState([
    { id: "1", name: "Alice", score: 100 },
    { id: "2", name: "Bob", score: 90 },
    { id: "3", name: "Charlie", score: 80 },
  ]);

 // new
  const sortLeaderboard = () => {    
	  // sort happened in place, so need to make a copy of and sort.  
	  // sort takes parameter of a comparison function instead of boolean
    const sortedUsers = [...users].sort((a, b) => a.score - b.score); // Incorrect sorting logic
    setUsers(sortedUsers); // Directly mutating state
  };

// old
  //const sortLeaderboard = () => {
   // const sortedUsers = users.sort((a, b) => a.score > b.score); // Incorrect sorting logic
   // setUsers(sortedUsers); // Directly mutating state
  //};
  
  return (
    
    <View>
      <Text>Leaderboard</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text>
            {item.name}: {item.score}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Sort Leaderboard" onPress={sortLeaderboard} />
    </View>
  );
};

export default Leaderboard;