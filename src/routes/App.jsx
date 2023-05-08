import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default App;