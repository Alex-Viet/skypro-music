import './FilterPopup.css';

function FilterPopupPerformer() {
  return (
    <div className="popup filter__popup" style={{ top: '49px', left: '92px' }}>
      <ul className="popup__list">
        <li key="1">
          <a className="popup__text" href="#!">
            Michael Jackson
          </a>
        </li>
        <li key="2">
          <a className="popup__text" href="#!">
            Frank Sinatra
          </a>
        </li>
        <li key="3">
          <a className="popup__text" href="#!">
            Calvin Harris
          </a>
        </li>
        <li key="4">
          <a className="popup__text" href="#!">
            Zhu
          </a>
        </li>
        <li key="5">
          <a className="popup__text" href="#!">
            Arctic Monkeys
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FilterPopupPerformer;
