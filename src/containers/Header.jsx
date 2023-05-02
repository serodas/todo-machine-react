import React from 'react';

const Header = ({children, loading}) => {
    return (
        <header className='Header'>
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, { loading: loading });
                })
            }
        </header>
    );
}

export default Header;