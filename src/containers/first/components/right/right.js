
import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';


class Right extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { className } = this.props;

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.right)}
      >
        <p className={style.rightTitle}> 动画展示区</p>
        <div className={style.rightShow}>
        </div>
      </div>
    );
  }
}

export default Right;
