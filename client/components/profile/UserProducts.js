import React from 'react'
import { View } from 'react-native'
import Product from '../home/Product'

function UserProducts({userProducts, setUserProducts}) {
  return (
    <View>
      {
        userProducts.map(e=> <Product  setUserProducts={setUserProducts}userProducts={userProducts} product={e} key={e.id}/>
        )
      }
    </View>
  )
}

export default UserProducts
