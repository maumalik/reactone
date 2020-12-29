import React from 'react';
import './css/Beranda.css';
import Product from '../class/Product';

class Beranda extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            keranjang: 0
        }
    }

    addKeranjang = (value) => {
        this.setState({
            keranjang: this.state.keranjang + value
        });
    }

    render() {
        return <div>
            <div className="header">
                <h3>Ini Header</h3>
                <h4>Keranjang: {this.state.keranjang}</h4>  
            </div>
            <Product stock='10' harga='200000' namaproduct='Hewan Peliharaan' tambah={(value) => this.addKeranjang(value)}/>
            <Product stock='3' harga='190000' namaproduct='Kucing Persia' tambah={(value) => this.addKeranjang(value)}/>
            <Product stock='3' harga='500000' namaproduct='Kucing Anggora' tambah={(value) => this.addKeranjang(value)}/>
        </div>
    }
}

export default Beranda;