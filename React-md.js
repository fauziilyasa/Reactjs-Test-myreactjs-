import React from 'react';

import {
  Grid,
  Cell,
  Toolbar,TextField,Button,DataTable,TableHeader,TableBody,TableRow,TableColumn,
} from 'react-md';


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      namaSiswa: '',
      nomorUrut: '',
      kehadiran: '',
      keterangan: '',
      listdata: [],
      posisidata: 0
    }
  }

  masukinNama(evt){
    this.setState({
      namaSiswa: evt
    })
  }

  masukinNomor(event){
    this.setState({
      nomorUrut: event
    })
  }

  masukinketerangan(evt){
    this.setState({
      keterangan : evt
    })
  }

  rubahKehadiran(evt) {
    var value = evt.target.value
    var status = ''

    switch (value) {
        case 'Hadir':
            status = 'Hadir'
            break;
        case 'Sakit':
            status = 'Sakit'
            break;
        case 'Ijin':
            status = 'Ijin'
            break;
        default:
            status = 'Status Tidak diketahui.'
    }

    this.setState({kehadiran: status})
}


  fungsiDelete(nomordata){
    var listdata = this.state.listdata
    var listdataYGDITAMPILKAN = []
    var listdataYGDIHAPUS = []
    var listdataTANPANOMOR = listdata.map((function(data, index){
        if(index == nomordata){
            listdataYGDIHAPUS.push(data)
        } else {
            listdataYGDITAMPILKAN.push(data)
        }
    }))
    this.setState({
        listdata: listdataYGDITAMPILKAN
    })
  }

  async fungsiLihat(nomordata){
    var listdata = this.state.listdata
    var dataYGDICARI = {}
    listdata.map((function (data, index){
        if(index == nomordata) dataYGDICARI = data
    }))
    console.log(dataYGDICARI.namaSiswa, this.state.namaSiswa)
    this.setState({
        namaSiswa: dataYGDICARI.namaSiswa,
        nomorUrut: dataYGDICARI.nomorUrut,
        kehadiran : dataYGDICARI.kehadiran,
        keterangan : dataYGDICARI.keterangan,
        posisidata: nomordata
    })
  }

  fungsiubahdata(){
    var _this = this
    var posisidata = this.state.posisidata
    var listdata = this.state.listdata
    var dataYGdicari = listdata.map(function(data, nomor){
        if(nomor == posisidata){
          var dataDitemukan = data
          data.namaSiswa = _this.state.namaSiswa
          data.nomorUrut = _this.state.nomorUrut
          data.kehadiran = _this.state.kehadiran
          data.keterangan = _this.state.keterangan
        }
    })
    this.setState({
      listdata : listdata
    })
}

  submit() {
    var data = {
        namaSiswa: this.state.namaSiswa,
        nomorUrut: this.state.nomorUrut,
        kehadiran:this.state.kehadiran,
        keterangan:this.state.keterangan
    }
    var listdata = this.state.listdata
    console.log("Ini listdata", this.state.listdata)
    listdata.push(data)
    console.log("Ini sudah dimasukan listdata", listdata)

    this.setState({
        listdata : listdata,
        namaSiswa : '',
        nomorUrut : '',
        kehadiran : '',
        keterangan : ''
    })
}

  render() {
    var _this = this
    return (
      <div>
         <Toolbar colored title="Absensi"/>
          <Grid className="grid-example">
              <Cell size={4}>
                <div className='card'>
                  <div className='card-body'>
                    <TextField
                      id="floating-center-title"
                      label="Nama Siswa"
                      lineDirection="center"
                      value={this.state.namaSiswa}  
                      onChange={this.masukinNama.bind(this)}
                    />
                      <TextField
                      id="floating-center-title"
                      label="Nomor Urut"
                      lineDirection="center"
                      value={this.state.nomorUrut}  
                      onChange={this.masukinNomor.bind(this)}
                    />
                    <br></br>
                    <div className="form-group">
                      <label>Kehadiran</label>
                      <select className="form-control" onChange={this.rubahKehadiran.bind(this)}>
                          <option>Kehadiran</option>
                          <option>Hadir</option>
                          <option>Sakit</option>
                          <option>Ijin</option>
                      </select>
                    </div>
                    <TextField
                      id="floating-center-title"
                      label="Keterangan"
                      lineDirection="center"
                      value={this.state.keterangan}  
                      onChange={this.masukinketerangan.bind(this)}
                    />
                    <br></br>
                    <Button  onClick={this.submit.bind(this)} flat primary swapTheming>Input</Button>
                    <br></br> <br></br>
                    <Button  onClick={this.fungsiubahdata.bind(this)} flat primary swapTheming>Update</Button>
                  </div>
                </div>
              </Cell>
              <Cell size={8}>
                <div className='card'>
                  <div className='card-body'>
                    <DataTable plain>
                      <TableHeader>
                        <TableRow>
                          <TableColumn>No</TableColumn>
                          <TableColumn>Nama Siswa</TableColumn>
                          <TableColumn>Nomor Urut</TableColumn>
                          <TableColumn>Kehadiran</TableColumn>
                          <TableColumn>Keterangan</TableColumn>
                          <TableColumn>Opsi</TableColumn>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {this.state.listdata.map(function(data, index){
                          return <TableRow key={index}>
                            <TableColumn>{index+1}</TableColumn>
                            <TableColumn>{data.namaSiswa}</TableColumn>
                            <TableColumn>{data.nomorUrut}</TableColumn>
                            <TableColumn>{data.kehadiran}</TableColumn>
                            <TableColumn>{data.keterangan}</TableColumn>
                            <button onClick={_this.fungsiDelete.bind(_this, index)} className="btn btn-danger btn-block">Delete</button>
                            <button onClick={_this.fungsiLihat.bind(_this, index)} className="btn btn-info btn-block">Lihat</button>
                          </TableRow>
                        })}
                      </TableBody>
                    </DataTable>
                  </div>  
                </div>  
              </Cell>
          </Grid>
      </div>
    );
  }
}