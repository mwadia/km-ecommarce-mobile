import { useEffect, useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function DropDown({ newProduct, setNewProduct }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(newProduct.category);
  const [items, setItems] = useState([
    { label: 'Man', value: 'zalma' },
    { label: 'Woman', value: 'woman' },
    { label: 'Child', value: 'chaild' },
  ]);
  useEffect(() => {
    setNewProduct({ ...newProduct, category: value });
  }, [value]);

  return (
    <View>
      <DropDownPicker
        style={{
          borderColor: '#e4e4e4',
          backgroundColor: '#fffcfc',
          marginBottom: 10,
          marginTop: 7,
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
}
export default DropDown;
