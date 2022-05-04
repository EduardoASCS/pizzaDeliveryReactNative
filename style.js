import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#EA1D2C',
        justifyContent: 'flex-start',
        // alignItems: 'center',
        paddingTop: 10
    },
    title: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 15
    },
    subTitle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        textAlign:'center'
    },
    subTitle2: {
        alignContent: 'flex-start',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 8
    },
    subTitle1: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30
    },
    box: {
        padding: 5,
    },
    button: {
        color: '#FFB761',
    },
    content: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingBottom: 10,
        justifyContent: 'center'
    }
})

export default style