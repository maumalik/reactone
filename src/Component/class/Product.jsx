import React from 'react';
import './css/Product.css'

class Product extends React.Component{
    constructor(props){
        super(props)

        if (this.props.stock  > 0) {
            this.state = {
                status: 'Tersedia',
                stock:this.props.stock,
            }
        } else {
            this.state = {
                status: 'Habis',
                stock:this.props.stock,

            }
        }

    }

    tambah = () =>{
        this.props.tambah(1);
    }

    clickBeli = () => {
        if (this.state.stock > 0) {
            this.setState({
                stock:this.state.stock - 1
            })
        } else {
            this.setState({
                status:'Habis'
            })
        }
        
        this.tambah()
    }
    
    render(){
        return <div className='product-warper'>
            <img src="https://placeimg.com/640/480/animals" alt="product"/>
            <p className='stock'>{this.state.stock}</p>
            <h4>{this.props.namaproduct}</h4>
            <p>{this.props.harga}</p>
            <p>{this.state.status}</p>
            <button onClick={this.clickBeli}>Beli</button>
        </div>
    }
}

export default Product;