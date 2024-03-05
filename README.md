
## Hub Collection Application

The Hub Collection Application is a comprehensive tool designed to manage and display details of various hubs. This application provides functionalities for sorting and filtering hubs based on different criteria.

![image](https://github.com/LowBP/hub-collection-app/assets/33143395/66414958-5da7-42ce-b28e-ea4f9416e78c)


### Features

- **Listing Hubs**: Displays a list of all hubs with detailed information.
- **Sorting Options**: Allows users to sort hubs based on various attributes such as name, state, category, and more.
- **Filtering**: Provides filtering options to narrow down the list of hubs based on specific criteria.
- **Responsive Design**: The application is designed to be responsive and works well on different screen sizes and devices.
- **Lazy loading**: (Skeleton loading) and image lazyloading
- **Search options**  
- **Performance improvement**
- **Reusable components added to `UI` folder**
- **Test cases**
- **UI Support for different types of devices**

### Technologies Used

- **React**: The application is built using the React library, providing a fast and efficient user interface.
- **TypeScript**: TypeScript is used for static typing, making the codebase more robust and maintainable.
- **Tailwind CSS**: Tailwind CSS is utilized for styling components, offering a flexible and utility-first approach to styling.
- **Jest and React Testing Library**: Unit tests are written using Jest and React Testing Library to ensure the reliability and correctness of the application.
- **State Management:** React Context

### Setting Environment Variables

To set up environment variables for the Hub Collection Application:

1. Open or create the `.env.development.local` file in the root directory of your React project.
2. Add the following lines to the file:

   ```dotenv
   REACT_APP_API_URL= <API_URL>
   REACT_APP_TEST_APP_URL= <DETAIL_VIEW_APP_LINK>
   ```

3. Save the file.

Your `.env.development.local` file should now contain the specified URLs, and your React application will be able to access these environment variables during development. Remember to restart your development server for the changes to take effect.

### How to Run the Application

To run the Hub Collection Application locally:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd hub-collection-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and navigate to `http://localhost:3000` to view the application.

### Styling
- **Framework:** Tailwind CSS
- **Approach:** Utility-first CSS framework for rapid development
- **Configuration:** Tailwind CSS configurations can be found in `tailwind.config.js`

## Future Improvements
- **Search Functionality:** Improve search functionalities.
- **tests:** Add more testcase.
- **Enhanced Styling:** Improve styling for 320px devices and add responsive design for better mobile experience.

## Additional Considerations  

### Frontend
1. **Service Worker:** Consider implementing a service worker for offline capabilities.
2. **UI Components:** Consider breaking down UI into reusable components for maintainability.

### UX/UI Design
1. **Accessibility:** Ensure the application is accessible, providing alternative text and keyboard navigation.


### Future Improvements
1. **Testing:** Add more tests for both frontend and backend for robustness.
2. **Documentation:** Provide detailed documentation.
3. **UI/UX:** Improve responsive style for below 320px screens.
   
### Contribution

Contributions to the Hub Collection Application are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
