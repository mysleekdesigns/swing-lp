'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import { SwingLogo } from '@/components/ui/SwingLogo';
import { Starfield } from '@/components/ui/Starfield';

export default function FostaCompliancePage() {
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
                  FOSTA Compliance Policy
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Our commitment to compliance with federal regulations
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
                {/* Section I */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">I. Policy Statement</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dashboard Hosting, LLC is committed to compliance with FOSTA and other applicable U.S. laws, focusing on strict adherence to their Terms and Conditions.
                  </p>
                </div>

                {/* Section II */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">II. Reason for Policy/Purpose</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This policy establishes management systems and controls for FOSTA compliance. The company provides SwingLifeStyle, an online social network allowing users to create profiles, contribute to forums, and engage in group messaging.
                  </p>
                </div>

                {/* Section III */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">III. Allow States and Victims to Fight Online Sex Trafficking Act (FOSTA)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    FOSTA amends the Communications Act of 1934 to allow enforcement of federal and state laws related to sexual exploitation and sex trafficking against interactive computer service providers and users.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    The company will take measures to deter users from:
                  </p>
                  <div className="space-y-2 pl-4 border-l-2 border-primary/40">
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">1.</span> Promoting or facilitating prostitution
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">2.</span> Facilitating traffickers in advertising unlawful sex acts
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">3.</span> Potentially violating FOSTA
                    </p>
                  </div>
                </div>

                {/* Section IV */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">IV. Administration of this Policy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    A Chief Compliance Officer (CCO) will:
                  </p>
                  <div className="space-y-2 pl-4 border-l-2 border-primary/40">
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">&bull;</span> Oversee policy administration
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">&bull;</span> Establish procedures for detecting FOSTA violations
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">&bull;</span> Coordinate investigations of potential violations
                    </p>
                  </div>
                </div>

                {/* Section V */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">V. Implement a Reporting System</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    The company will create:
                  </p>
                  <div className="space-y-2 pl-4 border-l-2 border-primary/40">
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">&bull;</span> An email account
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">&bull;</span> A telephone number
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    For users and employees to report potential FOSTA violations.
                  </p>
                </div>

                {/* Section VI */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">VI. Audits &amp; Investigations</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    The company may audit:
                  </p>
                  <div className="space-y-2 pl-4 border-l-2 border-primary/40 mb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">&bull;</span> User profiles
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">&bull;</span> User communications
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">&bull;</span> Site content
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Audits can be conducted for any reason. If a potential violation is discovered, the company may:
                  </p>
                  <div className="space-y-2 pl-4 border-l-2 border-primary/40 mb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">&bull;</span> Terminate or suspend user accounts
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">&bull;</span> Report violations to law enforcement
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    The CCO makes final decisions on FOSTA violation determinations.
                  </p>
                </div>

                {/* Effective Date */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Effective Date</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The effective date of this FOSTA Compliance Policy is <span className="font-semibold text-foreground">{currentDate}</span>.
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
