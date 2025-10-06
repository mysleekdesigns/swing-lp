'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import { SwingLogo } from '@/components/ui/SwingLogo';
import { Starfield } from '@/components/ui/Starfield';

export default function TermsAndConditionsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Starfield />
      <main className="relative min-h-screen z-10">
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
                <Link href="/">
                  <SwingLogo className="w-36 h-auto sm:w-44" />
                </Link>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-black">
                  Terms &amp; Conditions
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Please read these terms carefully before using our services
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
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The SwingLifeStyle website (the &ldquo;Website,&rdquo; or &ldquo;Site&rdquo;) is provided to you by DashBoardHosting, LLC (&ldquo;DashBoardHosting&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;). To assist you in using our Website and accessing the associated facilities, and to ensure a clear understanding of the relationship arising from your use of our Site and participation via the facilities, we have created (i) these Terms and Conditions of Use (the &ldquo;Terms&rdquo;), and (ii) a Privacy Policy. Our Privacy Policy explains how we treat information you provide to us through the Site, and our Terms govern your use of our Site. Our Terms and Privacy Policy apply to any visitor to the Website (collectively, &ldquo;you&rdquo;), including (i) casual visitors to our Site who do not register to obtain a username and password, and (ii) registered members who create Profiles and otherwise participate in our Facilities including: (a) Free Members, (b) Paid Members; and (c) VIP Members.
                  </p>
                  <p className="text-foreground font-semibold leading-relaxed">
                    PLEASE READ THIS DOCUMENT CAREFULLY BEFORE YOU ACCESS THE SITE OR REGISTER AS A MEMBER OF THE SITE. BY ACCESSING THE SITE OR REGISTERING AS A MEMBER OF THE SITE, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS SET FORTH BELOW. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS AND CONDITIONS, PLEASE DO NOT ACCESS OUR SITE.
                  </p>
                </div>

                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Your Agreement</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These Terms govern: (i) your use of the Website, (ii) use of the Facilities to provide Content to other Members and Site Visitors; and (iii) your use of Content accessed through the Site. Please read these Terms carefully; they impose legal obligations on you and on DashBoardHosting, and establish our legal relationship. By accessing our Website or registering as a Member of the Site, you are acknowledging that you have read and understood these Terms and agree to be legally bound by them. To assist you in your understanding of these Terms, we have included a set of definitions, located in Section 24 (Definitions).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In addition, if you become a Member, during the registration process you will be prompted to click an &ldquo;I Accept&rdquo; button, which further confirms your agreement to be legally bound by these Terms.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Eligibility</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You are eligible to register as a Member at our Site if: (i) you are 18 years old or older, (ii) you have requisite permissions to submit the Content you wish to submit to the Site as provided in Section 6.6 (Rights You Must Have in Content); and (iii) you agree to abide by our Terms and the Privacy Policy.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You are only allowed to open one (1) Free Member account with us. You may, however, open multiple Paid Member accounts.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. Our Website</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We provide a range of features for our Members as follows:
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">3.1. Our Website</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We provide our Members with access to an online social network, which is designed to allow them to find and communicate with old and new friends, based on shared interests. Members use our Site primarily via Member &ldquo;profiles,&rdquo; which are personal web pages. As a Member, you can create a profile and, subject to certain content-related, bandwidth, and file-size restrictions, and you can include in your profile multimedia content including both photographs and a video (the &ldquo;Profile&rdquo;). Other Members then use your Profile to leave you messages (incorporating multimedia content, if they wish), to send you &ldquo;instant messages,&rdquo; and to create links to their own Profiles. Depending on the privacy controls you have set for your Profile, you have the ability to &ldquo;open&rdquo; your Profile not just to close friends, but to others, including all other Members.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Member exchanges via Profiles are supplemented by additional features of our Site, that allow Members to: (i) contribute to forums, stories, and group message areas, and (ii) utilize other facilities that we provide.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">3.2. Summary of Site</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The above generally describes our Site. Please read on for the specific terms and conditions under which we provide this Site. For example, for further information and terms concerning Profiles and Members&apos; privacy controls, please review Section 6.1 (Privacy, Your Profile, and Privacy Controls) and Section 12 (Technical Restrictions; Remedies). And please review our Privacy Policy for details concerning our uses of aggregate information, and other important information concerning our privacy and other data protection practices.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">3.3. Additional Guidelines</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    DashBoardHosting may post additional guidelines on its Website relating to your use of the Site including, for example, your conduct while participating in a chat room. You agree to adhere to, and to be bound by, all guidelines that DashBoardHosting chooses to post on the Website. In the event that there is a conflict between these Terms and any guidelines that we post on our Site, these Terms shall control.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Registration Process; Membership Types</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    This section describes how you can become a Member of our Site and the types of memberships that we offer. Please refer to the guidelines posted on our Site for more information about the benefits and responsibilities of each type of membership. Please see our Privacy Policy for how we treat information you provide when becoming a member of our Site.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">4.1. Registration Process; Password</h3>

                  <h4 className="text-lg font-semibold text-foreground mb-3">4.1.1. Registration Process</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    In order to participate as a Member on our Site, we require that you complete the registration process. The registration process asks you to: (i) create a username, (ii) create a password, (iii) verify that you are at least 18 years old, (iv) provide an email address, (v) provide your zip code, (vi) specify the country in which you reside, (vii) state your physical features such as (a) height, (b) weight, and (c) age; and (viii) supply information about yourself and what you&apos;re hoping to discover by being a member of our Site (the &ldquo;Registration&rdquo;). We also give you the option of providing your full name, which helps us should you forget your password. The registration process provides Members with a username and password, which allows them to gain access to the Website and certain Facilities depending on the type of membership that they have obtained. Our system relies on usernames as the public &ldquo;identifier&rdquo; for a particular Member. Please see our Privacy Policy for additional information regarding the information that you provide during the Registration.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">4.1.2. Protecting your Password</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Please keep in mind that we will treat anyone who uses your password as &ldquo;you.&rdquo; We will provide this user with all of the rights and privileges that we provide to you, and we will hold you responsible for the activities of a person using your password. Therefore, we recommend that you maintain your username and password in confidence, and that you refrain from disclosing this information to anyone who might &ldquo;pretend&rdquo; to be you with respect to the Facilities and your participation on our Website. We also ask that you notify us immediately if you suspect that someone is using your password in this manner.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">4.2. Membership Types</h3>

                  <h4 className="text-lg font-semibold text-foreground mb-3">4.2.1. Free Members</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    You can become a Free Member simply by completing Registration. Free Members have limited access to our Facilities. For example, Free Members are allowed to view five (5) Profiles per day with access to primarily non-nude, Public Content. Free Members may be able to send up to five (5) messages per day. In addition, Free Members may also be able to participate in chat rooms and have limited access to other Content.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">4.2.2. Paid Members</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    After completing Registration and approval of your Profile by DashBoardHosting, which approval may be granted or denied in DashBoardHosting&apos;s sole discretion, you can opt to become a Paid Member by submitting payment to DashBoardHosting pursuant to the guidelines posted on the Site. Paid Members enjoy additional access to Content on our Site that is not available to Free Members.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">4.2.3. Lifetime Members</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Members may pay to become Lifetime Members. Lifetime Member accounts have no account renewal obligations and Lifetime Members are not required to pay DashBoardHosting fees beyond those initially paid to DashBoardHosting in order to obtain a Lifetime Member account. Lifetime Members are entitled to access our Site until the unlikely and unfortunate event that the Site is shutdown or made generally unavailable or the account is terminated pursuant to Section 9 (Monitoring of Facilities; Removing of Postings). DashBoardHosting will make commercially reasonable efforts to keep the Site continually active.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">4.2.3.1. Content Gatekeepers</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Certain Lifetime Members have been selected to review and filter Visual Content as set out in Section 9.1 (Filters; Blocking and Removal of Visual Content) and to monitor chat rooms (the &ldquo;Content Gatekeepers&rdquo;). DashBoardHosting reserves the right, in its sole discretion, to revoke the rights and obligations of Content Gatekeepers. Content Gatekeepers are treated as Lifetime Members for purposes of these Terms.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">4.2.4. Charter Members</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Charter Members are Members who have special designations on their Profiles indicating that they were part of the original group of Members on our Site. Charter Members have the same rights and obligations as Lifetime Members for all other purposes and are treated as Lifetime Members for purposes of these Terms, the Privacy Policy, and any guidelines that we post on our Site.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">4.2.5. VIP Members</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    You may request to become a VIP Member of our Site. As a VIP Member, you are allowed to post information about upcoming events, in the appropriate area(s)(&ldquo;Party Information&rdquo;). DashBoardHosting reserves the right to post Party Information on the Site and on any of our affiliate Sites. DashBoardHosting shall decide, in its sole discretion, if you qualify as a VIP Member. VIP Members, depending on the type of Membership selected, are treated as either Free Members or Paid Members for all other purposes.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">4.3. Site Visitors</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Users who access our Site without becoming Members have very limited access to the Facilities that we provide and the Content posted on our Site.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Billing and Refunds</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    After completing Registration and receiving approval of your Profile, you may become a Paid Member by paying a membership fee (the &ldquo;Membership Fee&rdquo;). Paid Members have broader access to, and enjoy more flexible use of, our Site. We provide several different payment methods including electronic payment and more &ldquo;traditional&rdquo; payment methods such as mailing a check or money order. You acknowledge and agree that electronic payments are handled through a third party vendor, and any billing information you provide to DashBoardHosting may be sent by DashBoardHosting to that third party vendor. Any billing information sent by DashBoardHosting to a third party vendor is intended solely to allow the third party vendor to process the payment. Any personal information that we may collect when processing payments that you make in connection with your use of the Site will be treated as Personally Identifiable Information as discussed in our Privacy Policy. Please note that DashBoardHosting does not store or retain credit card numbers or expiration dates. All Membership Fee payments made to DashBoardHosting are nonrefundable and nontransferable.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. Limited Grant of Rights; Profile and Facilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our Website is designed to facilitate your interactions with other Members through the use of our Facilities and the creation of your Profile. The following specific provisions govern the creation, use, and treatment of: (i) Member Profiles, (ii) our Facilities; and (iii) the Content.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">6.1. Facilities</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To allow you to interact with other Members and to participate in our social community, DashBoardHosting has made available to you a range of facilities that allow you to interact with other Members via the: (i) Profile, (ii) forums, (iii) chat rooms, (iv) stories, (v) club listings, (vi) email, (vii) instant messaging; and (viii) other facilities that we may make available from time to time (collectively, the &ldquo;Facilities&rdquo;). The Facilities format the Content, store the uploaded Content until it retrieves the Content at the request of Other Members, at which point the Facilities transmit the Content to the requesting Member.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Members may post personal Visual Content that is only accessible to other Members (after said Members have been affirmatively given access from the uploading Member) via a gallery page (the &ldquo;Gallery&rdquo;). The Gallery is intended to be a secure area in which uploaded personal Visual Content is accessed and viewed by other Members in a secure, non-downloadable format.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">6.2. Privacy, Your Profile, and Privacy Controls</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To allow you greater flexibility in the information you include in your Profile, we provide you with privacy controls that allow you to control certain aspects of your Profile. You may, for example, request that your Profile be designated as &ldquo;offline&rdquo; to our online community (our &ldquo;Privacy Controls&rdquo;). You may also &ldquo;block&rdquo; particular Members from accessing your Profile or contacting you through the Site. In addition, you may designate Visual Content as: (i) public, (ii) private; or (iii) personal. Visual Content designated as &ldquo;public&rdquo; can be generally accessed, Visual Content designated as &ldquo;private&rdquo; restricts those that may access your Visual Content, and Visual Content designated as &ldquo;personal&rdquo; is designated for your personal gallery only, which can only be viewed by those that you affirmatively designate as having authorization to access personal Visual Content.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Please choose carefully the information you post on your Profile, and that you provide to other Members. Your Profile is freely available to other Members, you MUST not include information in your profile that personally identifies you, such as your telephone number, street address, last name, email address, or any photograph or video that may allow other Members to determine your physical location. Additionally, link or references to other websites are forbidden in profiles.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">6.3. Your Grant of Rights to DashBoardHosting</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    DashBoardHosting has established a host of Facilities to assist you in your efforts to interact with other Members. This section outlines the rights that DashBoardHosting has in the Content.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">6.3.1. Visual Content</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    You grant to DashBoardHosting, pursuant to your intellectual property rights, only those limited rights that are necessary for DashBoardHosting to assist you in your posting of Visual Content using our Facilities and to enhance the experience that users enjoy when accessing our Site. Please be aware that no compensation will be paid to you or any third party with respect to our use of your Visual Content under this grant.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">6.3.2. Textual Content</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    You grant to DashBoardHosting, pursuant to your intellectual property rights, a perpetual, non-exclusive, royalty-free, sublicensable right to use, copy, modify, adapt, display, perform, and distribute your Textual Content (the &ldquo;Textual Content License&rdquo;). DashBoardHosting may, in its sole discretion, provide attribution should it exercise any of its rights pursuant to the Textual Content License.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">6.4. Formatting; Visual Content Compatibility</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    In order to maintain the efficient operation of the Site, DashBoardHosting implements certain format and file-size standards for visual Content uploaded by Members. By submitting Visual Content to our Site, you authorize DashBoardHosting to convert the submitted Visual Content into a format and size that is compatible with the Site&apos;s requirements (&ldquo;Visual Content Formatting&rdquo;). Visual Content Formatting is done solely to ensure technical compatibility between the uploaded Visual Content and our Site and does not have an impact on the subject matter of the Visual Content.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">6.5. Your Grant of Rights to Other Members and Site Visitors</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    You grant to other Members, under your intellectual property rights, the right to access and view Content that you have posted solely for their personal, non-public use. Subject to the limitations set out in 9.1 (Filters; Blocking and Removal of Content), you have the option of restricting this grant by identifying particular Visual Content as &ldquo;private&rdquo; or &ldquo;personal,&rdquo; which is designed to prevent other Members from being allowed to access or view Visual Content that has been uploaded onto the Site unless first given permission by you. Please be aware that, depending on the Privacy Controls that you have selected, it may be possible for Site Visitors to view your Profile or the Content that you have uploaded onto the Site. If your Privacy Controls are set to allow this, then you will be deemed to have granted Site Visitors the same rights granted to other Members pursuant to this Section 6.5 (Your Grant of Rights to Other Members and Site Visitors). Nothing in these Terms shall be construed as giving other Members any rights other than those explicitly stated in this Section 6.5 (Your Grant of Rights to Other Members).
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">6.6. Rights You Must Have in Your Content; Records</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    When you post Content on our Site through the Facilities, you represent and warrant: (i) that you hold all rights needed to grant requisite rights under Section 6.3 (Your Grant of Rights to DashBoardHosting) and Section 6.5 (Your Grant of Rights to Other Members and Site Visitors), (ii) that you own the copyright in all Content subject to copyright protection (or have been given needed permissions by the copyright owner, or use the Content under &ldquo;fair use&rdquo; principles), (iii) that each person depicted in images, video, or identified in text in your Content (if any), has provided you with consent to use the Content as set forth in these Terms, (iv) that you are responsible for managing and editing the Visual Content; and (v) that you will maintain, if required by law, any records pursuant to 18 U.S.C. §2257 for Content that you upload onto the Site. You should seek independent legal counsel if you have any questions as to the rights and obligations that you have pursuant to this or any other section.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">6.7. Advertisements and Profiles</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    You represent and warrant that you shall not use your Profile to: (i) advertise for, or make any reference to, any other website, (ii) sell any product or service, (iii) attempt to attract our Members or Visitors to any other website; or (iv) use any Textual Content for any commercial purpose.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">6.8. Use of Profiles in Promotions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We believe that our Members&apos; own experiences on the Site can often act as the strongest promotion for the Site. To promote the Site, therefore, we may wish to post on our Home Page, and in other areas of the Site, Profiles and other Content of our Members. We assume that Members who choose not to employ our Privacy Controls to prevent this use are interested in (or do not object to) publicizing their Profiles and related Content, and you acknowledge that we will be entitled to use these Members&apos; Profiles and Content in connection with our advertisements and promotions for the Site.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">6.9. Termination of Rights; Survival</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    DashBoardHosting expressly disclaims ownership in all Visual Content. You can request, and DashBoardHosting will remove within a reasonable time, the Visual Content that you post on our Site. Any rights that you grant to DashBoardHosting, Other Members, and Site Visitors in the Visual Content terminate upon your removal of the Visual Content from our Site. The Textual Content License continues in perpetuity.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. DashBoardHosting&apos;s Grant of Rights to You</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    In this Section, DashBoardHosting gives Members the rights and privileges that they will need to participate in our Website via the Facilities.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">7.1. Rights to Access and Participate in Facilities</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Subject to your compliance with these Terms, DashBoardHosting grants to you the right to access the Facilities. DashBoardHosting&apos;s grant in the Facilities to you is limited to your personal use and solely to access the Content in connection with your rights and obligations set out in Section 6 (Limited Grant of Rights; Profile and Facilities) and Section 7 (DashBoardHosting&apos;s Grant of Rights to You). The Website may not be used in connection with any commercial endeavor except (i) those commercial endeavors set out in these Terms, and (ii) other commercial endeavors that we specifically consent to in writing.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">7.2. DashBoardHosting Ownership; Reservation of Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    DashBoardHosting Content means all content available on or through the Website—other than Content—including all information, software, artwork, text, video, audio, pictures, trademarks, trade dress, and other intellectual property found on the Website, or embodied in the Facilities or the content (&ldquo;DashBoardHosting Content&rdquo;). DashBoardHosting and its Licensors own all DashBoardHosting Content. The DashBoardHosting Content is protected by U.S. and international copyright, trademark, and other intellectual property laws, and DashBoardHosting retains all rights with respect to the: (i) DashBoardHosting Content, (ii) Website; and (iii) Facilities; except those expressly granted to you in these Terms. You agree not to use, duplicate, publish, display, distribute, modify, or create derivative works from DashBoardHosting Content except as expressly allowed in Section 7.1 (Rights to Access and Participate in Facilities), unless specifically authorized in writing by DashBoardHosting.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Code of Conduct</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    As a condition to your use of the Website, the Content, and the Facilities, you agree to comply with these Terms, and to follow our Code of Conduct as set out below. Under this Code, you will not:
                  </p>

                  <div className="space-y-4 pl-4 border-l-2 border-primary/40">
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.1.</span> Upload, email or otherwise transmit any images, material, or other Content that is intentionally false, defamatory, unlawfully threatening, unlawfully harassing, illegal, obscene, abusive, or otherwise in violation of any of the guidelines posted on our Site or in our Terms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.2.</span> Attempt to solicit Members directly.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.3.</span> Disseminate materials that impact or invade the privacy of others, such as photographs, video clips, sound recordings, personally identifiable information, or other materials that reveal personal, private or sensitive information about another person, without that person&apos;s consent.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.4.</span> Infringe any third party&apos;s copyright, patent, trademark, trade secret, or other proprietary rights or rights of publicity or privacy. No material may be transmitted over the Website without the copyright owner&apos;s permission, or without a legitimate &ldquo;fair use&rdquo; justification for the transmittal.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.5.</span> Transmit materials that contain any viruses, Trojan horses, worms, time bombs, cancelbots, or other computer-programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept, or expropriate any system, data, or personal information.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.6.</span> Seek to use for financial gain the Website, related computer facilities, or information available on the Website unless prior written authorization has been given by DashBoardHosting.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.7.</span> Use the Website, or anything available on the Website, to artificially generate traffic or page links to a website or for any other purpose not expressly allowed under these Terms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.8.</span> Use the Website in a manner that could disable, overburden, or impair the Site or interfere with any other party&apos;s use and enjoyment of the Site. Such uses would include, for example, distributing or promoting material containing solicitations, forwarding chain letters, and sending &ldquo;spam&rdquo; email.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.9.</span> Seek to obtain access to any materials or information through &ldquo;hacking,&rdquo; &ldquo;scraping,&rdquo; or through other means we have not intentionally made available to you through the Website.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.10.</span> Use the Website for any purpose that is unlawful or prohibited by these Terms. For example, you will not use the Website, Facilities, or Content to violate any law, statute, or regulation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">8.11.</span> Use any Member email address obtained from our Site for any purpose other than as directed by that Member. Notwithstanding the foregoing, under no circumstances including, but not limited to, direction by said Member, shall you use any email address to send advertisements or other solicitation to our Members.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mt-6">
                    We will enforce the above Code of Conduct wherever we deem necessary. Please understand, however, that DashBoardHosting does not endorse the Content accessed through our Facilities. When you use our Facilities, you do so at your own risk, and we expressly disclaim responsibility for the Content accessed through these Facilities.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">9. Monitoring of Facilities; Removing Postings</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We expect each user of our Website to act responsibly, and to respect the rights of others. We seek to protect the integrity and security of our computing systems, and the right to protect our community of Members from claims of intellectual property infringement and other claims or threats, such as those detailed in our Code of Conduct. Toward these ends, we reserve the right in our discretion to: (i) monitor your use of the Website, your Profile, any communications made on the Site, and other Content transmitted through the Site, (ii) restrict or foreclose access to certain Internet sites or other resources; and (iii) take other actions we deem necessary to protect our community of users and our resources. Due to this monitoring, you cannot expect that communications through our Website will remain &ldquo;private&rdquo; or otherwise free of our review. Please refer to our Privacy Policy for a precise statement concerning your expectations of privacy.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">9.1. Filters; Blocking and Removal of Content</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Although we have no—and assume no—obligation to monitor activities on our Website, please understand that we may employ filters designed to detect and block the transmission of messages that contain inappropriate or unauthorized content. We reserve the right to edit, refuse to post, or remove any information or materials, in whole or in part, that we believe, in our sole discretion, are incompatible with our Code of Conduct or these Terms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    DashBoardHosting has implemented specific guidelines for the subject matter that can be depicted in the Content that you upload onto the Website. In an effort to ensure Member compliance with the Content guidelines, DashBoardHosting has created procedures for reviewing uploaded Visual Content. Visual Content that is designated as &ldquo;public&rdquo; is first reviewed and filtered by Content Gatekeepers and is designed to ensure compliance with our guidelines and these Terms and then reviewed by DashBoardHosting employees before it is posted on our Site. Visual Content that is designated as &ldquo;private&rdquo; is only intended to be reviewed and filtered by DashBoardHosting before it is posted on our Site. Finally, Visual Content that is designated as &ldquo;personal&rdquo; is reviewed and filtered by only Content Gatekeepers before it is posted on our Site. DashBoardHosting may choose, but does not assume the obligation, to &ldquo;spot check&rdquo; &ldquo;personal&rdquo; Visual Content to ensure that the Visual Content posted complies with the guidelines provided on the Site. Nothing in this Section 9.1 (Filters; Blocking and Removal of Visual Content) is to be construed as absolving you of your obligations pursuant to Section 6.6 (Rights You Must Have in Your Content; Records). DashBoardHosting has no, and assumes no, responsibility for the Content that you have uploaded onto the Website.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">9.2. Reports and Complaints</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    If you believe that a Member or other user has acted inappropriately, such as by violating our Code of Conduct, you may report your concerns by contacting us in accordance with Section 25 (Contact Us) or as otherwise may be provided for on our Site. If we are notified by a Member or Site Visitor that he or she believes Content at the Site does not comply with our Code of Conduct or these Terms, we may investigate the allegation and determine, in our sole discretion, whether to remove or block access to such Content, or to take action with respect to person or persons responsible for posting the Content. We have the right (but not the obligation), in our sole discretion, to remove, relocate, or otherwise block or restrict any Content at any time, with or without notice, and without liability in order to ensure compliance with our Terms and our posted guidelines.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">9.3. Revocation or Suspension of Use Privileges</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We reserve the right at any time to terminate or suspend your account(s) or your access to our Site or to certain Facilities if you engage in activities that we conclude, in our sole discretion, breach our Code of Conduct or otherwise violate any of the terms and conditions set forth in these Terms. In the event that DashBoardHosting terminates a paid account, all membership fees paid up to the date of termination are nonrefundable.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Users should also understand that our Code of Conduct is based in many instances on principles of state and federal law. Users who violate our Code of Conduct accordingly may be exposed under these state and federal laws to criminal charges, and civil liability to harmed parties for compensatory damages and attorney&apos;s fees. DashBoardHosting reserves the right at all times to disclose information it deems necessary to satisfy any applicable law, regulation, legal process, or governmental request, consistent with its Privacy Policy.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">9.4. Member disputes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You are solely responsible for your interaction with other Members, both online or offline. We may monitor disputes between you and other Members, but we have no obligation to become involved. If you have a dispute with one or more Members, you release DashBoardHosting (and our officers, directors, agents, employees, subsidiaries, and affiliates) from all claims, demands, and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such dispute.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">10. Privacy and Your Disclosure of Information Via Our Facilities</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We value your privacy and the privacy of our Members. Please review our Privacy Policy for information on how we collect, use, and protect your personally identifiable information. These protections, however, do not apply to information you choose to disclose to other Members via our Facilities. Although Members are bound, under our Code of Conduct, to refrain from disseminating information from our Website and obtained while using our Facilities without permission, we cannot assure you that this will be the case. Therefore, you should disclose personally identifiable information advisedly. Please review our Privacy Policy for more information.
                  </p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">11. Links</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We allow certain companies to place links on our Site. Although we have selected these companies, we are not responsible for your choice to contact or do business with them. Your correspondence and dealings with these companies, and any other terms, conditions, warranties or representations associated with such dealings, are solely between you and the company, and you agree that DashBoardHosting shall not be responsible or liable for any loss or damage incurred as the result of your dealings with said companies or as the result of the presence of said companies on our Site.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The Website may contain links or references to third party websites. DashBoardHosting has no control over these third party sites or their content and does not assume responsibility or liability for any content, opinions, or materials and products available on them. DashBoardHosting does not endorse the content of any third party site, nor does DashBoardHosting warrant that a third party site will be free of computer viruses or other harmful code that can impact your computer or other web-access device. If you link to any third party site through our Site, please be aware that you are doing so at your own risk.
                  </p>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">12. Technical Restrictions; Remedies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You must respect our file size, bandwidth and storage limitations for Content you submit and the Profile you create. If we determine, in our discretion, that it is necessary, we will disable or take other related action concerning accounts that in our view are using excessive bandwidth or other system resources. In addition, we reserve the right, if we find it necessary (in our discretion), to delete or change a Member&apos;s username and URL address, and to restrict the number of emails which a Member sends to other Members in any 24-hour period, if we believe, in our discretion, that the volume of email is too large.
                  </p>
                </div>

                {/* Section 13 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">13. Warranty Disclaimer</h2>
                  <div className="rounded-xl border border-accent/40 bg-accent/5 p-6 md:p-8">
                    <p className="text-foreground font-semibold leading-relaxed mb-4">
                      DASHBOARDHOSTING DOES NOT WARRANT THAT THE WEBSITE WILL BE ERROR-FREE OR UNINTERRUPTED, OR THAT THE CONTENT, FACILITIES, AND FEATURES OFFERED ON OUR SITE WILL BE PROVIDED ERROR-FREE OR UNINTERRUPTED. THE SITE, AND ALL OF THE PROGRAMS AND FACILITIES ON THE SITE ARE AVAILABLE ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. DASHBOARDHOSTING DOES NOT WARRANT OR REPRESENT THAT THE SITE OR ANYTHING YOU DOWNLOAD FROM THE SITE WILL BE FREE OF VIRUSES OR OTHER HARMFUL FEATURES. TO THE EXTENT PERMITTED BY APPLICABLE LAW, DASHBOARDHOSTING DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. YOU EXPRESSLY AGREE THAT USE OF THE SITE AND RELATED SERVICES IS AT YOUR SOLE RISK.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Please consider maintaining back-up copies of the Content you post on your Profile.
                    </p>
                  </div>
                </div>

                {/* Section 14 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">14. Limitation of Liability</h2>
                  <div className="rounded-xl border border-accent/40 bg-accent/5 p-6 md:p-8">
                    <p className="text-foreground font-semibold leading-relaxed mb-4">
                      UNDER NO CIRCUMSTANCES, INCLUDING BUT NOT LIMITED TO BREACH OF CONTRACT, TORT, OR NEGLIGENCE, WILL DASHBOARDHOSTING BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS) THAT ARISE OUT OF, OR ARE RELATED TO, YOUR USE OF THE SITE, ITS PROGRAMS, SERVICES, CONTENT, PROMOTIONAL ITEMS, OR GIVEAWAYS, EVEN IF DASHBOARDHOSTING IS AWARE OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL DASHBOARDHOSTING&apos;S AGGREGATE LIABILITY TO YOU FOR ANY LOSS, DAMAGE, OR CLAIM RELATED TO, OR ARISING OUT OF, THE SITE OR ANY PROGRAMS OR SERVICES YOU RECEIVE FROM THE SITE EXCEED $100.00.
                    </p>
                    <p className="text-foreground font-semibold leading-relaxed">
                      YOU MAY DECIDE TO ENGAGE IN OFFLINE ACTIVITIES WITH MEMBERS FROM OUR SITE ON AN INDIVIDUAL BASIS, IN GROUPS, OR THROUGH EVENT LISTINGS. YOU ACKNOWLEDGE THAT DASHBOARDHOSTING MAKES NO WARRANTS WITH RESPECT TO ANY MEMBER, ANY INFORMATION PROVIDED BY ANY MEMBER ON THE WEBSITE, OR ANY INFORMATION REGARDING PARTIES. YOU AGREE TO RELEASE AND HOLD DASHBOARDHOSTING HARMLESS FROM ANY AND ALL LOSSES, DAMAGES, RIGHTS, CLAIMS, AND ACTIONS OF ANY KIND INCLUDING, WITHOUT LIMITATION, PERSONAL INJURIES, OR PROPERTY DAMAGE, EITHER DIRECTLY OR INDIRECTLY RELATED TO OR ARISING FROM YOUR PARTICIPATION IN ANY SUCH OFFLINE ACTIVITIES.
                    </p>
                  </div>
                </div>

                {/* Section 15 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">15. Indemnity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to defend, indemnify, and hold DashBoardHosting and its subsidiaries, affiliates, officers, directors, agents, and employees harmless from any liability to third parties, including reasonable attorneys&apos; fees, arising from or related to your breach of these Terms.
                  </p>
                </div>

                {/* Section 16 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">16. Contact for Alleged Copyright Infringement</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    DashBoardHosting respects the intellectual property rights of others and requires that its users do the same. If you believe that any content available on our Site or any other activity taking place on the Site constitutes infringement of a work protected by copyright law (a &ldquo;Work&rdquo;), please notify our agent, designated under the Digital Millennium Copyright Act (17 U.S.C. §512) (the &ldquo;DMCA&rdquo;) to respond to such concerns, as follows:
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    DashBoardHosting, LLC, 4613 N University Drive #239, Coral Springs, FL 33067. Your notice must comply with the DMCA. Upon receipt of a proper notice, we will respond and proceed in accordance with the DMCA.
                  </p>
                </div>

                {/* Section 17 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">17. Additional Terms for Certain Facilities or Sites</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may offer certain programs or facilities on our Website that are subject to additional or different terms and conditions. We will notify you if the program or facility you are using on the Website is subject to terms and conditions that differ from these Terms, and you may decline to participate in such programs or facilities if you do not agree with the differing terms and conditions.
                  </p>
                </div>

                {/* Section 18 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">18. Modifications to these Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify, in our sole discretion, these Terms. If we modify these Terms, any such modifications will take effect proactively, upon your subsequent access to the Website.
                  </p>
                </div>

                {/* Section 19 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">19. Assignment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall not be assignable by you, either in whole or in part. DashBoardHosting reserves the right to assign its rights and obligations under these Terms.
                  </p>
                </div>

                {/* Section 20 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">20. General</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed in all respects by the laws of Florida without giving effect to its conflicts of law provisions. Both parties submit to the personal jurisdiction of, and venue in, the state and federal courts in Florida, in the judicial district that includes Broward County. The parties further agree that any cause of action arising under these Terms shall exclusively be brought in such courts. If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced. The waiver by DashBoardHosting of a breach of any provision of these Terms will not operate or be interpreted as a waiver of any other or subsequent breach. Headings are for reference purposes only and in no way define, limit, construe, or describe the scope or extent of such section. DashBoardHosting&apos;s failure to act with respect to a breach by you or others does not waive its right to act with respect to subsequent or similar breaches. The facilities of DashBoardHosting and our Website are available only where permitted by law. By using our Site, you warrant that the laws of your particular jurisdiction do not prohibit your activities or your use of our Site. The parties waive all rights to trial by jury in any action or proceeding instituted in connection with these Terms. This agreement and the terms and conditions contained herein set forth the entire understanding and agreement between DashBoardHosting and you with respect to the subject matter hereof and supersede any prior or contemporaneous understanding, whether written or oral.
                  </p>
                </div>

                {/* Section 21 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">21. Duration of Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You will continue to enjoy your rights and to owe obligations under these Terms until (i) you cease your use of the Facilities, or (ii) your password is revoked or suspended for misconduct, as set out in Section 9.3 (Revocation or Suspension of Use Privileges).
                  </p>
                </div>

                {/* Section 22 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">22. Duration of Terms; Survival</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The following provisions shall survive the termination of these Terms and shall apply indefinitely:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground pl-4">
                    <li>Section 6.9 (Termination of Rights; Survival)</li>
                    <li>Section 7.2 (DashBoardHosting Ownership; Reservation of Rights)</li>
                    <li>Section 13 (Warranty Disclaimer)</li>
                    <li>Section 14 (Limitation of Liability)</li>
                    <li>Section 15 (Indemnity)</li>
                    <li>Section 19 (Assignment)</li>
                    <li>Section 20 (General)</li>
                    <li>Section 22 (Duration of Terms; Survival)</li>
                  </ul>
                </div>

                {/* Section 23 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">23. Relationship to Privacy Policy and Other Contracts</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms must be read in conjunction with (i) other agreements into which you may enter concerning our Site, and (ii) our Privacy Policy. The provisions of our Privacy Policy are incorporated herein. To the extent these Terms conflict with the terms of our Privacy Policy, the terms of our Privacy Policy will control. Similarly to the extent these Terms conflict with the terms and conditions of any specific agreement you enter with us, the terms and conditions of such specific agreement will control.
                  </p>
                </div>

                {/* Section 24 - Definitions */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">24. Definitions</h2>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.1.</span> &ldquo;Charter Members&rdquo; has the meaning set out in Section 4.2.4 (Charter Members).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.2.</span> &ldquo;Content&rdquo; shall mean both Textual Content and Visual Content.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.3.</span> &ldquo;DashBoardHosting Content&rdquo; has the meaning set out in Section 7.2 (DashBoardHosting Ownership; Reservation of Rights).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.4.</span> &ldquo;Facilities&rdquo; has the meaning set out in Section 6.1 (Facilities).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.5.</span> &ldquo;Lifetime Member&rdquo; has the meaning set out in Section 4.2.3 (Lifetime Members).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.6.</span> &ldquo;Member&rdquo; shall mean collectively: (i) Free Members, (ii) Paid Members, (iii) Lifetime Members; and (iv) VIP Members, or any combination of (i)-(iv) as the context permits.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.7.</span> &ldquo;Paid Member&rdquo; has the meaning set out in Section 4.2.2 (Paid Members).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.8.</span> &ldquo;Party Information&rdquo; has the meaning set out in Section 4.2.5 (VIP Members).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.9.</span> &ldquo;Personally Identifiable Information&rdquo; has the meaning set out in the Privacy Policy.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.10.</span> &ldquo;Privacy Controls&rdquo; shall mean the options that Members have to protect the information that they provide to the Website. For a detailed discussion of your Privacy Controls, please refer to Section 6.2 (Privacy, Your Profile, and Privacy Controls).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.11.</span> &ldquo;Profile&rdquo; has the meaning set out in Section 3.1 (Facilities for Our Members).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.12.</span> &ldquo;Registration&rdquo; shall mean the process by which a user of our Site becomes a Member. For a detailed explanation of this process, please see Section 4 (Registration Process; Membership Types).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.13.</span> &ldquo;Site Visitor&rdquo; has the meaning set out in Section 4.3 (Site Visitors).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.14.</span> &ldquo;Textual Content&rdquo; shall mean and include: (i) text based information that is posted on a Member Profile, (ii) text based information regarding Party Information, (iii) forum postings, (iv) email sent from Members of our Site to other Members, (v) instant messages sent between Members, (vi) any story submissions, (vii) statements made while participating in a chat room; and (viii) any feedback about our Site and Facilities.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.15.</span> &ldquo;VIP Member&rdquo; has the meaning set out in Section 4.2.5 (VIP Members).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">24.16.</span> &ldquo;Visual Content&rdquo; shall mean: (i) photographs, (ii) visual depictions; and (iii) videos; that are posted on our site.
                    </p>
                  </div>
                </div>

                {/* Section 25 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">25. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions, please contact us via certified mail at:
                  </p>
                  <div className="rounded-xl border border-primary/40 bg-primary/5 p-6">
                    <p className="text-foreground font-semibold">
                      DashBoardHosting, LLC<br />
                      4613 N University Drive #239<br />
                      Coral Springs, FL 33067
                    </p>
                  </div>
                </div>

                {/* Section 26 */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">26. Effective Date</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The effective date of these Terms is <span className="font-semibold text-foreground">{currentDate}</span>.
                  </p>
                </div>

                {/* Legal Disclaimer */}
                <div className="rounded-xl border border-border bg-card/30 p-6 md:p-8 mt-12">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    This site does not contain sexually explicit images as defined in 18 U.S.C. 2256. Accordingly, neither this site nor the contents contained herein are covered by the record-keeping provisions of 18 USC 2257(a)-(c).
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span className="font-semibold">Disclaimer:</span> This website contains adult material. You must be over 18 to enter or 21 where applicable by law. All Members are over 18 years of age.
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
