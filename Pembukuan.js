import React from 'react'

export default class Kalkulator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      namaBuku: '',
      volumeBuku: '',
      inputBuku: '',
      rakBuku: []
    }
  }

  fungsinamaBuku(evt) {
    var namaBukuYGDIKETIK = evt.target.value
    this.setState({
      namaBuku: namaBukuYGDIKETIK
    })
  }

  fungsivolumeBuku(evt) {
    var namavolumeBukuYGDIKETIK = evt.target.value
    this.setState({
      volumeBuku: namavolumeBukuYGDIKETIK
    })
  }

  fungsinputBuku() {
    var buku = {
      namaBuku: this.state.namaBuku,
      volumeBuku: this.state.volumeBuku
    }
    
    var rakBuku = this.state.rakBuku
    console.log("INI TEMPAT BUKU", this.state.rakBuku)
    rakBuku.push(buku)
    console.log("INI SUDAH DIMASUKAN BUKU", rakBuku)
    this.setState({
      rakBuku: rakBuku
    })
  }



  render() {
    return ( 
      <div>
        <div className= "container"> 
          <div className="row">
           <div className="col-md-4"></div>
           <div className="col-md-4">
           <br></br> <br></br><br></br>
           <div className="card">
           <div className="card-body">
           <div align="center"><h5>PEMBUKUAN</h5></div>
              <br></br>
              <form>
              <label>Nama Buku</label>
              <br></br>
              <input type='text' className="form-control" onChange={this.fungsinamaBuku.bind(this)} />
              <br></br>
              <label>Volume Buku</label>
              <br></br>
              <input type='text' className="form-control" onChange={this.fungsivolumeBuku.bind(this)} />
              <br></br> <br></br>
              </form>
              <button onClick={this.fungsinputBuku.bind(this)} className="btn btn-primary btn-block" type="submit">Input Buku</button>
              <hr></hr>
              <div>{this.state.inputBuku}
                {this.state.rakBuku.map(function (buku, index){
                  return <p key={index} className="alert alert-info">{buku.namaBuku}</p>
                })}
              </div>
              <br />
  
           </div>
           </div>
           </div>
           <div className="col-md-4"></div>
           </div>
        </div>
      </div>
    )
  }
}