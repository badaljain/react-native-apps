import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducer'
import { Header } from './components/common/header'
import LibraryList from './components/library'

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{flex: 1}}>
                <Header title={'Some header'}/>
                <LibraryList />
            </View>
        </Provider>
    )
}

export default App