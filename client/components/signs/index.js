import * as React from 'react';
import { View, Text } from 'react-native';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from 'react-native-paper';
import SignUp from './SignUp';

const SignsForm = () => {
  const [visible, setVisible] = React.useState(false);
  const [isSign, setIsSign] = React.useState(0);
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog
            style={{
              position: 'absolute',
              width: '100%',
              margin: 'auto',
              bottom: 300,
              left: '-5%',
              backgroundColor: '#ffff',
            }}
            visible={visible}
            onDismiss={hideDialog}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Button
                onPress={() => {
                  setIsSign(0);
                }}
              >
                SignUp
              </Button>
              <Button
                onPress={() => {
                  setIsSign(1);
                }}
              >
                SignIn
              </Button>
            </View>
            {isSign === 0 ? (
              <SignUp />
            ) : (
              <View>
                <Text>sIGN IN</Text>
              </View>
            )}
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default SignsForm;
