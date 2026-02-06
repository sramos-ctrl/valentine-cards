# Valentine's Day Cards

A beautiful, interactive web application for creating and sending personalized Valentine's Day cards with animations and background music.

## Features

- 🎨 **4 Animated Card Designs**: Floating Hearts, Blooming Rose, Cupid's Arrow, and Love Letters
- 💌 **Personalized Messages**: Custom input fields for sender info, recipient, and personal message
- 🎵 **Background Music**: "La Vie En Rose" instrumental playing in the background
- 📧 **Email Integration**: Send cards directly to recipients via email
- 👀 **Live Preview**: See your card update in real-time as you type
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices

## Getting Started

1. Open `index.html` in your web browser
2. Choose your favorite card design
3. Fill in the form fields:
   - Your Name
   - Your Email Address
   - Recipient's Email Address
   - Your Valentine's Message
4. Click "Send Valentine's Card"

## Setup Requirements

### Background Music

1. Download an instrumental version of "La Vie En Rose" in MP3 format
2. Save it as `la-vie-en-rose-instrumental.mp3` in the project root directory
3. Or update the audio source path in `index.html` to match your file name

### Email Integration

To enable actual email sending, you need to integrate an email service. Here are your options:

#### Option 1: EmailJS (Recommended for beginners)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service and template
3. Add the EmailJS SDK to your HTML:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
4. Update `script.js` with your EmailJS credentials:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData);
   ```

#### Option 2: Backend API with SendGrid/Mailgun

1. Create a backend server (Node.js, Python, PHP, etc.)
2. Set up SendGrid or Mailgun account
3. Create an API endpoint to handle email sending
4. Update the form submission in `script.js` to call your API

#### Option 3: Custom Server with Nodemailer

1. Set up a Node.js backend with Express
2. Install nodemailer: `npm install nodemailer`
3. Create an email sending endpoint
4. Update the form to POST to your server

## Project Structure

```
V Day Cards/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # Interactive functionality
├── README.md           # Documentation
└── la-vie-en-rose-instrumental.mp3  # Background music (you need to add this)
```

## Customization

### Adding More Card Designs

1. Add a new card option in the HTML (`.card-options` section)
2. Create CSS animations in `styles.css`
3. Add the animation HTML to the `animations` object in `script.js`

### Changing Colors

The main color scheme uses:
- Primary: `#ff6b9d` (pink)
- Secondary: `#ffc3a0` (peach)
- Accent: `#c94b4b` (deep red)

Update these values in `styles.css` to change the theme.

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Audio autoplay may require user interaction (click the music button)

## License

Free to use for personal projects.

## Credits

Design and development by Steff Ramos
