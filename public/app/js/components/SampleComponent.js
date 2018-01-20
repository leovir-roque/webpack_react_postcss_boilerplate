import React from 'react';

class SampleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.value,
        }

        this._onClickHandler = this._onClickHandler.bind(this);
    }

    _onClickHandler() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    }

    render() {
        return (
            <div className="sample">
                <div className="sample__value">Increment from <strong>{this.state.count}</strong></div>
                <button className="sample__btn" onClick={this._onClickHandler}>Increment</button>
            </div>
        )
    }
}

export default SampleComponent;
