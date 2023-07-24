import renderer from 'react-test-renderer';
import Home from '../Components/Home';
import * as reactRedux from 'react-redux';
jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
describe('Test HomeComponent', () => {
    beforeEach(() => {
        useDispatchMock.mockImplementation(() => () => {});
        useSelectorMock.mockImplementation(selector => selector(mockStore));
    })
    afterEach(() => {
        useDispatchMock.mockClear();
        useSelectorMock.mockClear();
    })

    const useSelectorMock = reactRedux.useSelector;
    const useDispatchMock = reactRedux.useDispatch;
    const mockStore = {
        loans: [{basicDetails: {

        },
        contactDetails: {

        }

        }]
    };
it('changes the class when hovered', () => {
    render(
        <Home />,
      );

    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
});
});