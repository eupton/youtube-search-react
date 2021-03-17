import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../apis/youtube'
import VideoDetail from './VideoDetail'


class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             videos: [],
             selectedVideo: null,
             total: 0,
             pages: 0,
             page: 0
        }
    }

    onVideoSelected = (video) => {
        this.setState({selectedVideo: video});
    }
    
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({
            videos: response.data.items, 
            selectedVideo: response.data.items[0]
        });
    }

    componentDidMount() {
        this.onTermSubmit('buildings');
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected}/>
                            <div>Showing {this.state.videos.length} videos</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
