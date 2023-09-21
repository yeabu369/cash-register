# Cash Register Application

This application is a simple cash register simulator built using React. It allows you to add and remove money in different denominations, and dispense change.
## Demo

You can access the live demo of the application at [this link](https://cash-register-khaki.vercel.app/)

## Functionality

The main functionality of the application is contained within the CashRegister component.

The CashRegister component maintains a state of the cash register, which is an object where the keys are the denominations of the money and the values are the counts of each denomination.

```javascript
const [register, setRegister] = useState({
  20: 0,
  10: 0,
  5: 0,
  2: 0,
  1: 0
});
```

The application provides the following functionalities:

1. **Add Money**: You can add money to the cash register by entering the count of each denomination and clicking the "Add" button. The addMoney function is used to update the state of the cash register.

2. **Remove Money**: You can remove money from the cash register by entering the count of each denomination and clicking the "Remove" button. The removeMoney function is used to update the state of the cash register.

3. **Dispense Change**: You can dispense change by entering an amount and clicking the "Dispense" button. The dispenseChange function is used to update the state of the cash register.

The current state of the cash register is displayed on the screen, showing the total amount of money and the count of each denomination.
## Testing

The application includes tests for the CashRegister component using the React Testing Library. The tests ensure that the add, remove, and dispense change functionalities work correctly.
## Running the Application

To run the application, use the start script defined in the package.json file:
```bash
npm start
```
This will start the application in development mode. Open http://localhost:3000 to view it in the browser.
## Building the Application

To build the application for production, use the build script defined in the package.json file:
```bash
npm build
```
This will build the application for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.