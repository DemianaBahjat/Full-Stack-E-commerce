import React from 'react'
import styles from './Privacy.module.css'

function Privacy() {
    return (
        <>
         
            <div className={styles.container}>
            <div className="text-center">
                <h1 className={styles.head}> <span className={styles.spanColorblack}>GAZ</span><span className={styles.spanColor}>IER</span></h1>
            </div>
            <h2>Privacy Policy</h2>
            <section>
                <h4>Introduction</h4>
                <p>Welcome to Gazier. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and</p>
                <p>responsible manner. This Privacy Policy outlines the types of information we collect, how it is used, and the steps we take to safeguard it.</p>
            </section>
            <h4>Information We Collect</h4>
            <section>

                <h5>Personal Information:</h5>
                <ul>
                    <li>When you create an account, place an order, or subscribe to our newsletter, we collect personal information such as your name, email address, phone number, shipping address, and payment information.</li>
                </ul>
            </section>
            <section>

                <h5>Non-Personal Information:</h5>
                <ul>
                    <li>We may collect non-personal information such as browser type, operating system, IP address, and browsing behavior on our site to help us improve our services.</li>
                </ul>
            </section>

            <h4>How We Use Your Information</h4>
            <section>

                <h5>To Process Transactions:</h5>
                <ul>
                    <li>We use your personal information to process your orders, ensure proper delivery, and handle payments.</li>
                </ul>
            </section>
            <section>
                <h5>To Improve Our Services:</h5>
                <ul>
                    <li>Non-personal information helps us understand how our site is used, allowing us to enhance the user experience.</li>
                </ul>
            </section>
            <section>
                <h5>Marketing Communications:</h5>
                <ul>
                    <li>With your consent, we may use your email address to send you newsletters, promotional offers, and updates about our products and services. You can opt-out at any time by following the unsubscribe link in the email.</li>
                </ul>
            </section>
            <section>
                <h5>Customer Service:</h5>
                <ul>
                    <li>Your contact information is used to respond to your inquiries, provide support, and notify you of any changes to our services.</li>
                </ul>
            </section>
            <section>
                <h4>How We Protect Your Information</h4>
                <p>We implement a variety of security measures to maintain the safety of your personal information. <span> This includes:</span></p>
                <ul>
                    <li className={styles.spanColor}>Encryption: <span className={styles.spanColorblack}>Sensitive data, such as payment information, is encrypted during transmission.</span></li>
                    <li className={styles.spanColor}>Access Controls: <span className={styles.spanColorblack}>Only authorized personnel have access to personal information, and they are required to keep it confidential. </span></li>
                    <li className={styles.spanColor}>Secure Servers: <span className={styles.spanColorblack}> Our servers are protected by firewalls and other security technologies</span></li>


                </ul>
            </section>
            <section>
                <h4>Sharing Your Information</h4>
                <p>We do not sell, trade, or otherwise transfer to outside parties your personal information, except in the following circumstances:</p>
                <ul>
                    <li className={styles.spanColor}>Service Providers: <span className={styles.spanColorblack}>We may share information with third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</span></li>
                    <li className={styles.spanColor}>Legal Compliance: <span className={styles.spanColorblack}>We may release your information when we believe it is necessary to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.</span></li>
                </ul>
            </section>
            <section>
                <h4>Cookies</h4>
                <p>Gazier uses cookies to enhance your experience on our website. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser that enables the site's systems to recognize your browser and capture and remember certain information.</p>
                <h5>Types of Cookies We Use:</h5>
                <ul>
                    <li>Session Cookies: These are temporary cookies that expire once you close your browser.</li>
                    <li>Persistent Cookies: These remain on your device until they expire or you delete them.</li>
                </ul>
            </section>
            <section>
                <h4>Your Rights</h4>
                <p>You have the following rights regarding your personal information:</p>
                <li className={styles.spanColor}>Access:<span className={styles.spanColorblack}> You can request a copy of the personal information we hold about you.</span></li>
                <li className={styles.spanColor}>Correction:<span className={styles.spanColorblack}> You can request that we correct any inaccuracies in your personal information.</span></li>
                <li className={styles.spanColor}>Deletion:<span className={styles.spanColorblack}> You can request that we delete your personal information, subject to certain exceptions.</span></li>
                <li className={styles.spanColor}>Opt-Out:<span className={styles.spanColorblack}> You can opt-out of receiving marketing communications from us at any time.</span></li>

            </section>
            <section>
                <h4>Changes to This Privacy Policy</h4>
                <p>Gazier reserves the right to update this Privacy Policy at any time. We will notify you of any significant changes by posting the new policy on our site and updating the effective date at the bottom of this page</p>
            </section>

            <section>
                <h4>Contact Us</h4>
                <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:</p>
                <p>Gazier Customer Service</p>
                <p>Email: support@gazier.com</p>
                <p>Phone: +2 010 15800248</p>
                <p>Effective Date: May 31, 2024</p>
            </section>

        </div>
        </>
    )
}

export default Privacy
