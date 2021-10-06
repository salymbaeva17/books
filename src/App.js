import {BrowserRouter as Router, Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import Cart from "./pages/Cart"
import Layout from "./components/Layout"


function App() {
  return (
   <Router>
       <Layout>
           <Route exact path="/"><Homepage /></Route>
           <Route path="/cart"><Cart /></Route>
       </Layout>
   </Router>
  )
}

export default App;



// установленные библиотеки
// react-redux
// redux-devtools
// redux-devtools-extension
// redux-thunk
// redux
// react-router-dom