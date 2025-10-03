'use client';

import { motion, Variants } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.0, 0.0, 0.2, 1] as any,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
      className=""
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20">
        {/* Legal Disclaimers */}
        <div className="space-y-4 mb-6">
          <p className="text-muted-foreground text-sm leading-relaxed">
            This site does not contain sexually explicit images as defined in 18 U.S.C. 2256. Accordingly, neither this site nor the contents contained herein are covered by the record-keeping provisions of 18 USC 2257(a)-(c).
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Disclaimer: This website contains adult material. You must be over 18 to enter or 21 where applicable by law. All Members are over 18 years of age.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-6">
          <p className="text-sm">
            <a
              href="/terms-and-conditions"
              className="text-muted-foreground hover:text-foreground underline transition-colors duration-200"
            >
              Terms of Use
            </a>
            <span className="text-muted-foreground mx-2">|</span>
            <a
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground underline transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-muted-foreground mx-2">|</span>
            <a
              href="/fosta-compliance"
              className="text-muted-foreground hover:text-foreground underline transition-colors duration-200"
            >
              FOSTA Compliance Policy
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="space-y-1">
          <p className="text-muted-foreground text-sm">
            Copyright © 2001-{currentYear}
          </p>
          <p className="text-muted-foreground text-sm">
            DashBoardHosting, LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
