import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import StorybookUIRoot from './.storybook';
import './global.css'

// https://docs.expo.dev/router/reference/troubleshooting/#expo_router_app_root-not-defined

// Must be exported or Fast Refresh won't update the context
export function App() {
  
  const ctx = require.context('./app');
  return <StorybookUIRoot> <ExpoRoot context={ctx} /> </StorybookUIRoot>;
}

export {default} from './.storybook';  

registerRootComponent(App);

