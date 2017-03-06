'use strict';

import React, { Component, PropTypes } from 'react';
import { View, requireNativeComponent } from 'react-native';

export class MarqueeLabel extends Component {
    propTypes = {
        ...View.propTypes,
        text : PropTypes.string.isRequired,
        scrollDuration : PropTypes.number, //秒
        marqueeType : PropTypes.string, //ios
        fadeLength : PropTypes.number, //ios
        leadingBuffer : PropTypes.number, //ios
        trailingBuffer : PropTypes.number, //ios
        animationDelay : PropTypes.number, //ios
        isRepeat : PropTypes.bool, //android
        startPoint : PropTypes.number, //android
        direction : PropTypes.number, //android
    }

    render() {
        const { children, ...props } = this.props;
        const nativeProps = Object.assign({}, props, {text: children});
        return (
            <RCTMarqueeLabel  {...nativeProps}/>
        );
    }
});

const RCTMarqueeLabel = requireNativeComponent('RCTMarqueeLabel', MarqueeLabel);
