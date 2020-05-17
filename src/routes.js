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
import Servicos from "./pages/Servicos";

const Routes = createAppContainer(
  createStackNavigator(
    {   Main,
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
      Servicos: {
        screen: Servicos,
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
