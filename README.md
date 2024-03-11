# Some basic motion for the Wheel:Bit by MakeKit

This project lets you select some basic motions for your Wheel:Bit by pressing ***button A*** to select next action ***button B*** to selsect previous action.  
Confirm action by pressing **A+B**.

The following motions are supported:
1. Forward
2. Turn 90deg Left
3. Turn 90deg Right
4. Backward
5. A square pattern

## Installation instructions
1. Clone this repo
2. npm install
3. makecode install

## Upload to your Micro:bit controller mounted on your Wheel:Bit
1. makecode build -d

## Caveats
The servos in the Wheel:Bit kit are not very precise. My settings work quite ok for me, but you might need to adjust some values for your Wheel:Bit to go straight.
The reference for setting up my project folders are here: https://microsoft.github.io/jacdac-docs/clients/makecode/code/. If you bring your kids along, https://makecode.microbit.org/
might be a better option using drag&drop code blocks. However, the resulting code is messy according to my taste.
