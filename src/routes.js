import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Assistente from "./pages/Assistente";
import Cadastro from "./pages/Cadastro";
import Central from "./pages/Central";
import Diario from "./pages/Diario";
import EsqueciSenha from "./pages/EsqueciSenha";
import Familiar from "./pages/Familiar";
import Orientacoes from "./pages/Orientacoes";
import Chat from "./pages/Chat";
import PreCadastro from "./pages/PreCadastro";

const Routes = createAppContainer(
  createStackNavigator(
    { 
      Diario: {
        screen: Diario,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Diário",
        },
      },
      Main,
      Central: {
        screen: Central,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Central",
        },
      },
      Login,
     
      Orientacoes: {
        screen: Orientacoes,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Orientações",
        },
      },
      PreCadastro: {
        screen: PreCadastro,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Cadastro",
        },
      },
      Chat: {
        screen: Chat,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Chat",
        },
      },

      Cadastro: {
        screen: Cadastro,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Cadastro",
        },
      },
      Assistente: {
        screen: Assistente,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Assistentes Sociais",
        },
      },

      
      EsqueciSenha: {
        screen: EsqueciSenha,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Esqueci Senha",
        },
      },
      Familiar: {
        screen: Familiar,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTitle: "COVID",
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold",
          alignSelf: "center",
          textAlign: "center",
          margin: 70,
        },
        headerStyle: {
          backgroundColor: "#00b33c",
        },
      },
    }
  )
);

export default Routes;
