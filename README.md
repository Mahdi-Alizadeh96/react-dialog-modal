# react-dialog-modal

`react-dialog-modal` is a lightweight and customizable modal component for React applications. It allows you to easily integrate modals with smooth animations and flexible styling options.

## Installation

Install the package via npm:

```bash
npm install react-dialog-modal
```

or using Yarn:

```bash
yarn add react-dialog-modal
```

## Usage

Here is an example of how to use `react-dialog-modal`:

```tsx
import React, { useState } from "react";
import Modal from "react-dialog-modal";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h1>Hello, World!</h1>
                <p>This is a customizable modal dialog.</p>
            </Modal>
        </>
    );
};

export default App;
```

## Props

| Prop       | Type       | Description                                            | Default |
|------------|------------|--------------------------------------------------------|---------|
| `isOpen`   | `boolean`  | Controls the visibility of the modal.                 | `null`  |
| `onClose`  | `function` | Callback function triggered when the modal is closed. | `-`     |
| `children` | `ReactNode`| Content to display inside the modal.                  | `-`     |
| `minWidth` | `number`   | Minimum width of the modal.                           | `-`     |
| `maxWidth` | `number`   | Maximum width of the modal.                           | `-`     |


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Author**: [Mahdi-Alizadeh96](https://github.com/Mahdi-Alizadeh96)
