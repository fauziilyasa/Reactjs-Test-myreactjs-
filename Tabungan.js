import React from 'react'

export default class Tabungan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nama: null,
            kodeRekening: null,
            jumlahUang: null,
            tanggal: null,
            tabungan: [],
            posisidata : 0
        }
    }

    rubahNama(evt) {
        var value = evt.target.value
        this.setState({nama: value})
    }

    rubahKodeRekening(evt) {
        var value = evt.target.value
        this.setState({kodeRekening: value})
    }

    rubahJumlahUang(evt) {
        var value = evt.target.value
        var nominal = ''

        switch (value) {
            case 'T10':
                nominal = '10.000'
                break;
            case 'T20':
                nominal = '20.000'
                break;
            case 'T30':
                nominal = '30.000'
                break;
            case 'T40':
                nominal = '40.000'
                break;
            case 'T50':
                nominal = '50.000'
                break;
            case 'T100':
                nominal = '100.000'
                break;
            case 'T1JT':
                nominal = '1.000.000'
                break;
           case 'T100JT':
                nominal = '100.000.000'
                break;
            default:
                nominal = 'Tidak diketahui.'
        }

        this.setState({jumlahUang: nominal})
    }

    rubahTanggal(evt) {
        var value = evt.target.value
        this.setState({tanggal: value})
    }

    submit() {
        var data = {
            nama: this.state.nama,
            kodeRekening: this.state.kodeRekening,
            jumlahUang: this.state.jumlahUang,
            tanggal: this.state.tanggal,
        }
        var tabungan = this.state.tabungan
        console.log("Ini Daftar Barang", this.state.tabungan)
        tabungan.push(data)
        console.log("Ini sudah dimasukan ListBarang", tabungan)
        this.setState({
            tabungan : tabungan,
            nama: '',
            kodeRekening: '',
            jumlahUang: '',
            tanggal: '',

        })
    }

    fungsiDelete(nomortabungan){
        var tabungan = this.state.tabungan
        var tabunganYGDITAMPILKAN = []
        var tabunganYGDIHAPUS = []
        var tabunganTANPANOMOR = tabungan.map((function(data, index){
            if(index == nomortabungan){
                tabunganYGDIHAPUS.push(data)
            } else {
                tabunganYGDITAMPILKAN.push(data)
            }
        }))
        this.setState({
            tabungan: tabunganYGDITAMPILKAN
        })
      }

      async fungsiLihat(nomorTabungan){
        var tabungan = this.state.tabungan
        var dataYGDICARI = {}
        tabungan.map((function (data, index){
            if(index == nomorTabungan) dataYGDICARI = data
        }))
        console.log(dataYGDICARI.nama, this.state.nama)
        this.setState({
            nama: dataYGDICARI.nama,
            kodeRekening: dataYGDICARI.kodeRekening,
            jumlahUang: dataYGDICARI.jumlahUang,
            tanggal: dataYGDICARI.tanggal,
            posisidata: nomorTabungan
        })
      }

      fungsiUbahBarang(){
        var _this = this
        var posisidata = this.state.posisidata
        var tabungan = this.state.tabungan
        var dataYGDICARI = tabungan.map((function (data, nomor){
            if(nomor == posisidata){
                var dataDitemukan = data
                dataDitemukan.nama = _this.state.nama
                dataDitemukan.kodeRekening = _this.state.kodeRekening
                dataDitemukan.jumlahUang = _this.state.jumlahUang
                dataDitemukan.tanggal = _this.state.tanggal 
            }
        }))
        this.setState({
            tabungan: tabungan
        })
    }

    render(){
        var _this = this
        return(
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
            
                    <br></br>
                    
                    <div className='card'>
                        <div className='card-body'>
                            <br></br>
                        
                            <div className='alert alert-primary' align="center">TABUNGAN BANK</div>
                            
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input value={this.state.nama} type="text" className="form-control" onChange={this.rubahNama.bind(this)}/>
                                </div>

                                <div className="form-group">
                                    <label>Kode Rekening</label>
                                    <input value={this.state.kodeRekening} type="text" className="form-control" onChange={this.rubahKodeRekening.bind(this)}/>
                                </div>

                                <div className="form-group">
                                    <label>Jumlah Uang</label>
                                    <select className="form-control" onChange={this.rubahJumlahUang.bind(this)}>
                                        <option>Pilih Uang</option>
                                        <option>T10</option>
                                        <option>T20</option>
                                        <option>T30</option>
                                        <option>T40</option>
                                        <option>T50</option>
                                        <option>T100</option>
                                        <option>T1JT</option>
                                        <option>T100JT</option>
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label>Tanggal</label>
                                    <input value={this.state.tanggal} type="text" className="form-control" onChange={this.rubahTanggal.bind(this)} />
                                </div>

                                <button className="btn btn-block btn-primary" onClick={this.submit.bind(this)}>Masukan</button>
                                <button onClick={this.fungsiUbahBarang.bind(this)} className="btn btn-primary btn-block">Edit</button>
                                  
                                <hr></hr>

                                { this.state.tabungan.map(function(data, index) {
                                    return <div key={index}>
                                        <ul className="list-group">
                                            <li className="list-group-item">Nomor : {index + 1}</li>
                                            <li className="list-group-item">Nama : {data.nama}</li>
                                            <li className="list-group-item">Kode Rekening : {data.kodeRekening}</li>
                                            <li className="list-group-item">Jumlah Uang : {data.jumlahUang}</li>
                                            <li className="list-group-item">Tanggal : {data.tanggal}</li>
                                            <button onClick={_this.fungsiDelete.bind(_this, index)} className="btn btn-danger btn-block">Delete</button>
                                            <button onClick={_this.fungsiLihat.bind(_this, index)} className="btn btn-info btn-block">lihat</button>
                                        </ul>

                                        <br />
                                    </div>;
                                }) }
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div> 
        )
    }
}