import {StyleSheet ,Platform} from 'react-native'

/* AppBar */

export default styles = StyleSheet.create({
    root: {
        flex:1,
        backgroundColor: '#E9EBEE'
    },
    container_header:{
        backgroundColor: '#FFF',
        height: Platform.OS == 'ios' ? 100 : 56,
        paddingTop: Platform.OS == 'ios' ? 64 : 0,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header__text: {
        fontSize: 16,
        fontWeight: '500'
    },

    container_avatar: {
        backgroundColor: '#FFF',
        height: 90,
        marginTop:1
    },

    container_avatar__sub:{
        alignItems: 'center',
        margin: 10
    },

    container_avatar__image: {
        height: 56,
        width: 56,
        borderRadius: 28
    },
    container_feed: {
        backgroundColor: '#FFF',
    },
    container_feed_item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#D6D6D6',
        borderTopWidth: 1,
        borderTopColor: '#D6D6D6',
    },
    container_feed_item_header:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    container_feed_item_header_title: {
       marginLeft: -50,
       marginTop: 2
    },
    container_feed_item_header_title_nametime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container_feed_item_header_title_nametime_color: {
        color: '#D6D6D6',
    },
    container_feed_item_body: {
        marginTop: 10,
    },
    container_feed_item_footer: {
        marginTop: 15,
        flexDirection: 'row',
    },
    container_feed_item_footer_number: {
        marginRight: 10,
        marginTop: 7,
    },
})