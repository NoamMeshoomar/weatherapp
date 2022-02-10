import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";

import NavBar from "./components/NavBar/NavBar";

const App = () => {
    return (
        <ToastProvider autoDismissTimeout={3000}>
            <div className="App">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/favorites" element={<Favorites />} />
                    </Routes>
                </Router>
            </div>
        </ToastProvider>
    );
}

export default App;