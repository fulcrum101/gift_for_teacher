const Char = (props) => {
    const [ open, setOpen ] = React.useState(false);
    const cardClassName = 'Card' + (open ? ' Card--open' : '');
  
    return (
      <div
        className={'Char'}
      >
        <div
          className={'Scene'}
        >
          <div
            className={cardClassName}
            onClick={() => setOpen(!open)}
          >
            <div
              className={'Card-face Card-face--front'}
            />
            <div
              className={'Card-face Card-face--back'}
            >
              {props.char.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const App = () => {
    const [ answer, setAnswer ] = React.useState('Vai Jums patīk kafija?');
  
    return (
      <div className="App">
        <div
          className={'Input'}
        >
          <input
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          />
        </div>
        <div
          className={'Grid'}
        >
          {answer.split('').map((char, i) => (
            char !== ' ' ?
              <Char
                char={char}
                key={`${i}${char}`}
              /> :
              <div
                key={i}
              />
          ))}
        </div>
      </div>
    );
  };
  
  ReactDOM.render(<App/>, document.getElementById('root'));