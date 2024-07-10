function App() {
    const App = document.createElement('div');
    App.textContent = "helLoo WorldD";

    return App;
}

document
    .getElementsById('root')
    .appendChild(App());