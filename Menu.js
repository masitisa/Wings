import { StyleSheet, Text, View, Image, Button,Alert } from 'react-native';
import {useState} from 'react'

export default function Food({name,image, totalPrice, SetTotalPrice,Price}) {
  const [Items, SetItems] = useState(0);
  const [Total, SetTotal] = useState(0);
  

  function AddItem(){
    SetItems(Items + 1);
    SetTotal(Total + Price);
    SetTotalPrice(totalPrice + Price);
    
  }
  function DeleteItem(){
    if(Items > 0){
      SetItems(Items - 1);
      SetTotal(Total - Price);
      SetTotalPrice(totalPrice - Price);
    }else{
      Alert.alert('No ' + name + ' is oreder')
    }

    
  }
  return (
    <View style={styles.contact}>
      
     
        <Text style={styles.name}>{name}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View style={{flexDirection:'row'}}>

              <View style={{marginRight:10}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>PRICE</Text>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>ORDERED</Text>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>COST</Text>
              </View>
              <View>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>: R {Price}</Text>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>: {Items}</Text> 
                  <Text style={{fontSize:20,fontWeight:'bold'}}>: R {Total}</Text> 
              </View>
          </View>
        <Image source={image} style={styles.image}/>
        </View>



        <View style={styles.Buttons}>
          <Button title="Add order" onPress={AddItem} />
          <Button title="Delete " onPress={DeleteItem} />
        </View>
      </View>
  
  );
}

const styles = StyleSheet.create({
  contact: {
    margin: 20,
    padding: 10,
    
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    width:'90%'
  },
  details: {
    marginLeft: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  Buttons:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:14
  }
}) 