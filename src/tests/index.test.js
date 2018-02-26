import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let testsContext = require.context("../", true, /\.test\.js$/);
testsContext.keys().forEach(testsContext);