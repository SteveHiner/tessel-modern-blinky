export const run = ({ ledGreen, ledBlue }) => {
  const toggle = () => {
    ledGreen.toggle();
    ledBlue.toggle();
  };

  ledGreen.on(); // Turn one of the LEDs on to start.
  setInterval(toggle, 100); // Blink!
};
