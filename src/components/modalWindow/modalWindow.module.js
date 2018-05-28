import angular from 'angular';
import ModalWindowComponent from './modalWindow.component';

const ModalWindowModule = angular
    .module('modalWindow', [])
    .component('modalWindow', ModalWindowComponent)
    .name

export default ModalWindowModule