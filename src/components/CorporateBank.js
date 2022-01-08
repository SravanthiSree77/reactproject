import React, { Component } from 'react';

export class CorporateBank extends Component {
    render(props) {
        return (
            <div>
                <h1>
                    The main branch of corporate bank is located at
                    {this.props.location}
                </h1>
            </div>
        );
    }
}

export default CorporateBank;
