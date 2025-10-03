'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import { SwingLogo } from '@/components/ui/SwingLogo';

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative py-8 md:py-10 lg:py-12">
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-1"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-start"
              >
                <SwingLogo className="w-36 h-auto sm:w-44" />
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Your privacy and data protection are important to us
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative pb-12 md:pb-16 lg:pb-20">
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="space-y-8">
                {/* Introduction */}
                <div className="rounded-xl border border-primary/40 bg-primary/5 p-6 md:p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    We at DashBoardHosting are committed to maintaining your privacy. This privacy policy and agreement (&ldquo;Privacy Policy&rdquo; or &ldquo;Policy&rdquo;) covers how we collect, use, and treat personal information that you may provide through our website (the &ldquo;Website&rdquo; or the &ldquo;Site&rdquo;) or while using the Facilities on our Website (the &ldquo;Facilities&rdquo;). Our Terms and Conditions of Use (the &ldquo;Terms&rdquo;) govern your use of the Site. The terms &ldquo;you&rdquo; and &ldquo;your&rdquo; refer to any visitor to the Website, including: (i) casual visitors to our Site who have limited access to the Facilities (&ldquo;Visitors&rdquo;), and (ii) registered members of our Site including: (a) new members, (b) paid members; and (c) VIP members (collectively, &ldquo;Members&rdquo; unless indicated otherwise). The terms &ldquo;DashBoardHosting&rdquo;, &ldquo;we&rdquo; and &ldquo;us&rdquo; refer to DashBoardHosting, LLC.
                  </p>
                </div>

                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Your Consent</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Please read this Privacy Policy carefully; once you consent to this Policy&apos;s terms, it creates legal obligations on you and on DashBoardHosting. We ask you to show your consent to the terms of this Privacy Policy in different ways, depending on your relationship to the Site. The procedures for consenting to this Policy are (i) less formal if you are simply a casual Visitor, and (ii) more formal if you are seeking to become a Member of the Site.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">1.1. Consent by Visitors.</span> By accessing and using our Website as a Visitor, you are acknowledging that you have read and understood this Privacy Policy and agree to be legally bound by it. If you do not agree with the terms of this Privacy Policy, please refrain from using our Site.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">1.2. Consent by Members.</span> If you register as a Member, you will be prompted to click an &ldquo;I Accept&rdquo; button linked to this Policy during the registration process. Clicking &ldquo;I accept&rdquo; confirms your agreement to be bound by this Privacy Policy.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. The Types of Information You may Provide</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Information you may provide while visiting our Site or using our Facilities falls into two broad categories (i) personally identifiable information, and (ii) aggregate information. We use the term &ldquo;Personally Identifiable Information&rdquo; to mean any information that could reasonably be used to identify you including, for example, your name, address, e-mail address, age, photograph, or any combination of this or similar information. &ldquo;Anonymous Information&rdquo; is information that does not identify you, and may include statistical information concerning, for example, your use of our Facilities or the pages on our Site that you visit most frequently. These two categories of information can be further divided into (a) information that we collect from you, and that you provide to us (&ldquo;Site-Directed Information&rdquo;), and (b) information you intend to provide or make available to other Members or Visitors on our Site (&ldquo;Member-Directed Information&rdquo;). Our Privacy Policy governs all Site-Directed Information—whether this information is Personally Identifiable Information or anonymous information—and does not govern Member-Directed Information, as we have no direct control over the collection or use of Member-Directed Information.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. Site-Directed Personally Identifiable Information; Our Uses of this Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We will not share Personally Identifiable Information you provide to us via the Website with any third party, other than as expressly disclosed in this Policy. We collect information from Visitors and Members at different points on our Website and through our Facilities, and use this information as follows:
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">3.1. Registration Information; Usernames.</span> In order to participate as a Member and to use our Facilities, we require that you complete the registration process. The registration process asks you to: (i) create a username, (ii) create a password, (iii) verify that you are at least 18 years old, (iv) provide an email address, (v) provide your zip code, (vi) specify the country in which you reside, (vii) state your physical features such as: (a) height, (b) weight, and (c) age; and (viii) supply information about yourself and what you&apos;re hoping to discover by being a member of our Site. We also give you the option of providing your full name, which helps us should you forget your password. The registration process provides you with a username and password, which allows you to gain access to the Website and Facilities depending on the type of membership that you have obtained. Our system relies on usernames as the public &ldquo;identifier&rdquo; for the each Member.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">3.2. Billing Information.</span> After completing the registration process and receiving approval of your user profile, you may become a Paid Member by paying a membership fee. Paid Members have broader access to, and enjoy more flexible use of, our Site. We provide several different payment methods including electronic payment and more &ldquo;traditional&rdquo; payment methods such as mailing a check or money order. DashBoardHosting handles electronic payments by submitting billing information that you provide on our Site to a third party vendor. Any billing information sent by DashBoardHosting to our third party vendor is intended solely to allow said third party to process payment. Any personal information that we collect when processing payments made through &ldquo;traditional&rdquo; methods will be treated as Personally Identifiable Information.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">3.3. Email Addresses.</span> You have the option of opting-in or opting-out of receiving e-mail notifications relating to our Site, including for example, notifications that you have received a message from another Member.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">3.4. Communications with Other Members.</span> By registering on the Website, Members indicate an interest in exchanging information with other Members, subject to any Privacy Controls imposed. We seek to limit the information provided through our system to the minimum information needed to identify a participant in communications and other exchanges. To allow such communications, we provide information to identify individual users, in the form of Members&apos; username, gender, height, weight, and a link to their user profile.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">3.5. Other Information Exchanges.</span> The Website allows Members (i) to provide and receive information in a range of forms and on a variety of topics, and (ii) to engage in other activities through Website discussions that may include, at the option of the user, an exchange of Personally Identifiable Information. In these instances, we use any information you provide to us strictly for the purposes for which you submit the information.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">3.6. Use of Profiles in Promotions.</span> We believe that our Members&apos; own experiences on the Site can often act as the strongest promotion for the Site and our Facilities. To promote and illustrate the Site and our Facilities, therefore, we may wish to post on our homepage, and in other areas of the Site, Member profiles and other information that our Members provide to us. To this end, we provide &ldquo;mini-searches&rdquo; in which Visitors performing searches will be able to see a synopsis of your profile, and an image from your profile may be displayed on our homepage. Moreover, if you create an external profile, then Visitors will have greater access to the content that you have placed on our Site. You have the option of opting-out of &ldquo;mini-searches.&rdquo; You may also request to become a &ldquo;feature member&rdquo; in which your Content will be prominently displayed on our homepage. Please be aware that all Visitors will be able to view your Content if you opt-in to participate in: (i) the mini-searches, (ii) become a featured member; or (iii) activate an external profile.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">3.7. Forums and Chat Rooms.</span> As part of our Facilities, we offer forums and chat rooms on our Site. We make only your username available to other users of these Facilities. Any comments you contribute to the online dialogue, however, become public immediately, attributed to your username. You should, therefore, use discretion in what you submit to these exchanges. Additional guidelines for the use of our forums and chat rooms are available on our Site.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">3.8. Surveys and Contests.</span> Periodically, we may initiate surveys or contests at SwingLifeStyle.com, and we may request Personally Identifiable Information from you in connection with such surveys and contests. You are free to choose whether you participate in a survey or contest. The information we request may include contact information, and this information will be used to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the use and appeal of our Site. We will notify you of relevant details in connection with asking for your participation in such surveys or contests.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Your Responsibility for Member-Directed Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Member-Directed Information is information you intend to provide or make available to other Members on our Site via our Facilities including, but not limited to, our forums and chat rooms as well the information that you include on your profile. Although we counsel you to take care if you include Personally Identifiable Information—such as your full name or a photograph of yourself—in your Member-Directed Information, our Privacy Policy does not cover Member-Directed Information. If you choose to disclose any Personally Identifiable Information, any such information can be collected and used by other Members and Visitors, and you may receive unsolicited communications or contact as a result. We provide a range of Facilities to assist you in making good choices concerning the information you disclose. Please see Section 8 (Additional Tools for Protecting Your Privacy) for a description.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Anonymous, Aggregate Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We use Anonymous Information to analyze the effectiveness of our Site, to improve our Facilities, and for other similar purposes. In addition, from time to time, we may undertake or commission statistical and other summary analyses of the general behavior and characteristics of users using our Facilities and the characteristics of Visitors at our Site, and may share Anonymous Information with third parties. Rest assured, though, that Anonymous Information provided to third parties will not allow anyone to identify you, or determine anything personal about you. We may collect Anonymous Information through features of the software that supports our Facilities, through cookies, and through other means described below.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">5.1. IP Addresses; Logs.</span> DashBoardHosting may automatically receive and record information in our server logs from your browser, including your IP address (the Internet address of your PC), the type and version of your web browser, referrer addresses, and other generally-accepted log information. We may also record page views (hit counts) and other general statistical and tracking information, which will be aggregated with that of other users in order to understand how our Website is being used, and for security and monitoring purposes. None of this data contains Personally Identifiable Information.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">5.2. Cookies.</span> A cookie is a small amount of data, which often includes an anonymous unique identifier, which is sent to your browser from a website&apos;s computers and stored on your computer&apos;s hard drive. Cookies can be used to provide you with a tailored user experience and to make it easier for you to use a website upon a future visit. We may include cookies on our Website and use them to recognize you when you return to our Website. You may set your browser so that it does not accept cookies. Cookies must be enabled on your web browser, however, if you wish to access certain personalized features of our Site.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">5.3. Computer Configuration.</span> In order to determine whether your computer is supported by our system, we may collect certain Anonymous Information. This information includes, but may not be limited to, your operating system and browser, as well as the presence of any software that our Website may require to operate with your computer, or other third party software on your computer. This information is kept strictly confidential and is not shared with third parties, except as provided for in this Privacy Policy.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. Any Information Linked with Your Personally Identifiable Information is Protected as &ldquo;Personally Identifiable Information&rdquo;</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To enable us to better understand the characteristics of our customers and/or to provide Facilities tailored to your needs, we may link (i) the Personally Identifiable Information you have provided, with (ii) Anonymous Information. If we combine or link any Anonymous Information or other information with your Personally Identifiable Information, the resulting combination will be treated and protected as Personally Identifiable Information under this Privacy Policy. Accordingly, no unrelated third parties will have access to this information, and any of our service providers who are granted access to this information will be bound to protect it in accordance with this Policy.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. We Do Not Disclose Site-Directed, Personally Identifiable Information to Unaffiliated Third Parties; Limited Exceptions</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We will not disclose your Personally Identifiable Information to unaffiliated third parties without your express consent, except in the following limited circumstances:
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">7.1. DashBoardHosting Site Vendors.</span> We may employ other companies to perform functions on our behalf, such as maintaining the Website, providing services related to the Site, collecting information, responding to and sending electronic mail, or other functions necessary to our business. We may need to share your Personally Identifiable Information with these companies (collectively, &ldquo;Site Vendors&rdquo;). We will provide Site Vendors with only that Personally Identifiable Information that is necessary to perform their functions, and we will inform them that they may not use said Personally Identifiable Information for any other purpose.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">7.2. Harm.</span> We may reveal your Personally Identifiable Information to attorneys or law enforcement agencies if we believe (i) that you are at risk of harm from another, or (ii) that you are harming or interfering (or will imminently harm or interfere) with others or violating (either intentionally or unintentionally) our Terms or otherwise violating legal rights.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">7.3. Legal.</span> DashBoardHosting will reveal your Personally Identifiable Information to the extent we reasonably believe we are required to do so by law. If we receive legal process calling for the disclosure of your Personally Identifiable Information we may attempt to notify you via the email address you supplied during registration within a reasonable amount of time before we respond to the request, unless such notification is not permitted.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">7.4. Transfer of Site.</span> DashBoardHosting shall be entitled to transfer to a third party information it collects, including any Personally Identifiable Information, in connection with a sale of all or substantially all of the assets of the business entity responsible for the information under this Policy, provided the acquiring third party has agreed to safeguard your Personally Identifiable Information with protections that in all material respects are the same as or more protective than those set out in this Privacy Policy.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Additional Tools for Protecting Your Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We recognize that users may provide more personal information than they intend, or should, over the public areas in social networking sites. We provide a range of features to assist our Members seeking to preserve an appropriate level of privacy, including the following:
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">8.1. Privacy Controls.</span> We provide you with privacy controls, that allow you to: (i) designate your profile as &ldquo;offline,&rdquo; (ii) &ldquo;block&rdquo; certain Members; and (iii) designate certain uploaded visual content as &ldquo;public,&rdquo; &ldquo;private,&rdquo; or &ldquo;personal&rdquo; (collectively, our &ldquo;Privacy Controls&rdquo;). You may, for example, request us to designate your Profile as &ldquo;offline.&rdquo; Profiles designated as &ldquo;offline&rdquo; restrict the access that other Members have to your Profile. In addition, you have the ability to &ldquo;block&rdquo; specific Members. When posting photographs, video, and other visual content on our Site, you can designate the image as either public, private, or personal. All Members, and potentially Site Visitors, can view content marked &ldquo;public,&rdquo; and only those Members that you give permission to can view your uploaded content that is marked &ldquo;private&rdquo; or &ldquo;personal.&rdquo; If you create an external profile, then Site Visitors may be able to view additional content in your profile.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We have implemented specific guidelines for the subject matter that can be depicted in the content that you upload onto the Website. In an effort to ensure Member compliance with our guidelines, DashBoardHosting has created procedures for reviewing and filtering content. Visual content that is designated as &ldquo;public&rdquo; is first reviewed by our Members in an attempt to ensure compliance with our guidelines and Terms. &ldquo;Public&rdquo; visual content is then reviewed by DashBoardHosting employees before it is posted on our Site. Visual content that is designated as &ldquo;private&rdquo; is only intended to be reviewed by DashBoardHosting before it is posted on our Site. Visual content that is designated as &ldquo;personal&rdquo; is intended to be reviewed by only Members before it is posted on our Site. DashBoardHosting may choose, but does not assume the obligation, to &ldquo;spot check&rdquo; personal visual content for compliance with our Terms and guidelines. Please see our Terms for more information with respect to the categories of content and how they are reviewed and filtered.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Please either employ the Privacy Controls, or choose carefully the information you post on your profile, and that you provide to other Members. You should take care if you choose to include information that personally identifies you, such as your telephone number, street address, last name, email address, and any photographs that could easily identify you or where you are located.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">8.2. Reporting of Problems.</span> If you feel that you or one of your friends have been harassed or bullied on our Site, or that users have infringed upon your privacy or violated our Code of Conduct, please report your concerns as set out in our Terms.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">9. Changing or Removing Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-foreground">9.1. Discretionary Account Information.</span> To allow appropriate control over Personally Identifiable Information, you can access your account (after supplying your username and password) to change or update discretionary information that you have previously submitted.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">9.2. Deleting Information.</span> Finally, if you request, we will remove your name and all other Personally Identifiable Information from our databases. Please understand, however, that it may be impossible to remove this information completely, due to backups and records of deletions. In addition, please understand that, if you request deletion of your information, you will be unable to utilize associated features of the Website and any associated Facilities. You may not remove de-identified, anonymous, or aggregate data from our databases.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">10. Security</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We have put in place security systems designed to prevent unauthorized access to, or disclosure of, personally identifiable Site-Directed Information that you provide to us, and we take all reasonable steps to secure and safeguard this Information. Our site&apos;s password-protected section requires users to give us unique identifiers such as their username and password. Moreover, we store all Site-Directed Personally Identifiable Information in a secure fashion. DashBoardHosting employees (and employees of our affiliates and Site Vendors) are required to acknowledge that they understand and will abide by our policies with respect to the confidentiality of Personally Identifiable Information. Moreover, we provide access to our databases containing Personally Identifiable Information on a need-to-know basis only.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Our security systems are therefore structured to deter and prevent hackers and others from accessing information you provide to us. We also use software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage. Please understand, though, that this information should not be construed in any way as giving business, legal, or other advice, or warranting as fail proof, the security of information provided by or submitted to DashBoardHosting. Due to the nature of Internet communications and evolving technologies, we cannot provide, and disclaim, assurance that the information you provide us will remain free from loss, misuse, or alteration by third parties who, despite our efforts, obtain unauthorized access.
                  </p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">11. Modification of Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify, in our sole discretion, this Policy. If we modify this Policy, any such modifications will take effect proactively, upon your subsequent access to the Website. If we modify this Policy then we may, in our sole discretion, inform you of any changes by posting a notice on our Site.
                  </p>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">12. Relationship to Terms and Other Contracts</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This Privacy Policy must be read in conjunction with our Terms, and the provisions of our Terms are incorporated herein. To the extent the Terms conflict with the terms of this Privacy Policy, the terms of this Privacy Policy will control.
                  </p>
                </div>

                {/* Section 13 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">13. Further Resources</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you wish further information concerning privacy policies in general, concerning online social networking and safety, and concerning the Children&apos;s Online Privacy Protection Act, you should visit the following sites:
                  </p>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>http://www.safeteens.com</p>
                    <p>http://www.ftc.gov/privacy/index.html</p>
                    <p>http://www.ftc.gov/privacy/privacyinitiatives/childrens_educ.html</p>
                    <p>http://www.ftc.gov/bcp/conline/edcams/kidzprivacy/index.html</p>
                    <p>http://www.wiredsafety.org/internet101/blogs.html</p>
                    <p>http://www.netsmartz.org/netteens.htm</p>
                    <p>http://www.isafe.org/channels/sub.php?ch=op&sub_id=media_tips</p>
                  </div>
                </div>

                {/* Section 14 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">14. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, the practices of this Site, or your dealings with this Website, please contact us via certified mail at:
                  </p>
                  <div className="rounded-xl border border-primary/40 bg-primary/5 p-6">
                    <p className="text-foreground font-semibold">
                      DashBoardHosting, LLC<br />
                      4613 N University Drive #239<br />
                      Coral Springs, FL 33067
                    </p>
                  </div>
                </div>

                {/* Section 15 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">15. Effective Date</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The effective date of this Privacy Policy is <span className="font-semibold text-foreground">{currentDate}</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
