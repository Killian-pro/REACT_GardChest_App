import React from 'react';
import { TouchableOpacity, Dimensions, StyleSheet, View, Text } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });
    }


    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity
                        onPress={() => this.pickImage()}>
                        <Ionicons
                            name="ios-photos"
                            style={{ fontSize: 40 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigate('Mycamera')}>
                        <FontAwesome
                            name="camera"
                            style={{ fontSize: 40 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );

    }
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginTop: screenHeight / 2,
        marginRight: screenWidth / 4,
        marginLeft: screenWidth / 4,
    },

});