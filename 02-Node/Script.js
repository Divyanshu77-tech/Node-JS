// ✅ Day 2 Backend Notes (NPM, Scripts, Modules)

// 1️⃣ Understanding Node.js vs npm
// Node.js is the JavaScript runtime that executes your code.
// npm is its package manager — it fetches, installs, and manages tools (packages) Node needs.
// Think of Node as the engine, and npm as the assistant who grabs tools on request.

// 2️⃣ Installing & Uninstalling Packages

// 📦 Install
// npm install <package-name>       # Install latest version
// npm install <package-name>@1.2.3 # Install specific version
// npm install -D <package-name>    # Dev dependency (or --save-dev)

// 🗑️ Uninstall
// npm uninstall <package-name>

// 3️⃣ node_modules Folder
// This is where all installed packages live.
// Includes dependencies of your dependencies (deep tree).
// You don’t touch this manually — npm handles it.
// You never commit this to GitHub. It’s ignored via .gitignore.

// 4️⃣ Dependencies vs Dev Dependencies

// | Type               | Use Case                     | Installed On Prod? |
// |--------------------|------------------------------|---------------------|
// | dependencies       | Needed for your app to run   | ✅ Yes              |
// | devDependencies    | Only used during development | ❌ No               |

// Example:
// - express → dependency
// - nodemon, eslint → devDependency

// 5️⃣ Scripts in package.json

// 🔹 Built-in Script Shortcuts:
// "start" → can be run with npm start
// "test"  → can be run with npm test

// 🔹 Custom Scripts:
// You define them under "scripts" in package.json
// Run with npm run <script-name>

// "scripts": {
//   "start": "node index.js",
//   "dev": "nodemon index.js",
//   "build-css": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
// }

// You must use npm run for custom scripts unless it’s start or test.

// 🔥 Key Mental Models You’ve Locked Today
// - Node runs JS, npm manages packages
// - node_modules = downloaded code
// - dependencies vs devDependencies = runtime vs dev-time
// - npm run executes your custom dev tools
// - Scripts are powerful for automating commands
