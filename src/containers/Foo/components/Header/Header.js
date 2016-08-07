import style from './style.css';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Header extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.header)}
      >
        <span className={style.title}>参数设置</span>
        <span className={style.title}>动画展示区</span>
      </div>
    );
  }
}

export default Header;
