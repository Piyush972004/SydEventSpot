# 🎉 Sydney Events Aggregator

A modern web app that automatically scrapes and displays events happening in Sydney, Australia. Built using open-source tools including React, Vite, and TailwindCSS.

## 🌐 Live Preview
[![Live Preview](https://lively-dasik-4f49dd.netlify.app/)


---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS + Vite
- **Web Scraping**: [Axios/Cheerio/Puppeteer/Backend API - specify used tool]
- **Email Capture**: Integrated form with email opt-in before redirection
- **Hosting**: [Vercel / Netlify / Your host]
```bash
- 🔐 Email Opt-in Logic
      - When a user clicks "GET TICKETS":

      - A modal appears requesting their email.

       -Upon submission, the email is captured and user is redirected to the event's original source.
```
- ♻️ Scraper & Automation:   
Scraper runs [on a schedule using CRON/Node Backend/etc.], fetching new events and updating the displayed list. Data is refreshed automatically.
---

## 🚀 Features

- Automatic real-time scraping of event listings in Sydney
- User-friendly and responsive interface
- Secure email capture before ticket redirection
- Auto-updating content without manual refresh
- Modular and scalable codebase

---

## 🧩 Folder Structure

```bash
project/
├── public/
├── src/
│   ├── components/        # React UI components
│   ├── services/          # API / scraping logic
│   ├── types/             # TypeScript interfaces
│   └── App.tsx            # Main App layout
├── index.html             # Root HTML
├── package.json           # Dependencies and scripts
└── tailwind.config.js     # Tailwind setup

```

## 🚀 Getting Started

To view the project locally:

```bash
git clone https://github.com/yourusername/sydney-events-aggregator.git
cd sydney-events-aggregator
npm install
npm run dev

```


## DEMO

![Homepage Screenshot](https://github.com/Piyush972004/SydEventSpot/blob/c60cb171c12ebca5f319293405fee603a9e37a9d/public/Screenshot%202025-05-13%20185512.png)

![Homepage Screenshot](https://github.com/Piyush972004/SydEventSpot/blob/c60cb171c12ebca5f319293405fee603a9e37a9d/public/Screenshot%202025-05-13%20185524.png)
