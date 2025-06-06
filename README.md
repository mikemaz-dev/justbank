JustBank 🏦
A modern, responsive banking application built with JavaScript and deployed on Vercel.

🚀 Live Demo
Visit the live application: justbank.vercel.app

📱 Live Preview
<div align="center"> <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/justbank-dKzuwtPIUyx6eGz5nBGMEqimqehyA0.png" alt="JustBank Application Screenshot" width="800"/> <p><em>JustBank's modern banking interface featuring transaction management, statistics, and account operations</em></p> </div>

📋 About
JustBank is a modern banking interface that provides users with a clean, intuitive way to manage their financial transactions. The application features a responsive design and includes functionality for viewing recent transactions, account statistics, and performing banking operations like top-ups and withdrawals.

✨ Features
📱 Responsive Design - Works seamlessly across desktop and mobile devices
💳 Transaction Management - View and manage recent transactions with detailed history
📊 Financial Statistics - Visual charts and summaries of income and expenses
💰 Account Operations - Easy top-up and withdrawal functionality
🎨 Modern UI Components - Built with reusable Button, Field, and Heading components
🌙 Dark Theme - Sleek dark interface for better user experience
⚡ Fast Performance - Optimized build with Webpack
🔧 Developer Experience - Automated component generation with Plop.js
🛠️ Tech Stack
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 30px; margin: 20px 0;"> <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; color: white;">
<div style="display: flex; align-items: center; gap: 15px;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" alt="JavaScript"/>
  <div>
    <h4 style="margin: 0; font-size: 18px;">JavaScript</h4>
    <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Core application logic and interactivity</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 15px;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="40" height="40" alt="SCSS"/>
  <div>
    <h4 style="margin: 0; font-size: 18px;">SCSS</h4>
    <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Advanced styling and responsive design</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 15px;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" alt="HTML5"/>
  <div>
    <h4 style="margin: 0; font-size: 18px;">HTML5</h4>
    <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Semantic markup and structure</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 15px;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" width="40" height="40" alt="Webpack"/>
  <div>
    <h4 style="margin: 0; font-size: 18px;">Webpack</h4>
    <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Module bundling and optimization</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 15px;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" width="40" height="40" alt="Handlebars"/>
  <div>
    <h4 style="margin: 0; font-size: 18px;">Handlebars</h4>
    <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Template engine for dynamic content</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 15px;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="40" height="40" alt="ESLint"/>
  <div>
    <h4 style="margin: 0; font-size: 18px;">ESLint & Prettier</h4>
    <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Code quality and formatting</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 15px;">
  <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
    <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
  </svg>
  <div>
    <h4 style="margin: 0; font-size: 18px;">Plop.js</h4>
    <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Automated component generation</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 15px;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="40" height="40" alt="Vercel" style="filter: invert(1);"/>
  <div>
    <h4 style="margin: 0; font-size: 18px;">Vercel</h4>
    <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Deployment and hosting platform</p>
  </div>
</div>
</div> </div>
🏃‍♂️ Getting Started
Prerequisites
Make sure you have Node.js installed on your machine.

Installation
Clone the repository

git clone https://github.com/mikemaz-dev/justbank.git
cd justbank
Install dependencies

npm install
# or
yarn install
Start the development server

npm start
# or
yarn start
Open your browser Navigate to http://localhost:3000 to view the application.

📁 Project Structure
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
🔧 Development
Component Generation
This project uses Plop.js for automated component generation. To create a new component:

npm run plop
# or
yarn plop
Follow the prompts to generate components with consistent structure and styling.

Code Quality
The project includes ESLint and Prettier for code quality and formatting

# Run linting
npm run lint

# Format code
npm run format
Building for Production
npm run build
# or
yarn build
🚀 Deployment
The application is automatically deployed to Vercel. Any push to the main branch will trigger a new deployment.

To deploy manually:

Install Vercel CLI: npm i -g vercel
Run: vercel
Follow the prompts

🙌 Contribution
Contributions are welcome!
Feel free to open issues or submit pull requests.

⭐ If you found this project helpful, please consider giving it a star!
