import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
        constructor(props) {
                super(props);
                this.state = {
                  memasukanAngka: ''
                }
              }

        fungsimemasukanAngka(evt){
                var angkaYGDIKETIK = evt.target.value
                this.setState({
                        memasukanAngka = angkaYGDIKETIK
                })
        }

 render() {
    return (
      <div classNameName="App">
        <div className="container" id="judul">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <br />
            <br />  
            <br />
                    <div className="card">
                            <div className="card-body">
        <div className="row">
                <div className="col-md-12">
                        <div  className="alert alert-primary" role="alert" >
                        <div id="kotakmerah"></div>   
                        <div></div>   
                        <div></div>
                        Kalkulator
                        </div>
                </div>     
        </div>
        <div className="row">
                <div className="col-md-12">
                        <form>
                                <div className="form-group">
                                        <label id="angka2" for="formGroupExampleInput">0</label>
                                        <input onChange {this.memasukanAngka.bind(this)} type="text" className="form-control" id="angka" value="" />
                                </div>
                        </form>
                </div>
                </div>
                <div className="row">
                        <div className="col-md-3">
                                <button className="btn btn-primary btn-block" type="button">CE</button>
                        </div>
                        <div className="col-md-3">
                                <button onClick='this' className="btn btn-primary btn-block" type="button">C</button>
                        </div>
                        <div className="col-md-3">
                                <button onClick {this.memasukanAngka.bind(this)} className="btn btn-primary btn-block" type="button">%</button>
                        </div>
                        <div className="col-md-3">
                                <button onClick {this.memasukanAngka.bind(this)} className="btn btn-primary btn-block" type="button">/</button>
                        </div>
                </div>
                <br />
                <div className="row">
                        <div className="col-md-3">
                                <button onClick=" {this.memasukanAngka.bind(this)}(7)" className="btn btn-primary btn-block" type="button">7</button>
                        </div>
                        <div className="col-md-3">
                                <button onClick=" {this.memasukanAngka.bind(this)}(8)" className="btn btn-primary btn-block" type="button">8</button>
                        </div>
                        <div className="col-md-3">
                                <button onClick=" {this.memasukanAngka.bind(this)}(9)" className="btn btn-primary btn-block" type="button">9</button>
                        </div>
                        <div className="col-md-3">
                                <button onClick=" {this.memasukanAngka.bind(this)}('*')" className="btn btn-primary btn-block" type="button">x</button>
                        </div>
                        </div>
                        <br />
                        <div className="row">
                        <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}(4)" className="btn btn-primary btn-block" type="button">4</button>
                        </div>
                        <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}(5)" className="btn btn-primary btn-block" type="button">5</button>
                        </div>
                        <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}(6)" className="btn btn-primary btn-block" type="button">6</button>
                        </div>
                        <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}('-')" className="btn btn-primary btn-block" type="button">-</button>
                        </div>
                        </div>
                        <br />
                        <div className="row">
                                <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}(1)" className="btn btn-primary btn-block" type="button">1</button>
                                </div>
                                <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}(2)" className="btn btn-primary btn-block" type="button">2</button>
                                </div>
                                <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}(3)" className="btn btn-primary btn-block" type="button">3</button>
                                </div>
                                <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}('+')" className="btn btn-primary btn-block" type="button">+</button>
                                </div>
                        </div>
                        <br />
                        <div className="row" >
                                <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}('-')" className="btn btn-primary btn-block" type="button">+/-</button>
                                </div>
                                <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}('0')" className="btn btn-primary btn-block" type="button">0</button>
                                </div>
                                <div className="col-md-3">
                                        <button onClick=" {this.memasukanAngka.bind(this)}('.')" className="btn btn-primary btn-block" type="button">,</button>
                                </div>
                                <div className="col-md-3">
                                        <button onClick="hitung()" className="btn btn-primary btn-block" type="button">=</button>
                                </div>
                        </div>
                            </div>
                          </div>

            <div className="col-md-4"></div>
        </div>
    </div>
    </div>
      </div>
        
      
    
    )
  }
}
export default App;
