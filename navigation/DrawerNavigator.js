import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator.js"
import Profile from '../screens/Profile.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
        >
            <Drawer.Screen
                name="Home" component={TabNavigator}
            />
            <Drawer.Screen
                name="Profile" component={Profile}
            />

        </Drawer.Navigator>
    )
}

export default DrawerNavigator
