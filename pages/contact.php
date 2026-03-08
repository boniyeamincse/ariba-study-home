<?php
$basePath = '../';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | Ariba Study</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/components.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div id="header-placeholder">
        <?php include '../includes/header.php'; ?>
    </div>

    <main class="page-content">
        <section class="page-hero">
            <div class="container">
                <h1 data-i18n="contact_title">Contact Us</h1>
                <p data-i18n="contact_subtitle">Have questions? We'd love to hear from you.</p>
            </div>
        </section>

        <section class="contact-section">
            <div class="container">
                <div class="contact-grid">
                    <div class="contact-info">
                        <h2 data-i18n="contact_info_title">Get in Touch</h2>
                        <p data-i18n="contact_info_desc">Feel free to reach out to us through any of the following channels:</p>
                        
                        <div class="contact-methods">
                            <div class="contact-method">
                                <div class="method-icon">📧</div>
                                <div class="method-details">
                                    <h3 data-i18n="contact_email">Email</h3>
                                    <p>support@aribastudy.com</p>
                                </div>
                            </div>
                            
                            <div class="contact-method">
                                <div class="method-icon">💬</div>
                                <div class="method-details">
                                    <h3 data-i18n="contact_social">Social Media</h3>
                                    <p data-i18n="contact_social_desc">Follow us on Facebook, Twitter, LinkedIn</p>
                                </div>
                            </div>
                            
                            <div class="contact-method">
                                <div class="method-icon">🌐</div>
                                <div class="method-details">
                                    <h3 data-i18n="contact_community">Community</h3>
                                    <p data-i18n="contact_community_desc">Join our Discord server for live support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contact-form-container">
                        <h2 data-i18n="contact_form_title">Send us a Message</h2>
                        <form class="contact-form" id="contactForm">
                            <div class="form-group">
                                <label for="name" data-i18n="contact_name">Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email" data-i18n="contact_email_label">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="subject" data-i18n="contact_subject">Subject</label>
                                <input type="text" id="subject" name="subject" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="message" data-i18n="contact_message">Message</label>
                                <textarea id="message" name="message" rows="6" required></textarea>
                            </div>
                            
                            <button type="submit" class="btn-primary" data-i18n="contact_send">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <div id="footer-placeholder">
        <?php include '../includes/footer.php'; ?>
    </div>

    <script src="../assets/js/i18n/en.js"></script>
    <script src="../assets/js/i18n/bn.js"></script>
    <script src="../assets/js/i18n/ar.js"></script>
    <script src="../assets/js/components.js"></script>
    <script>
        document.getElementById('contactForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            alert('Thank you for your message! We will get back to you soon.');
            e.target.reset();
        });
    </script>
</body>
</html>
