import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Favorites, TeacherList } from "../pages";

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs = () => {
  return (
    <Navigator>
      <Screen name="TeacherList" component={TeacherList} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
};

export default StudyTabs;
