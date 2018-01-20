import React, { Component } from 'react';
import ReactDom from 'react-dom';
import play from '../data/henry_iv.json';
import Act from './Act.js';

class Acts extends Component{
    constructor() {
        super();
        this.acts = [];
    }

    componentWillMount() {
        this.dissectActs();
    }

    dissectActs() {
        for (let i = 0; i < play.length; i++) {
            if (play[i].text_entry.indexOf('ACT ') >= 0) {
                this.scenes = [];
                this.acts[i] = {
                    playName: play[i].play_name,
                    actIndex: play[i].text_entry,
                    children: new Array()
                };
            } else {
                if (play[i].text_entry.indexOf('SCENE ') >= 0) {
                    this.scenes[i] = {
                        title: play[i].text_entry,
                        children: new Array()
                    };
                } else {
                    this.scenes[this.scenes.length - 1].children.push(play[i]);
                }
                this.acts[this.acts.length - 1].children = this.scenes;
            }
        }
    }

    render() {
        return (
            <div className="play">
                <div className="play__sidebar">
                    <h2 className="logo">
                        Emotion Analysis
                    </h2>
                    <nav className="nav">
                        {this.acts.map((act, index) => (
                            <a href={`#act-${index}`} className="nav__link">{act.actIndex}</a>
                        ))}
                    </nav>
                </div>
                <div className="play__content">
                    {this.acts.map((act, index) => (
                        <Act key={index} id={`act-${index}`} data={act.children} title={act.playName +  ' ' + act.actIndex}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Acts;
