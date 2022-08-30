import './App.css';
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import Home from "./myComponents/Home";
import About from "./myComponents/About";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <>
                <Header title='MyTodosList' searchBar={true} />
                <Routes>
                    <Route path="/home" element={<Home />} ></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>

                <Footer />
            </>
        </BrowserRouter >
        );
}

export default App;
