"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react"

interface FormErrors {
  email?: string
}

export function ForgotPasswordCard() {
  const [email, setEmail] = React.useState("")
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [focusedField, setFocusedField] = React.useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log("Password reset requested for:", email)
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="w-full max-w-lg"
      >
        {/* Success State Card */}
        <div className="relative overflow-hidden rounded-3xl bg-primary/5 backdrop-blur-xl border border-primary/20 shadow-2xl">
          {/* Card Content */}
          <div className="relative p-6 sm:p-8 md:p-10">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="rounded-full bg-primary/20 p-4">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
            </motion.div>

            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-foreground sm:text-3xl"
              >
                Check Your Email
              </motion.h2>
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-muted-foreground mt-3 leading-relaxed"
              >
                We&apos;ve sent a password reset link to
              </motion.p>
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm font-semibold text-primary mt-1"
              >
                {email}
              </motion.p>
            </div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-muted/50 rounded-xl p-4 mb-6"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                Click the link in the email to reset your password. If you don&apos;t see the email, check your spam folder.
              </p>
            </motion.div>

            {/* Back to Login Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="relative z-10">Back to Login</span>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Resend Email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-muted-foreground">
                Didn&apos;t receive the email?{" "}
                <button
                  onClick={() => {
                    setIsSuccess(false)
                    setEmail("")
                  }}
                  className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                >
                  Try again
                </button>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="w-full max-w-lg"
    >
      {/* Glass Morphism Card */}
      <div className="relative overflow-hidden rounded-3xl bg-primary/5 backdrop-blur-xl border border-primary/20 shadow-2xl">
        {/* Card Content */}
        <div className="relative p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-foreground sm:text-3xl"
            >
              Forgot Password?
            </motion.h2>
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-muted-foreground mt-2 leading-relaxed"
            >
              No worries! Enter your email address and we&apos;ll send you a link to reset your password.
            </motion.p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Email Field */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Label htmlFor="email" className="text-foreground mb-2 block">
                Email Address
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <motion.div
                  animate={{
                    scale: focusedField === "email" ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errors.email) {
                        setErrors(prev => ({ ...prev, email: undefined }))
                      }
                    }}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`pl-11 bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-ring transition-all duration-300 ${
                      errors.email ? "border-destructive" : ""
                    }`}
                  />
                </motion.div>
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive text-xs mt-1.5 ml-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending Reset Link..." : "Send Reset Link"}
                </span>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </form>

          {/* Back to Login Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center"
          >
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
