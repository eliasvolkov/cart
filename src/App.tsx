import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Product } from './components/Product';

const App: React.FC = () => {
    return (
        <div className="container">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <Product name="Book" quantity={5} price={20} />
                </tbody>
            </table>
        </div>
    );
};

export default App;
