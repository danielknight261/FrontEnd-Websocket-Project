'use client';

//Provider file is noramlly wrapped around perhaps index.js filer, in next 13 there version is 
//"LAYOUT", provider would nonrmally be wrpaped like this 

// <Provier store={store}>
//     {children}
// </Provier>

// I have seen this in examples and not in the new version , create provider as follow  ???

import { Provider } from 'react-redux';
import { store } from './store'

export function Providers({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}