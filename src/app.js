import Layer from './components/layer/layer.js'
import './css/common.css'
import './css/reset.less'
import './components/layer/layer.scss'

const App = function () {
    var dom = document.getElementById("app");
    var layer = new Layer();

    dom.innerHTML = layer.tpl;

}

var app = new App()