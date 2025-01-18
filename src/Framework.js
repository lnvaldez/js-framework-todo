class Component {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this._renderCallback = null;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    if (this._renderCallback) {
      this._renderCallback;
    }
  }

  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return null;
  }
}

function createElement(type, props, ...children) {
  return { type, props: { ...props, children: children.flat() } };
}
