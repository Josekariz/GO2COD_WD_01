# Modern React Todo Application

A feature-rich Todo application built with React, featuring a clean UI, dark mode support, and persistent storage. The application showcases modern React practices and Tailwind CSS for styling.


![image](https://github.com/user-attachments/assets/897dded3-bd7a-4949-89df-b0f778cb9739)


## 🌟 Features

- **Task Management**
  - Create, read, update, and delete tasks
  - Mark tasks as complete/incomplete
  - Inline editing of tasks
  - Persistent storage using localStorage

- **User Interface**
  - Clean and modern design
  - Responsive layout
  - Smooth animations and transitions
  - Dark mode support with system preference detection
  - Hover effects and intuitive interactions

- **Accessibility**
  - ARIA labels for better screen reader support
  - Keyboard navigation
  - High contrast mode support

## 🛠️ Technical Stack

- **React** - Frontend library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **localStorage** - Persistent data storage

## 📦 Installation

1. Clone the repository:
```bash
git clone [https://github.com/Josekariz/GO2COD_WD_01.git]
```

2. Navigate to the project directory:
```bash
cd todo-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

## 🚀 Usage

### Adding a Task
1. Type your task in the input field
2. Click the "Add Task" button or press Enter

### Editing a Task
1. Hover over a task to reveal the edit button
2. Click the edit (pencil) icon
3. Make your changes
4. Press Enter to save or Escape to cancel

### Completing a Task
- Click the checkbox next to the task to toggle completion status

### Deleting a Task
1. Hover over a task to reveal the delete button
2. Click the delete (trash) icon
3. The task will be permanently removed

### Dark Mode
- Click the theme toggle button in the header to switch between light and dark modes
- The app will remember your preference

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── TodoForm.js
│   ├── TodoList.js
│   └── TodoItem.js
├── App.js
└── index.js
```

### Component Overview

- **App.js**: Main component handling state and data persistence
- **Header.js**: Contains the app title and theme toggle
- **TodoForm.js**: Handles new todo input and submission
- **TodoList.js**: Renders the list of todos
- **TodoItem.js**: Individual todo item with edit/delete capabilities

## 💾 Local Storage

The application uses localStorage to persist:
- Todo items
- Dark mode preference

Data structure for todos:
```javascript
{
  id: number,
  text: string,
  completed: boolean,
  createdAt: string (ISO date)
}
```

## 🎨 Styling

The application uses Tailwind CSS with a custom configuration supporting:
- Dark mode classes
- Custom transitions
- Responsive design
- Hover states
- Focus states

## 🔍 State Management

The application uses React's useState and useEffect hooks for:
- Managing todo items
- Handling dark mode
- Persisting data
- Managing edit states

## 🛣️ Future Enhancements

Potential features to be added:
- [ ] Categories/Tags for todos
- [ ] Due dates and reminders
- [ ] Sorting and filtering options
- [ ] User authentication
- [ ] Cloud synchronization
- [ ] Drag and drop reordering
- [ ] Search functionality
- [ ] Bulk actions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Icons provided by [Lucide Icons](https://lucide.dev/)
- Design inspired by modern UI/UX practices
- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

Your Name - [sejokarizz@gmail.com]
Project Link: [https://github.com/yourusername/todo-app](https://github.com/Josekariz/GO2COD_WD_01.git)]

