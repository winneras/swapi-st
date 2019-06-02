import React from 'react';
import ReactDOM from 'react-dom';
import PeopleTable from '../PeopleTable';
import fakeData from "../../../services/tests/testData.json";

it('PeopleTable renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PeopleTable people={fakeData.results} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
