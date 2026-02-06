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
   - Recipient's Email Address
   - Your Valentine's Message
4. Click "Send Valentine's Card"

## Setup Requirements

### Background Music

1. Download an instrumental version of "La Vie En Rose" in MP3 format
2. Save it as `la-vie-en-rose-instrumental.mp3` in the project root directory
3. Or update the audio source path in `index.html` to match your file name

### Email Integration

This application uses EmailJS to send Valentine's Day cards directly from the browser. **Email functionality is already configured and ready to use.**

#### Current Configuration

The EmailJS credentials are configured in `script.js` (lines 18-23):

```javascript
const EMAIL_CONFIG = {
    PUBLIC_KEY: 'UPXHjN5ouONvt76Y3',
    SERVICE_ID: 'service_lv28tzu',
    TEMPLATE_ID: 'template_os7peau'
};
```

#### EmailJS Template Parameters

The EmailJS template (`template_os7peau`) must be configured in your EmailJS dashboard with these parameters:

- `{{senderName}}` - The sender's name (displayed as "From: [name]")
- `{{recipientEmail}}` - The recipient's email address (where the card is sent)
- `{{message}}` - The Valentine's message content
- `{{cardType}}` - The selected card design (hearts, roses, cupid, or love)

**Important**: The "from" email address shown to recipients is determined by the email account connected to your EmailJS service, not by the code. Make sure your EmailJS service is connected to the email address you want recipients to see.

#### Verification Steps

To verify the email configuration is working correctly:

1. Open `index.html` in your web browser
2. Fill out the form and send a test card to your own email address
3. Check that the email arrives from the correct email address
4. Verify that all template parameters (sender name, message, card type) are displaying correctly in the received email

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
