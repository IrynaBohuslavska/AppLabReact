import './App.css';
import NavBar from "./components/navbar";
import BestApp from "./components/BestApp";
import Companies from "./components/TrustedComp";
import AppFeatures from "./components/AwesomeAppFeatures";
import Smart from "./components/SmartJack";
import Efects from "./components/Efects";
import Features from "./components/Feactures";
import ChoseOurApp from "./components/WhyYouChoose";
import Ultimate from "./components/Ultimate";
import Button from "./components/reusedComponents/button";
import Buy from "./components/Buy";
import Clients from "./components/Clients";
import Questions from "./components/Questions";
import Dounload from "./components/Dounload";
import Fotter from "./components/Fotter";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <BestApp/>
            <Companies/>
            <AppFeatures/>
            <Smart/>
            <Efects/>
            <Features/>
            <ChoseOurApp/>
            <Ultimate/>
            <Buy/>
            <Clients/>
            <Questions/>
            <Dounload/>
            <Fotter/>
        </div>
    );
}

export default App;
