import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, TextInput } from 'react-native';

class Pass extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            password3: '',
            password2: 'null',
        };

    }
    render() {
        if (this.state.password !== this.state.password2) {
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TextInput style={{ marginBottom: 20 }}>
                        ENTRER UN NOUVEAU MOT DE PASSE
                        </TextInput>
                    <View style={styles.container}>
                        <TextInput
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            style={styles.input}
                            underlineColorAndroid="rgba(131,157,182,.7)"
                            autoCapitalize="none"
                            placeholderTextColor="rgba(131,157,182,.7)"
                        />

                        <TouchableOpacity
                            style={styles.marginL}
                            onPress={() => this.setState({ password2: this.state.password })}>
                            {/* onPress={() => navigate('Home')}> */}
                            <Text >CONFIRM</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            );

        } else {
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TextInput style={{ marginBottom: 20 }}>
                        ENTRER VOTRE MOT DE PASSE
                        </TextInput>
                    <View style={styles.container}>
                        <TextInput
                            value={this.state.password3}
                            onChangeText={(password3) => this.setState({ password3 })}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            style={styles.input}
                            underlineColorAndroid="rgba(131,157,182,.7)"
                            autoCapitalize="none"
                            placeholderTextColor="rgba(131,157,182,.7)"
                        />

                        <TouchableOpacity
                            style={styles.marginL}
                            onPress={() => this.Verify()}>
                            {/* onPress={() => navigate('Home')}> */}
                            <Text>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );

        }

    }
    Verify() {
        console.log(this.state.password, this.state.password2, this.state.password3)
        const { navigate } = this.props.navigation;
        if (this.state.password2 === this.state.password3) {
            navigate('Home')
        }
    }
}
export default Pass


const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        width: 180,
        fontSize: 17,
        textAlign: "left"

    },
    marginL: {
        //backgroundColor:"black",
        margin: 50
    }

});