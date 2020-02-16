import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { CameraRoll } from 'react-native-cameraroll'



export default class Mycamera extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    state = {
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
        photo: '',
    }

    async componentDidMount() {
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        // Camera roll Permission 
        if (Platform.OS === 'ios') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        // Camera Permission
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
    }

    handleCameraType = () => {
        const { cameraType } = this.state

        this.setState({
            cameraType:
                cameraType === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
        })
    }

    takePicture = async () => {
        if (this.camera) {
            this.state.photo = await this.camera.takePictureAsync();

            // await FileSystem.copyAsync({

            //     from: this.state.photo.uri,
            //     to: `${FileSystem.documentDirectory}image.jpg`
            // }
            // )

        }
        console.log(this.state.photo.uri)

    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
    }


    render() {
        const { navigate } = this.props.navigation;
        const { hasPermission } = this.state
        if (hasPermission === null) {
            return <View />;
        } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.cameraType} ref={ref => { this.camera = ref }}>
                        <View>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-start',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                    marginTop: 60,
                                    marginLeft: 10,
                                }}
                                onPress={() => navigate('Home')}>
                                <Ionicons
                                    name="ios-arrow-back"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 30 }}>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent'
                                }}
                                onPress={() => this.pickImage()}>
                                <Ionicons
                                    name="ios-photos"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => this.takePicture()}
                            >
                                <FontAwesome
                                    name="camera"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => this.handleCameraType()}
                            >
                                <MaterialCommunityIcons
                                    name="camera-switch"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }

}