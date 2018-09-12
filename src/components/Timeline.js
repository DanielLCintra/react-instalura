import React, { Component } from 'react';
import Foto from './Foto'

export default class Timeline extends Component {
    render () {
        return (
            <div class="fotos container">
                <Foto/>
                <Foto/>
            </div>
        )
    }
}
