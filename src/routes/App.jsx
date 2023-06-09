import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import New from '../pages/New';
import Edit from '../pages/Edit';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default App;