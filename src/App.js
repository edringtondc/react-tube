import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap"
import SearchBar from "./components/SearchBar"
import NavBar from "./components/NavBar"
import VideoDetail from "./components/VideoDetail"
import API from "./utils/API"
import _ from "lodash"
import {VideoList, VideoListItem} from "./components/VideoList"

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.searchYouTube("kittens in buckets")
  }

  searchYouTube = term => {
    API.searchVideos(term)
    .then(res => this.setState({videos: res.data.items, selectedVideo: res.data.items[0]}))
    .catch(err => console.log(err))
  }

  selectVideo = video =>{
    this.setState({selectedVideo: video})

  }

  throttledSearch = _.debounce(this.searchYouTube, 900)

  render() {
    return (
      <>
      <NavBar/>
      <Container>
        <Row>
          <Col>
            <SearchBar 
              searchYouTube={this.throttledSearch}/>
          </Col>
        </Row>
        <Row>
          <Col md="9">
            <VideoDetail video={this.state.selectedVideo}  />
          </Col>
          <Col md="3">
            <VideoList >

               {this.state.videos.map(video => (
                 <VideoListItem 
                    video={video} 
                    key={video.id.videoId || video.id.playlistId}
                    selectedVideo={this.state.selectedVideo}
                    selectVideo={this.selectVideo}
                    />
               ))}

            </VideoList>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default App;
