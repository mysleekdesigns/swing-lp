'use client';

import { motion } from 'framer-motion';

export function BrandStorySection() {
  return (
    <section id="brand-story" className="relative overflow-hidden py-12 md:py-14 lg:py-16 xl:py-12 2xl:py-16">
      {/* Content Container */}
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid gap-16 md:gap-20 lg:grid-cols-2 lg:gap-24 xl:gap-32 2xl:gap-40">
          {/* Text Content - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-black">
                Alternative Lifestyle Dating Community for the Adventurous
              </span>
            </h2>

            {/* Story Content - more concise */}
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground/90">
                You have known and trusted <a href="https://sls.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors">SLS.com</a> and <a href="https://swinglifestyle.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors">Swinglifestyle.com</a> as your havens, where desires found their home and thrilling possibilities unfolded. Our journey saw us claim <a href="https://sls.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors">SLS.com</a>, a strategic move to provide a more direct whisper to the platform.
              </p>

              <p>
                Now, we proudly announce the culmination of a long-held fantasy: the acquisition of the <a href="https://swing.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors">Swing.com</a> domain. Realized after over two decades of passionate pursuit, <a href="https://swing.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors">Swing.com</a> embodies the ultimate expression of who we are. It is a name that resonates with pure desire - simple, memorable, and powerful. This transition is our promise to craft your most intuitive and accessible online sanctuary yet.
              </p>

              <p>
                This is beyond a simple address change; it is the dawn of a new era, with <a href="https://swing.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors">Swing.com</a> which is the best swingers website boldly stepping forward as the definitive face of pleasure. Prepare for a rush of tantalizing new possibilities and significant advancements that will redefine your online lifestyle journey.
              </p>
            </div>

            {/* Stats Grid - simplified */}
            <div className="grid grid-cols-3 gap-6">
              <div className="rounded-xl border border-primary/40 bg-white p-6 text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>

              <div className="rounded-xl border border-accent/40 bg-white p-6 text-center">
                <div className="text-3xl font-bold text-primary">#1</div>
                <div className="text-sm text-muted-foreground">Worldwide</div>
              </div>

              <div className="rounded-xl border border-secondary/40 bg-white p-6 text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
            </div>
          </motion.div>

          {/* Bento Grid Testimonials - Right Column */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Grid container */}
              <div className="grid grid-cols-2 gap-4">
                {/* Featured Testimonial - Full Width */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="col-span-2"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card backdrop-blur-sm p-8">
                    <div className="space-y-6">
                      {/* Icon */}
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                        <svg
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>

                      {/* Quote */}
                      <blockquote className="space-y-3">
                        <p className="text-xl font-semibold text-foreground">
                          &ldquo;Where desire finds its exquisite new home&rdquo;
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Experience a new era of online connection in our intuitive and accessible sanctuary for the adventurous.
                        </p>
                      </blockquote>

                      {/* Stats */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                        <div className="flex -space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent"
                            />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Millions</span> of members
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 2 - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="col-span-1"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card backdrop-blur-sm p-6 h-full">
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>

                      {/* Quote */}
                      <blockquote className="space-y-2">
                        <p className="text-base font-semibold text-foreground">
                          &ldquo;A community where we feel safe to explore&rdquo;
                        </p>
                        <p className="text-xs text-muted-foreground">
                          The verified profiles and respectful atmosphere make all the difference.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 3 - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="col-span-1"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card backdrop-blur-sm p-6 h-full">
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-accent to-secondary">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </div>

                      {/* Quote */}
                      <blockquote className="space-y-2">
                        <p className="text-base font-semibold text-foreground">
                          &ldquo;Intuitive design meets genuine connections&rdquo;
                        </p>
                        <p className="text-xs text-muted-foreground">
                          The platform makes it effortless to connect with like-minded adventurers.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
