import React, { Component } from "react";
import Calculator from "../calculator/calculator";
class cardList extends Component {
    state = {
        calculator_visible: false
    }

    memunculkanKalkulator = () => {
        this.setState(() => {
            return {
                calculator_visible: !this.state.calculator_visible
            };
        })
    }

    render() {
        return (
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="font-bold text-2xl tracking-tight text-gray-900">
                     Daftar Menu
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {this.props.menu_data.map(({gambar, nama, stok, harga}) => (
                        <div className="rounded-md bg-white group relative shadow-xl">
                            <div className="rounded-md bg-white group relative shadow-md overflow-hidden group-hover:opacity-75 lg:h-70">
                                <img
                                src={gambar}
                                alt="Gambar"
                                className="rounded-md w-full h-32 sm:h-48 object-cover"
                                />
                                <div className = "m-3">
                                    <span className = "font-bold">{nama}</span>
                                    <span className = "block text-green-500 font-bold text-lg">Rp.{harga}</span>
                                </div>
                                <div className = "bg-green-500 text-white text-xs font-bold rounded-full p-1 absolute top-0 ml-2 mt-2">
                                    <span className = "ml-1 mr-1">Tersisa {stok} porsi</span>
                                </div>
                            </div> 
                        </div>
                    ))}
                </div>
                <button onClick = {this.memunculkanKalkulator} className= "shadow-md mt-10 mb-10 justify-center flex bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-3 px-6 border border-green-500 hover:border-transparent rounded text-xl">
                    Pesan Sekarang
                </button>
                {this.state.calculator_visible && <Calculator />}
            </div>
        );
    }
}

export default cardList