import angular from 'angular';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {Login} from './app/containers/Login/Login';
import {Forgot} from './app/containers/Forgot/Forgot';
import {Signup} from './app/containers/Signup/Signup';
import {Header} from './app/components/Header';
import {MainSection} from './app/components/MainSection';
import {TodoTextInput} from './app/components/TodoTextInput';
import {TodoItem} from './app/components/TodoItem';
import {Footer} from './app/components/Footer';

import {Validator} from './app/components/mValidator';

import 'angular-ui-router';
import routesConfig from './routes';
import 'angular-material';
import 'angular-material/angular-material.css';
import './index.scss';
import './app/containers/Login/Login.scss';
import './app/containers/Forgot/Forgot.scss';
import './app/containers/Signup/Signup.scss';

angular
  .module('app', ['ui.router', 'ngMaterial'])
  .config(routesConfig)
  .service('todoService', TodoService)
  .component('app', App)
  .component('login', Login)
  .component('forgot', Forgot)
  .component('signup', Signup)
  .component('validator', Validator)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem);
