import React, { Component, Fragment } from 'react'
// import SearchBar from 'react-native-searchbar';
import { SearchBar, Avatar } from 'react-native-elements'
import { Icon } from "react-native-elements";
import { Text, View,StyleSheet, ScrollView} from 'react-native'
import { TopContainer } from "../../organisms/TopContainer";
import { UsersData } from '../../../utils/api/UsersData'

export default class Home extends Component {
    render() {
        return (
        <Fragment>
            <TopContainer  header={`User's Feed`} />
        <View>
        <SearchBar
            lightTheme
            showLoading
            style={{ backgroundColor: 'white' }}
            platform="ios"
            cancelButtonTitle="Cancel"
            placeholder='Search Users..' />
         </View>

                    <View style={{ backgroundColor: '#d3d3d3', height: 40
                }} >
                        <Text style={{ fontFamily: 'montserrat-bold',
                        color: 'white',
                        position: 'relative',
                        top: 10,
                        left: 10
                    }}>Restaurant Members</Text>
                    </View>
        <ScrollView>
             {
                 UsersData.map(list => {
                     const { coins, uri, name, email, id } = list
                         return (
                    <Fragment key={id}>
                        <View style={styles.container}>
                        <View style={styles.avatarContainer}>
                            <Avatar
                            source={{ uri: uri }}
                            medium
                            rounded
                            // containerStyle={{  }}
                            />
                         </View>
                            <View >
                            <Text style={[styles.textContainer, styles.name]} >{name}</Text>
                            <Text style={[styles.textContainer, styles.email]} >{email}</Text>
                            </View>

                             </View>

                            <Icon
                             type='simple-line-icon'
                             name='arrow-right'
                             containerStyle={{ position: 'relative' ,
                             top: -50, left: 158 }}
                             onPress={() => list.button({coins})}
                             />
                         {/* <View style={styles.btmLiner} /> */}
                      </Fragment>
                     )
                 })
             }
             </ScrollView>
        </Fragment>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        position: 'relative',
        top: 11,
        paddingBottom: 19,
    },
    textContainer: {
        textAlign: 'center',
        fontFamily: 'montserrat',
        paddingLeft: 14,
    },
    name: {
        fontSize: 15,
        fontFamily: 'montserrat-bold',
    },
    email: {
        paddingBottom: 10
    },
    avatarContainer: {
        paddingLeft: 10
    },
    btmLiner: {
        backgroundColor: '#d3d3d3',
        width: '100%',
        height: 1.5,
        position: 'relative',
        top: -370
    }
})

        // Search Bar

// constructor(props) {
//     super(props);
//     this.state = {
//     //   VolunteerOrg,
//       results: [],
//       button: null,
//     };
//     this._handleResults = this._handleResults.bind(this);
//   }
//   _handleResults(results) {
//     this.setState({ results });
// }
{/* <SearchBar
ref={(ref) => this.searchBar = ref}
getValue={this._handleResults}
// data={VolunteerOrg}
handleResults={this._handleResults}
showOnLoad
backgroundColor={'white'}
color={'white'}
hideBack={true}
allDataOnEmptySearch={true}
/> */}