import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, TextInput} from "react-native";
import Item from "../components/Item";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

const style = StyleSheet.create({
  title: {
    color: "#000000",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    alignSelf: "center",
  },
  container1: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#DDD",
  },
  loginBtn: {
    width: "100%",
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
  inputText: {
    height: 50,
    color: "black",
  },
  inputView: {
    width: "98%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    alignSelf:"center",
    alignItems:"center",
    marginLeft:"1%",
    borderRadius: 25,
    height: 100,
    marginBottom: 15,
  },
});

class Diario extends Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired,
  };
  render() {
    const { navigation } = this.props;
    return (
      <>
        <View style={style.container1}>
          <Text style={style.title}>
            Quais os sintomas você está sentindo hoje?
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
            backgroundColor: "#DDD",
          }}
        >
          <Item title="DIFICULDADE DE RESPIRAR" />

          <Item title="DOR DE GARGANTA" />

          <Item title="FEBRE" />

          <Item title="TOSSE" />

          <Item title="PERDA DO OLFATO" />
          <Item title="NENHUM DESSES SINTOMAS" />
          <Text style={{ padding: 10, fontWeight: "bold", fontSize: 15 }}>
            {" "}
            OUTRO:
          </Text>
          <View style={style.inputView}>
          <TextInput
            secureTextEntry
            style={style.inputText}
            placeholderTextColor="#003f5c"
           
          />
</View>
          <TouchableOpacity style={style.loginBtn}>
            <Text style={style.loginText}>CONFIRMAR</Text>
            {/*dava para usar Button, mas com o TouchableOpacity dá para deixar mais bonito*/}
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Diario;
