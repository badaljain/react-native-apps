import React, { Component } from 'react'
//import ReactNativeComponentTree from 'react-native/Libraries/Renderer/shims/ReactNativeComponentTree'
import { ScrollView } from 'react-native'
import Card from '../card'
import axios from 'axios'

class AlbumList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    componentWillMount () {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState({ albums: response.data })
        })
    }

    // onClickBuy = (e) => {
    //     const target = ReactNativeComponentTree.getInstanceFromNode(e.target)
    //     console.log(target)
    // }

    renderAlbums = () => {
        return this.state.albums.map(album => <Card key={ album.title } album={album}/>)
    }

    render () {
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        )
    }
}

export default AlbumList