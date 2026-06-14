"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import GlowButton from "./GlowButton";

interface WaitlistFormProps {
  variant?: "inline" | "full";
  className?: string;
}

export default function WaitlistForm({ variant = "full", className = "" }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "Player",
    country: "",
    interest: "Early Access",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const userTypes = [
    "Player",
    "Developer",
    "Studio",
    "Publisher",
    "Advertiser",
    "Investor",
    "University",
    "Strategic Partner",
  ];

  const interests = [
    "Early Access",
    "Game Updates",
    "Developer Access",
    "Partner Opportunities",
    "Community Updates",
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center p-8 rounded-2xl bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.3)] ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-[rgba(0,230,118,0.2)] flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-[#00E676]" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">You&apos;re on the list!</h3>
        <p className="text-[#A8A8B8]">
          You&apos;re on the NexusWager waitlist. We&apos;ll notify you when early access opens.
        </p>
      </motion.div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="flex-1 px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] focus:shadow-[0_0_15px_rgba(177,0,255,0.15)] transition-all"
        />
        <GlowButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </GlowButton>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Full Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] focus:shadow-[0_0_15px_rgba(177,0,255,0.15)] transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] focus:shadow-[0_0_15px_rgba(177,0,255,0.15)] transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#A8A8B8] mb-2">User Type</label>
          <select
            value={formData.userType}
            onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all appearance-none cursor-pointer"
          >
            {userTypes.map((type) => (
              <option key={type} value={type} className="bg-[#11111A]">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Country</label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all"
            placeholder="Your country"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#A8A8B8] mb-2">Interest</label>
        <select
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-[rgba(17,17,26,0.8)] border border-[rgba(177,0,255,0.2)] text-white focus:outline-none focus:border-[rgba(177,0,255,0.5)] transition-all appearance-none cursor-pointer"
        >
          {interests.map((interest) => (
            <option key={interest} value={interest} className="bg-[#11111A]">
              {interest}
            </option>
          ))}
        </select>
      </div>
      <GlowButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Join Waitlist"
        )}
      </GlowButton>
      <p className="text-xs text-[#6B6B7B] text-center">
        By joining, you agree to receive updates about NexusWager. You can unsubscribe at any time.
      </p>
    </form>
  );
}
