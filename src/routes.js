import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./pages/Login";
import Assistente from "./pages/Assistente";
import Cadastro from "./pages/Cadastro";
import Central from "./pages/Central";
import Diario from "./pages/Diario";
import EsqueciSenha from "./pages/EsqueciSenha";
import Familiar from "./pages/Familiar";
import Orientacoes from "./pages/Orientacoes";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Assistente:{
        screen: Assistente,
        navigationOptions:{
          headerTitleStyle:{
            margin:90,
            fontWeight: "bold",
            alignSelf:  "center",
            textAlign: "center",
          }
        }
      },
      Cadastro:{
        screen: Cadastro,
        navigationOptions:{
          headerTitleStyle:{
            margin:90,
            fontWeight: "bold",
            alignSelf:  "center",
            textAlign: "center",
          }
        }
      },
      Central:{
        screen: Central,
        navigationOptions:{
          headerTitleStyle:{
            margin:90,
            fontWeight: "bold",
            alignSelf:  "center",
            textAlign: "center",
          }
        }
      },
      Diario:{
        screen: Diario,
        navigationOptions:{
          headerTitleStyle:{
            margin:90,
            fontWeight: "bold",
            alignSelf:  "center",
            textAlign: "center",
          }
        }

      },
      EsqueciSenha:{
        screen: EsqueciSenha,
        navigationOptions:{
          headerTitleStyle:{
            margin:90,
            fontWeight: "bold",
            alignSelf:  "center",
            textAlign: "center",
          }
        }

      },
      Familiar:{
        screen: Familiar,
        navigationOptions:{
          headerTitleStyle:{
            margin:90,
            fontWeight: "bold",
            alignSelf:  "center",
            textAlign: "center",
          }
        }

      },
      Orientacoes:{
        screen: Orientacoes,
        navigationOptions:{
          headerTitleStyle:{
            margin:90,
            fontWeight: "bold",
            alignSelf:  "center",
            textAlign: "center",
          }
        }

      },
      
    },
    {
      defaultNavigationOptions: {
        headerTitle: 'COVID',
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold",
          alignSelf:  "center",
          textAlign: "center",
          margin: 140,
        },
        headerStyle: {
          backgroundColor:"#00b33c"
        }
      }
    }
  )
);

export default Routes;
