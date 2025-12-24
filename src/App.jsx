import { Provider } from "react-redux"
import Body from "./Components/Body"
import appStore from "./Utils/appStore"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Browse from "./Components/Browse"

function App() {


  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="browse" element={<Browse />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
