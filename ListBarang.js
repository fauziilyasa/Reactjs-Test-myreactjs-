import React from 'react'
import Tabungan  from './Tabungan.js'

export default class ListBarang extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          KodeBarang: '',
          NamaBarang: '',
          JumlahBarang: '',
          HargaBarang: '',
          ListBarang:[],
          Total: '',
          posisiBarang: 0
        }
      }

      fungsiKodeBarang(evt){
        var KodeYGDIKETIK= evt.target.value
        this.setState({
          KodeBarang: KodeYGDIKETIK
        })
      }

      fungsiNamaBarang(evt){
        var NamaYGDIKETIK= evt.target.value
        this.setState({
          NamaBarang: NamaYGDIKETIK
        })
      }

      fungsiJumlahBarang(evt){
        var JumlahYGDIKETIK= evt.target.value
        this.setState({
          JumlahBarang: JumlahYGDIKETIK
        })
      }

      fungsiHargaBarang(evt){
        var HargaYGDIKETIK= evt.target.value
        this.setState({
          HargaBarang: HargaYGDIKETIK
        })
      }

      fungsiDelete(nomorBarang){
        var ListBarang = this.state.ListBarang
        var ListBarangYangDiTampilkan = []
        var ListBarangYangDihapus = []
        var ListBarangTanpaNomor = ListBarang.map((function(barang, index){
            if(index == nomorBarang){
                ListBarangYangDihapus.push(barang)
            } else {
                ListBarangYangDiTampilkan.push(barang)
            }
        }))
        this.setState({
            ListBarang: ListBarangYangDiTampilkan
        })
      }

      async fungsiLihat(nomorBarang){
        var ListBarang = this.state.ListBarang
        var barangYgDicari = {}
        ListBarang.map((function (barang, index){
            if(index == nomorBarang) barangYgDicari = barang
        }))
        console.log(barangYgDicari.NamaBarang, this.state.NamaBarang)
        this.setState({
            KodeBarang: barangYgDicari.KodeBarang,
            NamaBarang: barangYgDicari.NamaBarang,
            HargaBarang: barangYgDicari.HargaBarang,
            JumlahBarang: barangYgDicari.JumlahBarang,
            posisiBarang: nomorBarang
        })
      }

      fungsiInput() {
          var JumlahBarang = parseInt(this.state.JumlahBarang)
          var HargaBarang = parseInt(this.state.HargaBarang)
            var barang = {
            KodeBarang: this.state.KodeBarang,
            NamaBarang: this.state.NamaBarang,
            JumlahBarang: parseInt(this.state.JumlahBarang),
            HargaBarang: parseInt(this.state.HargaBarang),
            Total: parseInt(this.state.JumlahBarang) * parseInt(this.state.HargaBarang)
            }
            var ListBarang = this.state.ListBarang
            console.log("Ini Daftar Barang", this.state.ListBarang)
            ListBarang.push(barang)
            console.log("Ini sudah dimasukan ListBarang", ListBarang)
            this.setState({
                ListBarang : ListBarang,
                NamaBarang: '',
                KodeBarang: '',
                JumlahBarang: '',
                HargaBarang: ''
            })
        }

        fungsiUbahBarang(){
            var _this = this
            var posisiBarang = this.state.posisiBarang
            var ListBarang = this.state.ListBarang
            var barangYgDicari = ListBarang.map((function (barang, nomor){
                if(nomor == posisiBarang){
                    var barangDitemukan = barang
                    barangDitemukan.NamaBarang = _this.state.NamaBarang
                    barangDitemukan.KodeBarang = _this.state.KodeBarang
                    barangDitemukan.JumlahBarang = _this.state.JumlahBarang
                    barangDitemukan.HargaBarang = _this.state.HargaBarang
                    barangDitemukan.Total = parseInt(_this.state.JumlahBarang) * parseInt(_this.state.HargaBarang) 
                }
            }))
            this.setState({
                ListBarang: ListBarang
            })
        }

        // fungsiTotal(){
             
            // var totalJumlah = 0;
             //var totalHarga = 0;

            //this.state.ListBarang.map(function (barang, index) {
              //   totalJumlah = totalJumlah + barang.JumlahBarang
               // totalJumlah = totalJumlah + barang.JumlahBarang
           // })


            // var TotalYGDIKETIK= parseInt(this.state.JumlahBarang * this.state.HargaBarang)
            //this.setState({
              //  Total: TotalYGDIKETIK    
             //})
             //console.log(this.state.JumlahBarang)
            //console.log(this.state.HargaBarang)
        
        //}


        render() {
            var saya = this
            return(
                <div>
                    <Tabungan />
                    <br></br>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                               <div className='card'>
                                  <div className='card-body'>
                                    <div className='alert alert-primary'>Daftar Barang</div>
                                    <label>Kode Barang</label>
                                        <br></br>
                                        <input onChange={this.fungsiKodeBarang.bind(this)} value={this.state.KodeBarang} type='text' className="form-control"/>
                                        <br></br>
                                        <label>Nama Barang</label>
                                        <br></br>
                                        <input onChange={this.fungsiNamaBarang.bind(this)} value={this.state.NamaBarang} type='text' className="form-control"/>
                                        <br></br>
                                        <label>Jumlah Barang</label>
                                        <br></br>
                                        <input onChange={this.fungsiJumlahBarang.bind(this)} value={this.state.JumlahBarang} type='text' className="form-control"/>
                                        <br></br>
                                        <label>Harga Barang</label>
                                        <br></br>
                                        <input onChange={this.fungsiHargaBarang.bind(this)} value={this.state.HargaBarang} type='text' className="form-control"/>
                                        <br></br>
                                        <button onClick={this.fungsiInput.bind(this)} className="btn btn-primary btn-block">Tambah</button>
                                        <button onClick={this.fungsiUbahBarang.bind(this)} className="btn btn-primary btn-block">Edit</button>
                                  </div>
                               </div> 
                            </div>
                            <div className='col-md-8'>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Kode Barang</th>
                                    <th scope="col">Nama Barang</th>
                                    <th scope="col">Jumlah Barang</th>
                                    <th scope="col">Harga Barang</th>
                                    <th scope="col">Total Barang</th>
                                    <th scope="col">Opsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { this.state.ListBarang.map(function (barang, index) {
                                        return <tr key={index}>
                                            <td scope="row">{index+1}</td>
                                            <td>{barang.KodeBarang}</td>
                                            <td>{barang.NamaBarang}</td>
                                            <td>{barang.JumlahBarang}</td>
                                            <td>{barang.HargaBarang}</td>
                                            <td>{barang.Total}</td>
                                            <button onClick={saya.fungsiDelete.bind(saya, index)} className="btn btn-danger btn-block">Delete</button>
                                            <button onClick={saya.fungsiLihat.bind(saya, index)} className="btn btn-info btn-block">Lihat</button>
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