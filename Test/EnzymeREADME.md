# Finally, you need to configure enzyme to use the adapter you want it to use. To do this, you can use the top level configure(...) API. ---> This was mentioned in the configuration section of the adapter. Copy this at the top of each testing file.

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });