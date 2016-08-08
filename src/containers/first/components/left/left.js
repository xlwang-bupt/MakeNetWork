
import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Button } from 'antd';


class Left extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    xCoordinates: null,
    yCoordinates: null,
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
        className={classnames(...className.split(), style.left)}
      >
        <p className={style.leftTitle}> 参数设置</p>
        <div className={style.leftButton}>
          <p className={style.xTitle}>X: <span>{this.state.xCoordinates}</span></p>
          <p className={style.yTitle}>Y: <span>{this.state.yCoordinates}</span></p>
          <Button className={style.buttonStyle} size={'large'} type={'ghost'}>设置起点坐标</Button>
          <Button className={style.buttonStyle} size={'large'} type={'ghost'}>设置终点坐标</Button>
          <Button className={style.buttonStyle} size={'large'} type={'ghost'}>创建网络</Button>
          <Button className={style.buttonStyle} size={'large'} type={'ghost'}>已有网络</Button>
          <Button className={style.buttonStyle} size={'large'} type={'ghost'}>单点路由</Button>
        </div>
      </div>
    );
  }
}

export default Left;
