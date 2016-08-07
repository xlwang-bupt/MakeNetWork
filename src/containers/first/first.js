
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import left from './components/left/left';
import right from './components/right/right';

import * as actions from './actions';


function mapStateToProps(state) {
  return {
    state: state.first,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class first extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className={style.left}>
          <p className={style.leftTitle}> 参数设置</p>
          <left />
        </div>
        <div className={style.right}>
          <p className={style.rightTitle}> 动画展示区</p>
          <right />
        </div>
      </div>
      );
  }
}

export default first;
