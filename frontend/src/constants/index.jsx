import {
  LayoutDashboard,
  MailCheck,
  CalendarCheck,
  Users,
  TrendingUp,
  Rocket
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", to: "/#home" },
  { label: "Features", to: "/#features" },
  { label: "Pricing", to: "/#pricing" },
  { label: "Testimonials", to: "/#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <LayoutDashboard />,
    text: "High Converting Landing Page",
    description:
      "A conversion-optimized landing page designed to grab attention, communicate value, and push visitors toward taking action."
  },
  {
    icon: <MailCheck />,
    text: "Automated Follow-Up System",
    description:
      "Automated email sequences that follow up with leads, handle objections, and increase show-up and close rates."
  },
  {
    icon: <CalendarCheck />,
    text: "Call Booking & Calendar Integration",
    description:
      "A seamless booking system that lets prospects schedule calls instantly — no back-and-forth required."
  },
  {
    icon: <Users />,
    text: "Lead Management Dashboard",
    description:
      "Easily track leads, booked calls, and conversions from one simple dashboard."
  },
  {
    icon: <TrendingUp />,
    text: "Conversion Optimization",
    description:
      "We continuously improve funnel performance by optimizing copy, layout, and user flow to increase conversions."
  },
  {
    icon: <Rocket />,
    text: "Scalable & Ad-Ready System",
    description:
      "Built to work perfectly with paid ads or organic traffic — ready to scale when your business grows."
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "30k",
    features: [
      "High-converting landing page",
      "Lead capture form",
      "Basic funnel copy",
      "Call booking system",
      "Mobile-optimized design",
      "Setup & launch support"
    ],
  },
  {
    title: "Pro",
    price: "40k+20k",
    features: [
      "Everything in Starter",
      "Automated email follow-ups",
      "Lead qualification system",
      "Call booking + reminders",
      "Basic analytics tracking",
      "Monthly funnel maintenance"
    ],
  },
  {
    title: "Enterprise",
    price: "50k+20k",
    features: [
      "Everything in Growth Funnel",
      "Advanced lead qualification",
      "Conversion optimization",
      "Funnel analytics dashboard",
      "Priority support",
      "Monthly performance improvements"
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
