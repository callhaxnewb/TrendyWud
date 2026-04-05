// app/privacy/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | TRENDY WUDPLAST",
  description: "Learn how TRENDY WUDPLAST collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-24 lg:pt-20 pb-20">
      {/* Navigation Breadcrumb */}
      <div className="bg-muted py-4 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="flex items-center space-x-2 text-sm font-sans text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 max-w-5xl">
        <div className="mb-12 border-b border-border/50 pb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground font-sans">
            We are committed to protect the privacy of any person who visits and accesses our website. The following policy appraises you, the visitor, as to how we seek to protect the privacy of any visitor to our website.
          </p>
        </div>

        {/* Content Section - Styled to match industry standards (no Tailwind Prose plugin needed, just raw clean classes) */}
        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Personal Information</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              Our website does not collect personal information about a visitor unless the visitor provides the same to us voluntarily by filling the contact forms provided on our website. Personal information in this context means any information from which a visitor's identity is apparent and/or can be ascertained or determined easily. Personal information may mean and include name, email address, residence or office addresses, and telephone numbers.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              When you voluntarily provide us with your personal information through the contact form provided on our website, we use it only for the fulfillment of your request and/or in order to answer your enquiry.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              We may contact you via the email address or the telephone numbers disclosed to us in the future to appraise you about our products, unless you specifically request us not to do so. Your personal information is not disclosed to a third party unless the same is necessary for the fulfillment of your request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Automatic Collection of Data and Usage Thereof</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              Our website server automatically collects certain browsing data of any person that visits our website to track and monitor usage of the website and to enhance the performance of the website for improved end user experience. Such data shall be solely for the use of Trendy Wudplast and may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans leading-relaxed">
              <li>The Internet Protocol address or the domain name of the internet service provider from which our website is accessed.</li>
              <li>Data and time when our site was accessed.</li>
              <li>Duration of the usage.</li>
              <li>The type and version of the operating system and web browser of the machine from which our website is being accessed.</li>
              <li>Selection of pages or sections of the website visited.</li>
              <li>The documents downloaded from the website.</li>
              <li>The internet address of the website visited just prior to our website.</li>
            </ul>
            <p className="text-muted-foreground font-sans leading-relaxed mt-4">
              The browsing and server data as aforesaid may be accessed by a third party who has been appointed by us for maintenance and administration of the website. However, in doing so, we do not disclose any personal information or the identity of a visitor to such third party. Any third party appointed by us has to comply with the above data protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Collection of Information by Third-Party Sites</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Our website may contain advertisements and/or links to other websites. We do not exercise any authority or control over the privacy policy of such external website. Any visitor which follows a link from our website must independently confirm and be aware of the privacy policy and/or security of the external site as the privacy policy of such other website may be completely different from that of ours. We are not liable for the privacy policy of any such external websites whose links are provided on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Cookies</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              We use "cookies" on this site. However, usage of a cookie does not disclose any personal information to our site. A cookie is a piece of data stored on a visitor's computer hard drive that helps improve access to websites that the visitor has already visited. Cookies help identify browsing information.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              If you visit our website, information may be saved on your computer by way of these cookies which enable us to identify your computer automatically during your next visit of our homepage. This helps us to improve your browsing experience.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              If you do not wish our website to place cookies in your machine, kindly set up your internet browser in a fashion that it deletes cookies or blocks cookies or enables you to identify websites that use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Confirmation</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Any visitor to our website confirms that they have read and understood our privacy policy in entirety and has visited our website after being satisfied of the same. Browsing our website is an ipso facto acceptance of our terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Opt-Out</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications. If you do not wish to receive promotional communications from us or wish to delete the data already shared by you on our platform, please email us at <a href="mailto:trendywud@gmail.com" className="text-primary hover:underline">trendywud@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Change in Policy</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              The privacy policy is subject to modification from time to time. If we decide to change our privacy policy, we will post those changes here so that you will always know what information we gather, how we might use that information and whether we will disclose it to anyone. Any significant changes to our privacy policy will be announced on our home page. If you do not agree with the changes in our policy you can simply discontinue to visit our website.
            </p>
          </section>

          <section className="pt-8 border-t border-border/50">
            <h2 className="text-xl font-serif font-bold text-foreground mb-4">Questions or Suggestions</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              If you have questions or suggestions regarding this privacy policy, please contact us at:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground font-sans">
              <li><strong className="text-foreground">Email:</strong> trendywud@gmail.com</li>
              <li><strong className="text-foreground">Phone:</strong> +91 92532 69487</li>
              <li><strong className="text-foreground">Address:</strong> Chirod Road, Chaudhariwas, Hisar, Haryana 125007</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}