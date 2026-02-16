# 🌌 pseudosoul – My Medium Portfolio

A personal portfolio website that showcases my Medium articles using an RSS-to-JSON approach. Since Medium doesn’t provide a direct public API, this project converts my Medium RSS feed into JSON and dynamically displays my latest articles.

🔗 **Live Demo:** [https://pseudosoulv2.vercel.app/](https://pseudosoulv2.vercel.app/)

---

## ✨ Features

* 📚 Displays latest Medium articles (latest 10 posts from RSS feed)
* 🖼️ Automatically fetches and shows my Medium profile image
* ⚡ Fast and responsive UI
* 🔍 Individual post view support
* 🎯 Clean modern styling
* 📱 Fully responsive design

---

## 🛠️ Tech Stack

* **Frontend:** Vite + React
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **API Handling:** Medium RSS Feed → RSS2JSON Converter
* **Deployment:** Vercel

---

## 🤔 Why This Project?

Medium doesn’t offer a direct public API to fetch posts. So I used an online RSS-to-JSON converter to transform my Medium RSS feed into JSON, which I then fetched inside my React app.

This allowed me to:

* Access my Medium content easily
* Display it in a custom-designed portfolio
* Learn how RSS feeds work in real projects

---

## 📂 How It Works

1. Medium provides an RSS feed of my profile.
2. RSS feed is converted into JSON using an RSS2JSON service.
3. React fetches the JSON data.
4. Profile image and latest posts are displayed dynamically.

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/botislive.git

# Go into project folder
cd mediumapiv2

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 📸 Screenshots

<img width="1573" height="1020" alt="Screenshot 2026-02-16 151729" src="https://github.com/user-attachments/assets/e09087af-cab3-403d-9705-ce6bcaa3bb0a" />


---

## 🙌 Credits

* Styling and responsiveness inspiration with help from **Opus‑4.6**
* Medium RSS feed for content
* RSS2JSON converter service

---

## 📈 Future Improvements

* Cache RSS data locally to avoid rate limits
* Add search and tag filtering
* Add dark/light theme toggle
* Add analytics dashboard for article views
* Add animations using Framer Motion

---

## 🧠 What I Learned

* Working with RSS feeds in real projects
* Handling third-party API limitations
* Building responsive portfolio apps
* Fetching and rendering dynamic content in React

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and check out my Medium articles!

---

## 📬 Contact

Feel free to connect with me if you have suggestions or feedback!

---

### Made with ❤️ using Vite + React + Tailwind
