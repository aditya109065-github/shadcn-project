# AI-Powered Assessment Platform

A modern React-based web application that leverages artificial intelligence to create customized assessment tests for job candidates. The platform allows HR professionals and hiring managers to generate targeted assessments based on job descriptions and role requirements.

## 🚀 Features

### Core Functionality
- **AI-Powered Assessment Generation**: Create customized assessments using advanced AI algorithms
- **Job Description Upload**: Support for PDF, DOC, DOCX, and TXT file formats
- **Interactive Assessment Builder**: Describe job roles and get AI-generated assessment suggestions
- **Real-time File Processing**: Visual feedback during file upload with validation
- **Responsive Design**: Optimized for desktop and mobile devices

### User Interface
- **Modern Sidebar Navigation**: Clean, intuitive navigation with collapsible menus
- **Dynamic Icons**: Context-aware icons that change based on active states
- **Custom Styling**: Comprehensive design system with CSS variables
- **Accessibility**: WCAG-compliant components and interactions

### Technical Features
- **File Upload Validation**: Type and size validation with user feedback
- **State Management**: Efficient React state handling for complex interactions
- **Performance Optimized**: Fast loading with Vite build system
- **Type-Safe Development**: ESLint configuration for code quality

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing (future implementation)

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library
- **Custom CSS Variables** - Comprehensive design token system

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Build & Deployment
- **Vite** - Production build optimization
- **ES Modules** - Modern JavaScript module system

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components (shadcn/ui)
│   │   ├── avatar.jsx
│   │   ├── button.jsx
│   │   ├── collapsible.jsx
│   │   ├── input.jsx
│   │   ├── separator.jsx
│   │   ├── sheet.jsx
│   │   ├── sidebar.jsx
│   │   ├── skeleton.jsx
│   │   ├── spinner.jsx
│   │   └── tooltip.jsx
│   ├── icons/
│   │   └── Icons.jsx         # Centralized icon components
│   ├── AssessmentContent.jsx # Main assessment creation interface
│   └── Sidebar.jsx           # Navigation sidebar component
├── hooks/
│   └── use-mobile.jsx        # Mobile detection hook
├── lib/
│   └── utils.js              # Utility functions
├── styles/
│   └── css-output.css        # Compiled CSS output
├── App.jsx                   # Main application component
├── App.css                   # Application-specific styles
├── index.css                 # Global styles and CSS variables
├── index.js                  # Application entry point
└── main.jsx                  # React application bootstrap

public/                       # Static assets
├── avatar.svg
├── brain.svg
├── category.svg
├── chevron-right.svg
├── chevron-up-down.svg
├── document-text.svg
├── Icon.svg
├── logo.svg
├── megaphone.svg
├── message-programming.svg
├── message-question.svg
├── send-white.svg
├── send.svg
├── settings.svg
├── star.svg
├── tick-circle-green.svg
├── tick-circle.svg
└── upload.svg
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shadcn-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```
   or
   ```bash
   yarn preview
   ```

## 📖 Usage Guide

### Creating Assessments

1. **Navigate to Assessment Section**
   - Click on "Assessment" in the sidebar or start from the dashboard

2. **Describe the Job Role**
   - Use the text area to describe the job role, skills, and experience requirements
   - Or upload a job description file (PDF, DOC, DOCX, or TXT format)

3. **File Upload Process**
   - Click "Upload JD" button
   - Select a supported file from your file system
   - Watch the upload progress (spinner shows for 2 seconds)
   - File validation ensures proper format and size limits

4. **AI-Powered Generation**
   - The system provides intelligent suggestions based on your input
   - Customize assessment parameters using the available tags

### Navigation

- **Dashboard**: Overview and quick access to recent assessments
- **Assessment**: Create new assessments with AI assistance
- **Reports**: View assessment analytics and results
- **Questions**: Manage question banks and templates
- **News Centre**: Stay updated with platform announcements
- **Help & Support**: Access documentation and support resources

## 🎨 Design System

### Color Variables
The application uses a comprehensive set of CSS variables for consistent theming:

```css
/* Surface Colors */
--surface-subtle-primary: #f8f9fa;
--surface-default-primary: #0066cc;

/* Text Colors */
--greyscale-text-primary: #1a1a1a;
--greyscale-text-secondary: #666666;
--greyscale-text-tertiary: #999999;

/* Border Colors */
--greyscale-border-default: #e1e5e9;

/* And many more... */
```

### Component Architecture

- **Icons**: Centralized in `Icons.jsx` with dynamic state-based styling
- **UI Components**: Built with shadcn/ui for consistency and accessibility
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

### Code Quality

The project includes ESLint configuration for:
- React best practices
- Code formatting consistency
- Accessibility guidelines
- Performance optimizations

### Adding New Features

1. **Icons**: Add new icon components to `src/components/icons/Icons.jsx`
2. **Components**: Create reusable components in `src/components/`
3. **Pages**: Add new routes and page components as needed
4. **Styling**: Use Tailwind classes and CSS variables for consistency

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices and hooks patterns
- Use TypeScript for new components (future migration)
- Maintain consistent code formatting with ESLint
- Write descriptive commit messages
- Test components across different screen sizes

## 📄 File Upload Specifications

### Supported Formats
- PDF (.pdf)
- Microsoft Word (.doc, .docx)
- Plain Text (.txt)

### File Size Limits
- Maximum file size: 10MB
- Automatic validation with user feedback

### Upload Process
1. File selection through native browser dialog
2. Client-side validation (type and size)
3. Visual upload progress indication (2-second simulation)
4. Success confirmation with file name display

## 🔒 Security & Privacy

- Client-side file validation only
- No files are uploaded to external servers in this demo
- All processing happens locally in the browser
- File contents are not stored or transmitted

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Troubleshooting

### Common Issues

**Build fails with ESLint errors**
```bash
npm run lint
```
Fix the reported issues and try building again.

**File upload not working**
- Check file size (max 10MB)
- Ensure file type is supported (PDF, DOC, DOCX, TXT)
- Try a different browser

**Styling issues**
- Clear browser cache
- Check CSS variable definitions in `index.css`
- Verify Tailwind configuration

## 📈 Future Enhancements

- [ ] Real API integration for assessment generation
- [ ] User authentication and profiles
- [ ] Assessment result analytics
- [ ] Advanced question bank management
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Offline functionality

## 📞 Support

For support and questions:
- Check the Help & Support section in the application
- Review this README for common solutions
- Open an issue on GitHub for bugs or feature requests

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using React, Vite, and modern web technologies.
