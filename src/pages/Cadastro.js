import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-elements";
import { Dimensions } from "react-native";

let { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5FCFF",
    marginTop: 0,
  },
  input: {
    width: "70%",
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: 25,
  },
  text: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 15,
  },
  loginBtn: {
    width: "70%",
    marginTop: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00b33c",
    backgroundColor: "#00b33c",
    borderRadius: 5,
    marginLeft: 5,
  },
  loginBtnTitle: {
    color: "white",
    width: "100%",
  },
});

class Cadastro extends Component {

  state = {
    Paciente: this.props.navigation.getParam("Paciente"),
  }

  render() {
    const {Paciente} =  this.state;
    return (
      
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView>
          {Paciente ?  (
          <>
            <Text>
              COLOQUE AQUI AS PERGUNTAS PARA O CADASTRO DO PACIENTE
            </Text>
            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />

            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />

            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />

            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />

            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />

            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />
            </>
          ) : (
            <>
             <Text>
              COLOQUE AQUI AS PERGUNTAS PARA O CADASTRO DA CENTRAL
            </Text>
            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />

            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />

            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />

            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />

            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />

            <Text style={styles.text}>Nome do Cliente</Text>
            <TextInput
              placeholder="   Entre com um nome"
              style={styles.input}
              placeholderTextColor={"black"}
              numberOfLines={2}
            />
            </>

          )}  



          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default Cadastro;
