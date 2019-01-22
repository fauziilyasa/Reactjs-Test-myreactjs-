import React from 'react';
import {Card,CardText,Grid,Cell,TextField,Toolbar,Button,TableHeader,DataTable,TableRow,
TableBody,TableColumn} from 'react-md';
const style = { maxWidth: 500 };
const lebar = { maxWidth: 900 };

export default class App extends React.Component{
    
    constructor(props){
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
    
    inputNama(evt){
        this.setState({
            namaSiswa : evt
        })
    }

    inputNomor(evt){
        this.setState({
            nomorUrut : evt
        })
    }

    inputKeterangan(evt){
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

    render(){
        var _this = this
        return(
            <div>
                <Toolbar
                colored
                title="Absensi"
                />
                    <Grid className="grid-example">
                        <Cell size={4}>
                            <Card style={style} className="md-block-centered">
                                <CardText> <h3>Data Siswa</h3>
                                    <TextField
                                    value={this.state.namaSiswa}
                                    onChange={this.inputNama.bind(this)}
                                    label="Nama Siswa"
                                    />

                                    <TextField
                                    value={this.state.nomorUrut}
                                    onChange={this.inputNomor.bind(this)}
                                    label="Nomor Urut"
                                    />
                                    <br></br><br></br>

                                    <div className="form-group">
                                        <select onChange={this.rubahKehadiran.bind(this)} className="form-control">
                                            <option>Kehadiran</option>
                                            <option>Hadir</option>
                                            <option>Sakit</option>
                                            <option>Ijin</option>
                                        </select>
                                    </div>

                                    <TextField
                                    value={this.state.keterangan}
                                     onChange={this.inputKeterangan.bind(this)}
                                    label="Keterangan"
                                    />

                                    <br></br>

                                    <Button onClick={this.submit.bind(this)} flat primary swapTheming>Input</Button>
                                    <br></br> <br></br>
                                    <Button onClick={this.fungsiubahdata.bind(this)} flat primary swapTheming>Edit</Button>
                                </CardText>
                            </Card>
                        </Cell>

                        <Cell size={8}>
                            <Card style={lebar} className="md-block-centered">  
                                <CardText>
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
                                        return  <TableRow key={index}>
                                                    <TableColumn>{index+1}</TableColumn>
                                                    <TableColumn>{data.namaSiswa}</TableColumn>
                                                    <TableColumn>{data.nomorUrut}</TableColumn>
                                                    <TableColumn>{data.kehadiran}</TableColumn>
                                                    <TableColumn>{data.keterangan}</TableColumn>
                                                        <TableColumn>
                                                        <Button onClick={_this.fungsiDelete.bind(_this, index)} flat primary swapTheming>Delete</Button>
                                                        <br></br> <br></br>
                                                        <Button onClick={_this.fungsiLihat.bind(_this, index)} flat primary swapTheming>Lihat</Button>
                                                        </TableColumn>
                                                           
                                                </TableRow>
                                        })}
                                    </TableBody>
                                </DataTable>
                                </CardText>
                            </Card>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}