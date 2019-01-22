import React from 'react'

export default class Kalkulator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Nama: '',
          Kelas: '',
          Jurusan: '',
          Input: '',
          daftarSiswa: []
        }
      }
    
      fungsiNama(evt) {
        var NamaYGDIKETIK = evt.target.value
        this.setState({
          Nama: NamaYGDIKETIK
        })
      }
    
      fungsiKelas(evt) {
        var KelasYGDIKETIK = evt.target.value
        this.setState({
          Kelas: KelasYGDIKETIK
        })
      }
    
      fungsiJurusan(evt) {
        var JurusanYGDIKETIK = evt.target.value
        this.setState({
          Jurusan: JurusanYGDIKETIK
        })
    }
    fungsiInput() {
        var data = {
          Nama: this.state.Nama,
          Kelas: this.state.Kelas,
          Jurusan: this.state.Jurusan
        }

        var daftarSiswa = this.state.daftarSiswa
        console.log("Ini Daftar Siswa", this.state.daftarSiswa)
        daftarSiswa.push(data)
        console.log("Ini sudah dimasukan daftarSiswa", daftarSiswa)
        this.setState({
            daftarSiswa : daftarSiswa
        })
    }
   
    render() {
        return ( 
        <div>
            <div className="container">
                <div className="alert alert-primary">
                    DAFTAR SISWA
                </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                        <label>Nama</label>
                                        <br></br>
                                        <input type='text' className="form-control" onChange={this.fungsiNama.bind(this)} />
                                        <br></br>
                                        <label>Kelas</label>
                                        <br></br>
                                        <input type='text' className="form-control" onChange={this.fungsiKelas.bind(this)} />
                                        <br></br>
                                        <label>Jurusan</label>
                                        <br></br>
                                        <input type='text' className="form-control" onChange={this.fungsiJurusan.bind(this)} />
                                        <br></br>
                                    <button onClick={this.fungsiInput.bind(this)} className="btn btn-primary btn-block">Input</button>
                                </div>
                            </div>
                        
                        </div>
                            <div className="col-md-8">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Kelas</th>
                                    <th scope="col">Jurusan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.state.daftarSiswa.map(function (data, index) {
                                        return <tr key={index}>
                                            <td scope="row">{index+1}</td>
                                            <td>{data.Nama}</td>
                                            <td>{data.Kelas}</td>
                                            <td>{data.Jurusan}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                            
                            </div>
                    </div>
            </div>
        </div>
        )
    }
  }