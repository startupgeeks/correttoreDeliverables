'use strict';

const e = React.createElement;


class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkout: false };
  }

  render() {
    /*if (this.state.checkout) {
      return 'You liked comment number ' + this.props.commentID;
    }*/

    //Usato questo tool https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.18.4&externalPlugins=&assumptions=%7B%7D
    //per non usare JSX (why? non impostare la compilazione nel proprio ambiente di sviluppo)
    
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        className:  this.props.namecomponent,
        id: this.props.namecomponent,
        name: this.props.namecomponent
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: this.props.namecomponent
      }
      )
      );
    }
    /* EXAMPLE in HTML
    <input type="checkbox" class="JavelinBoard1" id="JavelinBoard1" name="JavelinBoard1"/>
    <label for="JavelinBoard1"> <span id="Input_JB1"></span></label><br>
    */
}


// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.checkbox_container')
  .forEach(domContainer => {
    // Read the nameComponent from a data-* attribute.

    const nameComponent = String(domContainer.dataset.namecomponent);
    
    //console.log(nameComponent);

    const root = ReactDOM.createRoot(domContainer);
    root.render(
      e(Checkbox, { namecomponent: nameComponent})
    );
  });


