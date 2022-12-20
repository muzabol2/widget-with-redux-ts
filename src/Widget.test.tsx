import { render, act, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { Widget } from './Widget';
import { Provider } from "react-redux";
import { store } from './store';

describe('Widget Component', () => {
   let wrapper: any;
   const widgetTestName = "test-name";
   const percentArr = ["1%", "3%", "10%", "30%", "100%"];

   const SetupRender = async () => {
      await act(async () => {
         wrapper = render(
            <Widget name={widgetTestName} />, {
            wrapper: ({ children }) => (
               <Provider store={store}>
                  {children}
               </Provider>
            )
         });
      });
      expect(wrapper).toBeDefined();
   }

   beforeEach(async () => {
      await SetupRender();
   });

   afterEach(async () => {
      cleanup();
   });

   test('should render component', async () => {
      expect(screen.getByText(/Time left/i)).toBeInTheDocument();
      expect(screen.getByText(widgetTestName)).toBeInTheDocument();
   });

   test('plus and minus buttons', async () => {
      const plusButton = screen.getByTestId("plus-button");
      expect(plusButton).toBeInTheDocument();

      const minusButton = screen.getByTestId("minus-button");
      expect(minusButton).toBeInTheDocument();

      expect(screen.getByText(percentArr[0])).toBeInTheDocument();

      act(() => fireEvent.click(minusButton));
      await waitFor(() => expect(screen.getByText(percentArr[0])).toBeInTheDocument());

      act(() => fireEvent.click(plusButton));
      await waitFor(() => expect(screen.getByText(percentArr[1])).toBeInTheDocument());

      act(() => fireEvent.click(plusButton));
      await waitFor(() => expect(screen.getByText(percentArr[2])).toBeInTheDocument());
   });

});
