# Node-RED Peak Value Calculator Node

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [Features](#features)
  - [Example Workflow](#example-workflow)
- [Applications](#applications)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The Node-RED Peak Value Calculator Node is a node designed for Node-RED. It allows you to effortlessly calculate peak values in real-time data streams. It's particularly useful for systems that require monitoring and analysis of peak data points, such as analog input systems, control systems, and more.

## Installation

You can install this node directly from the Node-RED palette manager, or use the following npm command:

```bash
npm install node-red-contrib-peak-value-calculator
```

After installation, the node will appear in your Node-RED palette under the category you specified.

## Usage

### Features

1. **Start/Stop Controls**: This feature allows you to control when the node starts or stops accepting new data points.
2. **Peak Calculation**: The node will automatically calculate the peak value among the received data points.
3. **Status Indicators**: Real-time status updates are shown for all the operations performed by the node.
4. **Ease of Use**: Simply drag and drop the node into your Node-RED flow to start using it.

### Example Workflow

1. Insert the Peak Value Calculator Node into your Node-RED flow.
2. Connect it to the desired data stream.
3. Use control messages to start and stop data collection and to initiate peak value calculation.
4. The node will output the calculated peak value in the specified format.

For more detailed information, please refer to the `example` folder in the GitHub repository.

## Applications

1. **Signal Processing**: For normalizing and limiting audio signals.
2. **Control Systems**: To monitor peak values for maintaining system stability.
3. **Healthcare**: To analyze peak values in ECG/EKG and EEG data.
4. **Data Analytics**: Useful in detecting peaks in financial data, stock market trends, or sensor data.
5. **Electrical Engineering**: For measuring peak voltage and current levels.
6. **Networking**: To monitor peak data traffic for optimizing network performance.

## Contributing

We welcome contributions! Please see the `CONTRIBUTING.md` file for details.

## License

This project is licensed under the GPL-3.0 License - see the `LICENSE.md` file for details.

## Contact

For any questions or suggestions, please open an issue on the GitHub repository: [Node-RED Peak Value Calculator](https://github.com/hj91/node-red-contrib-peak-value-calculator/issues).

Thank you for using the Node-RED Peak Value Calculator Node!
