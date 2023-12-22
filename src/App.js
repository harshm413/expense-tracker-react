import HomeComponent from './module/home';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <div className="header">Expense Tracker</div>
            <HomeComponent />
        </div>
    );
};

export default App;
