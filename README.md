# PlatePilot

PlatePilot is a smart Food & Health web app built for hackathon judging: it helps students and early professionals make healthier meal decisions in stressful real-world moments, not idealized ones.
**Live Link:** [https://food-and-health-app-a8b76.web.app](https://food-and-health-app-a8b76.web.app)
## Chosen Vertical

Food & Health App

## Chosen Persona

Students and early professionals who often:

- skip meals during busy days
- make impulsive food choices when tired
- struggle with cravings, hydration, and budget limits
- need healthy options that are realistic within minutes

## Why This Submission Stands Out

- It behaves like a context-aware assistant, not just a static food form.
- It makes decisions using multiple real-life variables: goal, diet, budget, time, kitchen access, activity, hunger, energy, cravings, hydration, and habit blockers.
- It turns advice into action with meaningful Google services:
  - Google Charts for behavioral trend visualization
  - Google Maps for nearby healthy-food and grocery discovery
  - Google Calendar for follow-through reminders
- It is lightweight, easy to review, easy to deploy, and stays far below the repository size limit.

## 30-Second Judge Demo Flow

1. Open the app.
2. Click one of the quick scenario cards such as `Late-night craving` or `Student budget`.
3. Click `Generate my next food decision`.
4. Review the recommendation, intervention signal, action plan, backup options, and score breakdown.
5. Check the history chart to see the app behave dynamically over repeated runs.

## How The Solution Works

1. The user provides current context about the moment they are in.
2. A rule-based engine scores meal options against that context.
3. PlatePilot chooses the strongest next meal, surfaces the main intervention signal, and explains the reasoning.
4. The assistant also gives an action plan:
   - what to do now
   - what to choose if the first option is unavailable
   - what to prep for the next risky moment
5. Recent sessions are stored locally so the app can visualize patterns and feel dynamic over time.

## Approach And Logic

PlatePilot is designed around behavioral realism.

Instead of asking “what is the healthiest meal in theory?”, it asks “what is the healthiest realistic next action for this user right now?”

Examples of logic used:

- If hydration is low and hunger is only moderate, the app prioritizes a hydration-first intervention.
- If cravings are high, it boosts sugar-shield meals with protein or fiber.
- If the user has almost no time or no kitchen, it favors low-friction portable meals.
- If the user is highly active, it boosts recovery-friendly protein meals.
- If budget is low, it increases the score of lower-cost practical options.
- If the user has a known blocker, the assistant tries to reduce that specific friction.

## Architecture

- `index.html`
  - single-page UI and semantic structure
- `styles.css`
  - responsive styling, dark UI, accessibility polish, demo scenario presentation
- `logic.mjs`
  - pure recommendation engine and scoring rules
- `app.js`
  - safe DOM rendering, local storage history, Google Charts integration, scenario presets
- `tests/logic.test.mjs`
  - lightweight logic validation with no heavy dependencies
- `firebase.json`
  - static cloud deployment configuration for Firebase Hosting

## Google Services Integration

### Google Charts

Used to show a recent trendline of recommendation quality so the app feels dynamic over repeated use.

### Google Maps

Used to turn recommendations into immediate action by helping the user find nearby healthy-food options or groceries.

### Google Calendar

Used to create a follow-up reminder so healthy eating is supported by behavior planning, not just one-time advice.

## Assumptions Made

- The project should be easy for judges to run instantly in a browser.
- Google integrations should be meaningful without requiring a backend or paid API setup.
- Local storage is sufficient to demonstrate dynamic behavior during judging.
- The solution should remain lightweight and public-hosting friendly.

## Accessibility And Safety

- Keyboard-focus visibility is supported.
- The recommendation panel can be announced as a live region.
- Slider values are visible, improving clarity.
- The app includes a wellness guidance disclaimer and does not claim to provide medical diagnosis.

## Run Locally

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Run Tests

```bash
node tests/logic.test.mjs
```

## Publish To A Public GitHub Repository

Create a new public repository, then run:

```bash
git init
git add .
git commit -m "Initial PlatePilot submission"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Keep the repository on a single branch to match the challenge rule.

## Deploy To Cloud With Firebase Hosting

Official references:

- [Firebase Hosting quickstart](https://firebase.google.com/docs/hosting/quickstart)
- [Firebase Hosting overview](https://firebase.google.com/docs/hosting)
- [Google Charts library loading](https://developers.google.com/chart/interactive/docs/basic_load_libs)

Deploy with:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

Recommended Firebase Hosting choices:

- Public directory: `.`
- Configure as a single-page app: `No`
- Overwrite `index.html`: `No`

After deployment, Firebase will give you a public `web.app` link for submission.

## Submission Checklist

- Public GitHub repository link
- Public cloud deployment link
- Complete code in the repository
- README covering vertical, logic, how it works, and assumptions
