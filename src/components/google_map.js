import React, { Component } from "react";

class GoogleMap extends Component {
	// ref 属性相关的内容已经发生变化了，之前是用 string 来获取到 ref 的 dom，现在已经采用回调的方式来获取
	// dom 了。相关内容查看下面两个链接
	// https://facebook.github.io/react/docs/refs-and-the-dom.html
	// http://huziketang.com/books/react/lesson21
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		return (
			<div ref="map" />
		);
	}
}

export default GoogleMap;