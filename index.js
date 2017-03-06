'use strict';

import React, { PropTypes } from 'react';
import { View, requireNativeComponent } from 'react-native';

var MarqueeLabel = React.createClass({
    propTypes: {
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
    },
    render: function() {
        const {children, ...props} = this.props;
        const nativeProps = Object.assign({}, props, {text: children});
        return (
            <RCTMarqueeLabel  {...nativeProps}/>
        );
    }
});

var RCTMarqueeLabel = requireNativeComponent('RCTMarqueeLabel', MarqueeLabel);
module.exports = MarqueeLabel;
