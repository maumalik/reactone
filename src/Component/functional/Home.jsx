import React from 'react';
import Product from '../class/Product';
import Blog from './Blog';

const Home = () => {
    return <div>
        <Product stock='10' harga='200000' namaproduct='Hewan Peliharaan'/>
        <Product stock='3' harga='190000' namaproduct='Kucing Persia'/>
        <Product stock='3' harga='500000' namaproduct='Kucing Anggora'/>
        {/*<Blog 
            title='Tutorial Blokchain Part 1' 
            description='Menjelaskan tentang pembuatan apliasi Blockchain Bagian 1'/>
        <Blog 
            title='Tutorial Blokchain Part 2' 
            description='Menjelaskan tentang pembuatan apliasi Blockchain Bagian 2'/>
        <Blog/>*/}
    </div>
}

export default Home;