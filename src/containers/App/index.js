/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { observer } from "mobx-react";
import { SafeAreaView, ScrollView, View, StatusBar } from 'react-native';

import TodoList from '../../components/TodoList';

import stores from '../../stores';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <TodoList todoStore={stores.todoStore} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
