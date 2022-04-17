import React from 'react';
import {Text, View, Image, TouchableOpacity, Button} from 'react-native';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import {Component} from 'react/cjs/react.development';
import {styles} from './style/emojiScreen.js/EmojiScreenStyle';

export default class Emoji extends Component {
  state = {
      imgFix: require('../../asset/emoji/love.png'),
      imgOne: require('../../asset/emoji/angry.png'),
      imgTwo: require('../../asset/emoji/care.png'),
      imgThree: require('../../asset/emoji/haha.png'),
      imgFour: require('../../asset/emoji/love.png'),
      imgFive: require('../../asset/emoji/like.png'),
      imgSix: require('../../asset/emoji/sad.png'),
  }

  onChangeEmoji1 = () => {
    {
      this.setState({imgFix: this.state.imgOne})
    }
  };
  onChangeEmoji2 = () => {
    {
      this.setState({imgFix: this.state.imgTwo})
    }
  };
  onChangeEmoji3 = () => {
    {
      this.setState({imgFix: this.state.imgThree})
    }
  };
  onChangeEmoji4 = () => {
    {
      this.setState({imgFix: this.state.imgFour})
    }
  };
  onChangeEmoji5 = () => {
    {
      this.setState({imgFix: this.state.imgFive})
    }
  };
  onChangeEmoji6 = () => {
    {
      this.setState({imgFix: this.state.imgSix})
    }
  };

  renderEmoji = () => {
    return (
      <View style={styles.container_content}>
        <View style={styles.container_content_title}>
          <Text style={styles.container_content_title_text}>
            Bạn đang cảm thấy như thế nào ?
          </Text>
        </View>
        <View style={styles.container_content_img}>
          <Image
            style={styles.container_content_img_big}
            source={this.state.imgFix}
          />
        </View>
        <View style={styles.container_content_img_detail}>
          <TouchableOpacity onPress={this.onChangeEmoji1.bind(this)}>
            <Image
              style={styles.container_content_img_detail_small}
              source={this.state.imgOne}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onChangeEmoji2.bind(this)}>
            <Image
              style={styles.container_content_img_detail_small}
              source={this.state.imgTwo}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onChangeEmoji3.bind(this)}>
            <Image
              style={styles.container_content_img_detail_small}
              source={this.state.imgThree}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onChangeEmoji4.bind(this)}>
            <Image
              style={styles.container_content_img_detail_small}
              source={this.state.imgFour}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onChangeEmoji5.bind(this)}>
            <Image
              style={styles.container_content_img_detail_small}
              source={this.state.imgFive}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onChangeEmoji6.bind(this)}>
            <Image
              style={styles.container_content_img_detail_small}
              source={this.state.imgSix}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderEmoji()}
      </View>
    );
  }
}
