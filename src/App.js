import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout'
import CustomThemeProvider from './Themes/ThemeProvider';

function App() {
  return (
    <div>
      <CustomThemeProvider>
        <CssBaseline />
        <Layout/>
      </CustomThemeProvider>
    </div>
  );
}

export default App;
