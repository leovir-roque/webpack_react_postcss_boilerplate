import React, { Component } from 'react';
import ReactDom from 'react-dom';
import request from 'superagent';
import Speech from './Speech.js';
import Gauge from './Gauge.js';

class Scene extends Component{
    constructor(props) {
        super(props);
        this.state = {
            emotions:''
        }
    }

    componentWillMount() {
        this.speeches = this.groupSpeeches();

        request.post('/emotions')
                .type('json')
                .send(this.getSceneSummary())
                .end((err, res) => {
            const data = JSON.parse(res.text);
            this.setState({
                emotions: data.emotion.document.emotion
            })
        })
    }

    groupSpeeches() {
        const groupSpeeches = this.props.data.reduce(function(speech, item) {
            speech[item.speech_number] = speech[item.speech_number] || {speaker: item.speaker, message: []};
            speech[item.speech_number].message.push(item.text_entry);

            return speech;
        }, {});

        return Object.keys(groupSpeeches).map(key =>
            groupSpeeches[key]
        );
    }

    getSceneSummary() {
        const sceneSummary = this.groupSpeeches();
        console.log(sceneSummary);

        this.speeches.forEach(speech => (
            speech.message.forEach(text => (
                sceneSummary.push({
                    text_entry: text
                })
            ))
        ));

        return sceneSummary;
    }

    render() {
        const emotions = Object.entries(this.state.emotions);

        return (
            <div className="scene">
                <h3 className="scene__title">{this.props.title}</h3>
                <div className="scene__inner">
                    <div className="scene__content">
                        <div className="scene__details">
                            {this.speeches.map((speech, index) => (
                                <Speech speech={speech} />
                            ))}
                        </div>
                    </div>
                    <div className="scene__analysis">
                        {emotions.map((emotion, index) => (
                            <Gauge key={index} label={emotion[0]} value={`${emotion[1] * 100}%`} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Scene;
