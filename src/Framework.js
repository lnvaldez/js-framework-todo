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

function createDom(vNode) {
  if (typeof vNode === "string" || typeof vNode === "number") {
    return document.createTextNode(vNode);
  }

  if (vNode === null || vNode === undefined) {
    return document.createTextNode("");
  }

  if (typeof vNode.type === "function") {
    const component = new vNode.type(vNode.props);
    const renderedVNode = component.render();
    const dom = createDom(renderedVNode);
    component._renderCallback = () => {
      const newVNode = component.render();
      updateDom(dom, renderedVNode, newVNode);
    };
    component.componentDidMount();
    return dom;
  }

  const dom = document.createElement(vNode.type);

  const props = vNode.props || {};
  Object.entries(props).forEach(([key, value]) => {
    if (key === "children") {
      return;
    } else if (key.startsWith("on") && typeof value === "function") {
      const eventName = key.toLowerCase().substring(2);
      dom.addEventListener(eventName, value);
    } else if (key === "className") {
      dom.setAttribute("class", value);
    } else if (key === "style") {
      if (typeof value === "string") {
        dom.setAttribute("style", value);
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([cssKey, cssValue]) => {
          dom.style[cssKey] = cssValue;
        });
      }
    } else {
      dom.setAttribute(key, value);
    }
  });

  if (props.children) {
    props.children.forEach((child) => {
      const childDom = createDom(child);
      if (childDom) {
        dom.appendChild(childDom);
      }
    });
  }

  return dom;
}
