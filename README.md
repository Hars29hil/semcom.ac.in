<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/104f9ea6-d3c9-4666-acc7-01bcb865759b

## Run Locally

**Prerequisites:** Node.js, MySQL (e.g., XAMPP)

1. **Install dependencies:**
   In the root directory, run:
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Set your `GEMINI_API_KEY` in `.env.local` in the root.
   - Configure your database credentials in `server/.env`.

3. **Run the applications:**

   You have multiple flexible options to start the servers on different ports:

   ### Option A: Start all services in SEPARATE Terminal Windows (Recommended)
   This is the easiest way to launch all services while keeping their console logs separated and highly interactive:
   - **Via npm:**
     ```bash
     npm run dev:separate
     ```
   - **Or double-click the master launcher in File Explorer:**
     Double-click the [start-all.bat](file:///h:/project/SEMCOM/semcom-modernized/start-all.bat) file.

   ### Option B: Start all services in a SINGLE Terminal Window
   If you prefer to run everything concurrently in a single terminal session:
   ```bash
   npm run dev
   ```

   ### Option C: Start services individually
   If you are working on a specific part of the system, you can start only that component:
   - 🔌 **Express Backend Server** (Runs on Port 5000):
     ```bash
     npm run dev:server
     ```
     *(Or double-click [start-server.bat](file:///h:/project/SEMCOM/semcom-modernized/start-server.bat))*
   - 💻 **Main Website Frontend** (Runs on Port 3000):
     ```bash
     npm run dev:main
     ```
     *(Or double-click [start-main.bat](file:///h:/project/SEMCOM/semcom-modernized/start-main.bat))*
   - ⚙️ **Admin Portal Frontend** (Runs on Port 8080):
     ```bash
     npm run dev:admin
     ```
     *(Or double-click [start-admin.bat](file:///h:/project/SEMCOM/semcom-modernized/start-admin.bat))*

---

## 🌐 Ports & Services Mapping
- **Main Website Frontend:** [http://localhost:3000](http://localhost:3000)
- **Admin Portal Frontend:** [http://localhost:8080](http://localhost:8080)
- **Express Backend API:** [http://localhost:5000](http://localhost:5000)
