import React from 'react';

interface IMainProps {
    children : React.ReactNode
}


const Main : React.FC<IMainProps> = ({children}) => {
    return (
        <main>
            {children}
        </main>
    );
};

export default Main;