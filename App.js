import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Button,ScrollView,TouchableOpacity } from 'react-native';
import {useState} from 'react';
import Menu from './Menu';

export default function App() {
  const [totalPrice, SetTotalPrice] = useState(0);
  const [pay, Payed] = useState(totalPrice);

  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />

      <View style={{flexDirection:'row',marginBottom:10}}>
        <Text style={{fontSize:45,fontWeight:'bold',margin:35}}>Wings</Text>

      <View style={{alignSelf:'flex-end',backgroundColor:'#fff',marginRight:'7%',borderWidth:1,borderRadius:20,paddingHorizontal:10,}}>
        <View style={{}}>
          <Text style={{fontSize: 24}}>Total = {totalPrice}</Text>
        </View>

        <TouchableOpacity>
        <View style={{borderStyle:'dashed',borderWidth:2 ,alignItems:'center',backgroundColor:'#070745',borderRadius:34}}>
          <Text style={{fontSize:23,fontWeight:'bold',padding:10,borderRadius:20,color:'#fff'}}>Pay</Text>
        </View>
        </TouchableOpacity>
      </View>
      </View>
      <ScrollView>

        <Menu name="Zimber" totalPrice={totalPrice} SetTotalPrice={SetTotalPrice} Price={4.50} image={require('./assets/doritos.png')}/>
        <Menu name="Makoenya" totalPrice={totalPrice} SetTotalPrice={SetTotalPrice} Price={1.00} image={require('./assets/fat.png')}/>
        <Menu name="Drink" totalPrice={totalPrice} SetTotalPrice={SetTotalPrice} Price={12.50} image={require('./assets/coke.png')}/>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
