import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
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
        <Text style={style.title}>Quais os sintomas você está sentindo hoje?</Text>
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
          <Item
            onPress={() => {
              navigation.navigate("Diario");
            }}
            title="DIFICULDADE DE RESPIRAR"
          />

          <Item
            onPress={() => {
              navigation.navigate("Orientacoes");
            }}
            title="DOR DE GARGANTA"
          />

          <Item
            onPress={() => {
              navigation.navigate("Diario");
            }}
            title="FEBRE"
          />

          <Item
            onPress={() => {
              navigation.navigate("Orientacoes");
            }}
            title="TOSSE"
          />  

                    <Item
            onPress={() => {
              navigation.navigate("Orientacoes");
            }}
            title="PERDA DO OLFATO"
          />  
                    <Item
            onPress={() => {
              navigation.navigate("Orientacoes");
            }}
            title="NENHUM DESSES SINTOMAS"
          />
          <TouchableOpacity
          style={style.loginBtn}
        
        >
          <Text style={style.loginText}>CONFIRMAR</Text>
          {/*dava para usar Button, mas com o TouchableOpacity dá para deixar mais bonito*/}
        </TouchableOpacity>
        </View>
    
      </>
    );
  }
}

export default Diario;
