import React, { Component } from 'react';
import Test from '../containers/Test';

class Default extends Component {
    render() {
        return (
            <main>
                <h1>Default Page</h1>
                <article>
                    <h2>Lorem ipsum</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, architecto doloribus error
                        est et,
                        eum expedita hic iusto magni nihil nobis perferendis recusandae repudiandae similique sint
                        veritatis
                        vitae voluptatibus!
                    </p>
                </article>
                <br/>
                <Test/>
            </main>
        );
    }
}

export default Default;