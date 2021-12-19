const Char = props => {
  const [open, setOpen] = React.useState(false);
  const cardClassName = 'Card' + (open ? ' Card--open' : '');

  return /*#__PURE__*/(
    React.createElement("div", {
      className: 'Char' }, /*#__PURE__*/

    React.createElement("div", {
      className: 'Scene' }, /*#__PURE__*/

    React.createElement("div", {
      className: cardClassName,
      onClick: () => setOpen(!open) }, /*#__PURE__*/

    React.createElement("div", {
      className: 'Card-face Card-face--front' }), /*#__PURE__*/

    React.createElement("div", {
      className: 'Card-face Card-face--back' },

    props.char.toUpperCase())))));





};

const App = () => {
  const [answer, setAnswer] = React.useState('Поле Чудес');

  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("div", {
      className: 'Input' }, /*#__PURE__*/

    React.createElement("input", {
      onChange: e => setAnswer(e.target.value),
      value: answer })), /*#__PURE__*/


    React.createElement("div", {
      className: 'Grid' },

    answer.split('').map((char, i) =>
    char !== ' ' ? /*#__PURE__*/
    React.createElement(Char, {
      char: char,
      key: `${i}${char}` }) : /*#__PURE__*/

    React.createElement("div", {
      key: i })))));





};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));