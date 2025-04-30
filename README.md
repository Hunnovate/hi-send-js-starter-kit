# Hi-Send Starter Kit

The **Hi-Send Starter Kit** is a lightweight and modern web application built with HTML, CSS, and vanilla JavaScript. It is designed to help developers quickly integrate with the **Hi-Send** API — a multi-channel communication and payment platform that enables email, SMS, WhatsApp OTP delivery, as well as bill payments (airtime, data, electricity, and more).

This starter kit is perfect for frontend students, beginner developers, and small applications looking to get up and running with an API-ready authentication system.

## 🌟 Features

- 🔐 **Authentication** (Signup, Login, Forgot/Reset Password)
- 🧑 **Profile Management**
- 🔄 **Change Password**
- 🎉 **Simple Dashboard**
- 🔑 **API Key and Base URL configuration**
- ⚡ **Axios HTTP Requests**
- 🪶 **Modern and minimal CSS styling**
- 🌐 **No frameworks or build tools required**

## 📁 Folder Structure

```
hi-send-starter/
│
├── css/
│   └── style.css
├── js/
│   ├── api.js
│   └── router.js
├── pages/
│   ├── login.html
│   ├── signup.html
│   ├── forgot-password.html
│   ├── reset-password.html
│   ├── dashboard.html
│   └── profile.html
├── config.js
├── index.html
└── README.md
```

## ⚙️ Setup

1. **Clone or download** this repo.
2. Replace `your_api_key_here` in `config.js` with your actual API key.
3. Update `baseUrl` if needed.
4. Open `index.html` in your browser.

## 🔐 API Usage

The app makes calls to the [Hi-Send API](https://api.send.hunnovate.com/v1) using a required `api_key` header and optional `Authorization` Bearer token after login.

## 🤝 Contributing

This starter kit is open source and unbranded — feel free to fork it, modify it, and use it in your own projects.

## 📬 Contact

Learn more at [https://hunnovate.com](https://hunnovate.com) or reach out to the Hi-Send team for integration support.

---

Made with ❤️ by Hunnovate
