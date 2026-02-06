// Valentine's Day Cards - JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const cardOptions = document.querySelectorAll('.card-option');
    const selectedCard = document.getElementById('selectedCard');
    const cardForm = document.getElementById('cardForm');
    const senderNameInput = document.getElementById('senderName');
    const messageInput = document.getElementById('message');
    const previewName = document.getElementById('previewName');
    const previewMessage = document.getElementById('previewMessage');

    let currentCard = 'hearts';
    let isMusicPlaying = false;

    // EmailJS Configuration
    const EMAIL_CONFIG = {
        PUBLIC_KEY: 'fqo7Ba6tcdiLk-wjG',
        SERVICE_ID: 'service_ot4rwun',
        TEMPLATE_ID: 'template_evpdj5b'
    };

    // Initialize EmailJS
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

    // Music Toggle
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🎵 Play Music';
            isMusicPlaying = false;
        } else {
            bgMusic.play().catch(error => {
                console.log('Music playback failed:', error);
                alert('Please click the button again to play music. Browser requires user interaction to play audio.');
            });
            musicToggle.textContent = '🔇 Pause Music';
            isMusicPlaying = true;
        }
    });

    // Card Selection
    cardOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            cardOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            option.classList.add('selected');

            // Get card type
            currentCard = option.dataset.card;

            // Update preview card
            updateCardPreview();
        });
    });

    // Set initial selection
    cardOptions[0].classList.add('selected');

    // Live Preview Updates
    senderNameInput.addEventListener('input', (e) => {
        previewName.textContent = e.target.value || 'Your Name';
    });

    messageInput.addEventListener('input', (e) => {
        previewMessage.textContent = e.target.value || 'Your message will appear here...';
    });

    // Update Card Preview Based on Selection
    function updateCardPreview() {
        const animations = {
            hearts: `
                <div class="hearts-animation">
                    <span class="heart">❤️</span>
                    <span class="heart">💕</span>
                    <span class="heart">💖</span>
                </div>
            `,
            roses: `
                <div class="rose">🌹</div>
            `,
            cupid: `
                <div class="cupid">💘</div>
            `,
            love: `
                <div class="love-text">LOVE</div>
            `
        };

        selectedCard.className = `card card-${currentCard}`;
        const animationContainer = selectedCard.querySelector('.card-animation');
        animationContainer.innerHTML = animations[currentCard];
    }

    // Form Submission
    cardForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form values
        const senderName = document.getElementById('senderName').value;
        const senderEmail = document.getElementById('senderEmail').value;
        const recipientEmail = document.getElementById('recipientEmail').value;
        const message = document.getElementById('message').value;

        // Prepare email data
        const emailData = {
            senderName,
            senderEmail,
            recipientEmail,
            message,
            cardType: currentCard
        };

        console.log('Sending card with data:', emailData);

        // TODO: Integrate with email service
        // Option 1: EmailJS (easiest - client-side)
        // Option 2: Backend API with SendGrid, Mailgun, etc.
        // Option 3: Custom server with nodemailer

        try {
            // Send email via EmailJS
            await emailjs.send(
                EMAIL_CONFIG.SERVICE_ID,
                EMAIL_CONFIG.TEMPLATE_ID,
                emailData
            );

            // Show success message
            alert(`🎉 Success!\n\nYour Valentine's card has been sent to ${recipientEmail}!`);

            // Reset form
            cardForm.reset();
            previewName.textContent = 'Your Name';
            previewMessage.textContent = 'Your message will appear here...';

        } catch (error) {
            console.error('Error sending card:', error);
            alert('Error sending card. Please check console for details.');
        }
    });

    // Initialize
    updateCardPreview();

    // Attempt to autoplay music
    const attemptAutoplay = () => {
        bgMusic.play()
            .then(() => {
                // Autoplay successful
                isMusicPlaying = true;
                musicToggle.textContent = '🔇 Pause Music';
                console.log('Music autoplay successful');
            })
            .catch(error => {
                // Autoplay blocked by browser - this is normal
                console.log('Autoplay blocked. User interaction required:', error);
                // Keep button as "Play Music" and wait for user to click
                isMusicPlaying = false;
                musicToggle.textContent = '🎵 Play Music';
            });
    };

    // Try to autoplay immediately
    attemptAutoplay();

    // Also try to play on first user interaction if autoplay was blocked
    const startMusicOnInteraction = () => {
        if (!isMusicPlaying) {
            bgMusic.play()
                .then(() => {
                    isMusicPlaying = true;
                    musicToggle.textContent = '🔇 Pause Music';
                    // Remove listeners after successful play
                    document.removeEventListener('click', startMusicOnInteraction);
                    document.removeEventListener('keydown', startMusicOnInteraction);
                })
                .catch(() => {
                    // Still blocked, user needs to click the music button
                });
        }
    };

    document.addEventListener('click', startMusicOnInteraction, { once: true });
    document.addEventListener('keydown', startMusicOnInteraction, { once: true });
});
