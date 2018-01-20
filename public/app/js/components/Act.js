import React, { Component } from 'react';
import ReactDom from 'react-dom';
import request from 'superagent';
import Scene from './Scene.js';
import ProgressBar from './ProgressBar.js';

class Act extends Component{
    constructor(props) {
        super(props);
        this.state = {
            emotions:''
        }
    }

    componentWillMount() {
        request.post('/emotions')
                .type('json')
                .send(this.getActSummary())
                .end((err, res) => {
            const data = JSON.parse(res.text);
            this.setState({
                emotions: data.emotion.document.emotion
            })
        })
    }

    getActSummary() {
        const summary = [];

        this.props.data.forEach(scene => (
            scene.children.forEach(text => (
                summary.push(text)
            ))
        ));

        return summary;
    }

    render() {
        const emotions = Object.entries(this.state.emotions);

        return (
            <div className="act" id={this.props.id}>
                <div className="act__body">
                    <h2 className="act__title">{this.props.title}</h2>
                    {this.props.data.map((scene, index) => (
                        <Scene key={index} data={scene.children} title={scene.title}/>
                    ))}
                </div>
                <div className="act__footer">
                    <h3 className="act__footer__title">{this.props.title} | Emotional Summary</h3>
                    {emotions.map((emotion, index) => (
                        <ProgressBar key={index} label={emotion[0]} value={`${emotion[1] * 100}%`} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Act;
