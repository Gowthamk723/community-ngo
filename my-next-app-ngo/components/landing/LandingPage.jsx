"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lightbulb, Users, DollarSign, ShieldCheck, Twitter, Linkedin, Facebook } from "lucide-react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInAnimation = {
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex h-[90vh] min-h-[600px] items-center justify-center text-center overflow-hidden bg-gradient-to-br from-teal-50 via-indigo-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 container mx-auto px-4"
        >
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl inline-block border border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Where Vision Meets</span>
              <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Impactful Action
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-gray-700 font-medium">
              The premier innovation pipeline connecting NGOs with the resources,
              mentors, and funding to build a better future.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/login"
              className="rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out hover:-translate-y-1"
            >
              Start Your Journey
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2 variants={fadeInAnimation} className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              A Platform Built for Impact
            </motion.h2>
            <motion.p variants={fadeInAnimation} className="mt-4 text-lg text-gray-600">
              Unleash potential with tools designed for collaboration and growth.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <motion.div variants={fadeInAnimation} className="flex flex-col items-start rounded-3xl bg-white p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-teal-200 to-indigo-200">
                <Lightbulb className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Innovation Hub</h3>
              <p className="mt-2 text-gray-600">
                Submit and discover groundbreaking ideas aimed at solving critical social challenges.
              </p>
            </motion.div>

            <motion.div variants={fadeInAnimation} className="flex flex-col items-start rounded-3xl bg-white p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-teal-200 to-indigo-200">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Global Collaboration</h3>
              <p className="mt-2 text-gray-600">
                Connect with experts, mentors, and partners to refine and strengthen your projects.
              </p>
            </motion.div>

            <motion.div variants={fadeInAnimation} className="flex flex-col items-start rounded-3xl bg-white p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-teal-200 to-indigo-200">
                <DollarSign className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Strategic Funding</h3>
              <p className="mt-2 text-gray-600">
                Access a network of philanthropists and organizations looking to fund the next wave of social change.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-50 via-indigo-50 to-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Ready to Change the World?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Join a community of innovators and leaders. Your next big idea starts here.
          </p>
          <div className="mt-8">
            <Link
              href="/register"
              className="rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out hover:-translate-y-1"
            >
              Create Your Free Account
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-teal-500" />
              <p className="text-lg font-semibold text-gray-900">NGO FutureProof</p>
            </div>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">Privacy</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col items-center justify-between sm:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} NGO FutureProof. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-5 sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
