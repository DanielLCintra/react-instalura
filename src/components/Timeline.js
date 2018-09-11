import React, { Component } from 'react';

export default class Timeline extends Component {
    render () {
        return (
            <div class="fotos container">
                <div class="foto">
                    <header class="foto-header">
                    <figure class="foto-usuario">
                        <img src="https://scontent.fbhz2-1.fna.fbcdn.net/v/t1.0-9/41336992_10204872509449736_837078745054445568_n.jpg?_nc_cat=0&_nc_eui2=AeEqG3ByX5GKxcH84wWNswEfQLD-VSMbcy9NyZKDz9ZCRu65geuuJSlZvk8oTE75jk__kvW3MY-qIQYH0J5hGI6EtYF8b_sydT_0A_CRkumEMg&oh=0ce70c40e0b1ebc028c5bfe1e707e47f&oe=5C356D7E" alt="foto do usuario"/>
                        <figcaption class="foto-usuario">
                        <a href="#">
                            Daniel Cintra
                        </a>  
                        </figcaption>
                    </figure>
                    <time class="foto-data">03/10/2016 20:13</time>
                    </header>

                    <img alt="foto" class="foto-src" src="https://scontent.fbhz2-1.fna.fbcdn.net/v/t1.0-9/41197440_2329457110459240_2906322919443398656_o.jpg?_nc_cat=0&_nc_eui2=AeFvLzOZJHdOPFPdeAsphJ1YUvLAJI31nKyIHOCFw9d-yn6zLoqecLDLGu11hGRlrMvwZFVdShKY9GHznAZIM0kmmrIicHP8FTMwPsKnmeALZQ&oh=4600edef65c21afefa50a7d8ca9f239f&oe=5C2D6F28"/>

                    <div class="foto-info">
                    <div class="foto-info-likes">

                        <a href="#">
                        alots_ssa
                        </a>

                        ,

                        <a href="#">
                        rafael_rollo
                        </a> 

                        curtiram
                    
                    </div>

                    <p class="foto-info-legenda">
                        <a class="foto-info-autor">autor </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
                    </p>

                    <ul class="foto-info-comentarios">
                        <li class="comentario">
                        <a class="foto-info-autor">seguidor </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
                        </li>
                        <li class="comentario">
                        <a class="foto-info-autor">seguidor </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
                        </li>
                        <li class="comentario">
                        <a class="foto-info-autor">seguidor </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
                        </li>
                    </ul>
                    </div>

                    <section class="fotoAtualizacoes">
                    <a href="#" class="fotoAtualizacoes-like">Likar</a>
                    <form class="fotoAtualizacoes-form">
                        <input type="text" placeholder="Adicione um comentário..." class="fotoAtualizacoes-form-campo"/>
                        <input type="submit" value="Comentar!" class="fotoAtualizacoes-form-submit"/>
                    </form>
                    </section>

                </div>
            </div>
        )
    }
}
