import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MenuItem from "../components/MenuItem";
import { Icon } from "react-native-elements";
import PropTypes from 'prop-types'

const style = StyleSheet.create({
  button: {
    backgroundColor: "#FFF",
    width: "50%",
  },
  title: {
    color: "#000000",
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    backgroundColor: "#DDD",
  },
  container2: {
    width: "50%",
    aspectRatio: 1,
    borderRadius: 10,
    padding: 2,
  },
  view1: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    alignItems: "center",
  },
});

class Main extends Component {
    static propTypes = {
        navigation: PropTypes.any.isRequired,
    }
  render() {
    const { navigation } = this.props
    return (
      <>
        <View style={style.container}>
          <MenuItem
            onPress={() => {
              navigation.navigate("Diario");
            }}
            image={
              <Icon
                styleIcon={style.icon}
                type="entypo"
                name="calendar"
                color="#00b33c"
                size={60}
              />
            }
            title="DIÁRIO DOS SINTOMAS"
          />

          <MenuItem
            onPress={() => {
              navigation.navigate("Orientacoes");
            }}
            image={
              <Icon
                styleIcon={style.icon}
                type="entypo"
                name="news"
                color="#00b33c"
                size={60}
              />
            }
            title="ORIENTAÇÕES"
          />
          <MenuItem
            onPress={() => {
              navigation.navigate("Perfil");
            }}
            image={
              <Icon
                styleIcon={style.icon}
                type="entypo"
                name="user"
                color="#00b33c"
                size={60}
              />
            }
            title="PERFIL"
          />
          <MenuItem
            onPress={() => {
              navigation.navigate("Assistente");
            }}
            image={
              <Icon
                styleIcon={style.icon}
                type="ionicons"
                name="people"
                color="#00b33c"
                size={60}
              />
            }
            title="ASSISTENTES SOCIAIS"
          />
          <MenuItem
            onPress={() => {
              navigation.navigate("Servicos");
            }}
            image={
              <Icon
                styleIcon={style.icon}
                type="entypo"
                name="chat"
                color="#00b33c"
                size={60}
              />
            }
            title="CONVERSE CONOSCO"
          />
          <MenuItem
            onPress={() => {
              navigation.navigate("Servicos");
            }}
            image={
              <Icon
                styleIcon={style.icon}
                type="font-awesome"
                name="map-marker"
                color="#00b33c"
                size={60}
              />
            }
            title="SERVIÇOS DE SAÚDE MAIS PRÓXIMOS"
          />
        </View>
      </>
    );
  }
}

export default Main;
