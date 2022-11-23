import React, { useContext, useEffect, useState } from 'react'
import {  View } from 'react-native'
import { Store } from '../Storage';
import socket from '../../servese/Socket';
import { Modal, Portal, Text, Divider, Provider } from 'react-native-paper';

import { IconButton,Badge } from 'react-native-paper';
import Apiservices from '../../servese/ApiServices';
function index() {
  const [MyNotificationsNum, setNMyNotificationsNum] = useState(0);
  const [ MyNotifications,setNMyNotifications]=useState([])
  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', 
  paddingBottom: 20,position:'absolute',top:5,right:20,width:'80%',borderRadius:12};
const {user}=useContext(Store)
  socket.on('notification', function (msg) {
    if (user) {
      let noti = msg.data.filter((e) => e === user.id);
      setNMyNotificationsNum(MyNotificationsNum + noti.length);
    }
  });
  useEffect(()=>{
    Apiservices.get('/getnotifications').then((res) =>
    setNMyNotificationsNum(res.data.data.length)
  );
  },[])
  const handleClick = () => {
    setVisible(true);
    Apiservices.get('/getnotifications').then((res) =>
      setNMyNotifications(res.data.data)
    );
    console.log(MyNotifications);
    Apiservices.delete('/destroyallaotifications');
    setNMyNotificationsNum(0);
  };
  return (
    <>
    {user &&  <View  style={{position:'absolute',top:40,right:0,height:'100%',
    zIndex:5,width:'100%',backgroundColor:'#3498db00'}}>
    {user && (
      <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          {
            MyNotifications.map((e,i)=> <View style={{marginTop:20,paddingHorizontal:20}}>
              <Text>{e.massage}</Text>
              {
                i !==MyNotifications.length-1 && <Divider />

              }
            </View> )
          }
        </Modal>
      </Portal>
      <View  style={{ position: 'relative' }}>
        <IconButton
          icon='bell'
          iconColor='#6b837d'
          onPress={handleClick}
          style={{ position: 'absolute', right: 0, top: 0 }}
        ></IconButton>
        <Badge style={{ position: 'absolute', right: 5, top: 8 }}>
          {MyNotificationsNum}
        </Badge>
      </View>
    </Provider>
    
    )}
    </View>}
  
    </>
  )
}

export default index
