# JustBank 🏦

A modern, responsive banking application built with JavaScript and deployed on Vercel.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://justbank.vercel.app)
[![JavaScript](https://img.shields.io/badge/JavaScript-73.6%25-yellow?style=flat&logo=javascript)](https://github.com/mikemaz-dev/justbank)
[![SCSS](https://img.shields.io/badge/SCSS-14.2%25-pink?style=flat&logo=sass)](https://github.com/mikemaz-dev/justbank)

## 🚀 Live Demo

Visit the live application: [justbank.vercel.app](https://justbank.vercel.app)

## 📱 Live Preview

<div align="center">
  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/justbank-dKzuwtPIUyx6eGz5nBGMEqimqehyA0.png" alt="JustBank Application Screenshot" width="800"/>
  <p><em>JustBank's modern banking interface featuring transaction management, statistics, and account operations</em></p>
</div>

## 📋 About

JustBank is a modern banking interface that provides users with a clean, intuitive way to manage their financial transactions. The application features a responsive design and includes functionality for viewing recent transactions, account statistics, and performing banking operations like top-ups and withdrawals.

## ✨ Features

- 📱 **Responsive Design** - Works seamlessly across desktop and mobile devices
- 💳 **Transaction Management** - View and manage recent transactions with detailed history
- 📊 **Financial Statistics** - Visual charts and summaries of income and expenses
- 💰 **Account Operations** - Easy top-up and withdrawal functionality
- 🎨 **Modern UI Components** - Built with reusable Button, Field, and Heading components
- 🌙 **Dark Theme** - Sleek dark interface for better user experience
- ⚡ **Fast Performance** - Optimized build with Webpack
- 🔧 **Developer Experience** - Automated component generation with Plop.js

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
<br><strong>JavaScript</strong>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="48" height="48" alt="SCSS" />
<br><strong>SCSS</strong>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="48" height="48" alt="HTML5" />
<br><strong>HTML5</strong>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" width="48" height="48" alt="Webpack" />
<br><strong>Webpack</strong>
</td>
</tr>
<tr>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" width="48" height="48" alt="Handlebars" />
<br><strong>Handlebars</strong>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="48" height="48" alt="ESLint" />
<br><strong>ESLint</strong>
</td>
<td align="center" width="100">
<img src="https://prettier.io/icon.png" width="48" height="48" alt="Prettier" />
<br><strong>Prettier</strong>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="48" height="48" alt="Vercel" />
<br><strong>Vercel</strong>
</td>
</tr>
</table>

### 🔧 Development Tools

| Tool | Purpose | Description |
|------|---------|-------------|
| **JavaScript** | Core Language | Application logic and interactivity |
| **SCSS** | Styling | Advanced styling and responsive design |
| **HTML5** | Markup | Semantic structure and accessibility |
| **Webpack** | Build Tool | Module bundling and optimization |
| **Handlebars** | Templates | Dynamic content generation |
| **ESLint** | Code Quality | Linting and code standards |
| **Prettier** | Formatting | Consistent code formatting |
| **Plop.js** | Code Generation | Automated component scaffolding |
| **Vercel** | Deployment | Hosting and continuous deployment |

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mikemaz-dev/justbank.git
   cd justbank
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```
justbank/
├── plop-templates/          # Component generation templates
├── public/
│   └── icons/              # Application icons and assets
├── src/                    # Source code
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── .prettierrc.json        # Prettier configuration
├── jsconfig.json           # JavaScript configuration
├── package.json            # Project dependencies
├── plopfile.js             # Plop.js configuration
├── webpack.config.mjs      # Webpack configuration
└── yarn.lock               # Yarn lock file
```

## 🔧 Development

### Component Generation

This project uses Plop.js for automated component generation. To create a new component:

```bash
npm run plop
# or
yarn plop
```

Follow the prompts to generate components with consistent structure and styling.

### Code Quality

The project includes ESLint and Prettier for code quality and formatting:

```bash
# Run linting
npm run lint

# Format code
npm run format
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🚀 Deployment

The application is automatically deployed to Vercel. Any push to the main branch will trigger a new deployment.

To deploy manually:

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Recent Updates

- ✅ Created reusable UI components (Button, Field, Heading)
- ✅ Implemented recent transactions list functionality
- ✅ Added financial statistics with visual charts
- ✅ Integrated account balance and card information display
- ✅ Built top-up and withdrawal functionality
- ✅ Fixed icon pathname issues
- ✅ Added app&render service integration
- ✅ Configured API services
- ✅ Set up automated folder and file generation with Plop
---

⭐ If you found this project helpful, please consider giving it a star!
