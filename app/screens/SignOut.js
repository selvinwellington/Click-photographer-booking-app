import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SignOut() {
  return (
    <View>
      <Text>SignOut</Text>
    </View>
    //  <Drawer.Section style={styles.bottomDrawerSection}>
    //             <DrawerItem 
    //                 icon={({color, size}) => (
    //                     <Icon 
    //                     name="exit-to-app" 
    //                     color={color}
    //                     size={size}
    //                     />
    //                 )}
    //                 label="Sign Out"
    //                 onPress={() => {signOut()}}
    //             />
  )
}

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});