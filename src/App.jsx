import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

export default function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </Router>
  )
}


