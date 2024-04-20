import { registerRootComponent } from "expo";

import App from "./App";
import Medikdrawer from "./Telemedicineapp/Drawer";
import ImageCarousel from "./Telemedicineapp/Dashboardroutes/Imagestockpile";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Medikdrawer);
