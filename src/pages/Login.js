import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#00b33c",
    marginBottom: 30,
  },
  inputView: {
    width: "80%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    marginBottom: 15,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#00b33c",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  text: {
    color: "#00b33c",
    fontWeight: "bold",
    margin: 2,
  },
});

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired,
  };

  state = {
    email: "",
    password: "",
  };

  telaPrincipal = () => {
    const { email, password } = this.state;
    if (email === "a" && password === "a") {
      this.props.navigation.navigate("Main");
    } else {
      this.props.navigation.navigate("Central");
    }
  };

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>COVID</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Senha"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            this.telaPrincipal();
          }}
        >
          <Text style={styles.loginText}>LOGIN</Text>
          {/*dava para usar Button, mas com o TouchableOpacity dá para deixar mais bonito*/}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EsqueciSenha");
          }}
        >
          <Text style={styles.text}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PreCadastro");
          }}
        >
          <Text style={styles.text}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Login.navigationOptions = {
  header: null,
};

export default Login;
