import { IPlan } from "@/types";

import {
    Layers,
    LayoutPanelLeft,
    Banknote,
    HeartHandshake,
    Contact2,
} from "lucide-react";

export const LINKS = [
    { text: "Home", href: "/", icon: Layers },
    { text: "Dashboard", href: "/dashboard", icon: LayoutPanelLeft },
    { text: "Pricing", href: "/pricing", icon: Banknote },
    { text: "Support", href: "/support", icon: HeartHandshake },
    { text: "Contact", href: "/contact", icon: Contact2 },
];

export const PLAN_ITEMS: IPlan[] = [
    {
        planTitle: "Free",
        tagline: "For startups & side projects",
        quota: 1000,
        features: [
            { text: "Unlimited users" },
            { text: "Unlimited branded links" },
            {
                text: "Unlimited custom domains",
            },
            {
                text: "Free SSL certificates",
            },
            {
                text: "Advanced link features",
                footnote:
                    "Password protection, link expiration, device targeting, custom social media cards, etc.",
            },
            {
                text: "Root domain redirect",
                footnote:
                    "Redirect vistors that land on the root of your domain (e.g. yourdomain.com) to a page of your choice.",
                negative: true,
            },
            {
                text: "Custom QR Code Logo",
                negative: true,
            },
            { text: "SSO/SAML", negative: true },
            { text: "Priority support", negative: true },
        ],
        cta: "Start for free",
    },
    {
        planTitle: "Pro",
        tagline: "For larger teams with increased usage",
        quota: 50000,
        features: [
            { text: "Unlimited users" },
            { text: "Unlimited branded links" },
            {
                text: "Unlimited custom domains",
            },
            {
                text: "Free SSL certificates",
            },
            {
                text: "Advanced link features",
                footnote:
                    "Password protection, link expiration, device targeting, custom social media cards, etc.",
            },
            {
                text: "Root domain redirect",
                footnote:
                    "Redirect visitors that land on the root of your domain (e.g. yourdomain.com) to a page of your choice.",
            },
            {
                text: "Custom QR Code Logo",
            },
            { text: "SSO/SAML", negative: true },
            { text: "Priority support", negative: true },
        ],
        cta: "Get started",
    },
    {
        planTitle: "Enterprise",
        tagline: "For businesses with custom needs",
        quota: 500000,
        features: [
            { text: "Unlimited users" },
            { text: "Unlimited branded links" },
            {
                text: "Unlimited custom domains",
            },
            {
                text: "Free SSL certificates",
            },
            {
                text: "Advanced link features",
                footnote:
                    "Password protection, link expiration, device targeting, custom social media cards, etc.",
            },
            {
                text: "Root domain redirect",
                footnote:
                    "Redirect visitors that land on the root of your domain (e.g. yourdomain.com) to a page of your choice.",
            },
            {
                text: "Custom QR Code Logo",
            },
            { text: "SSO/SAML", footnote: "Under development. ETA: Q4 2023" },
            {
                text: "Priority support",
                footnote: "Email & chat support within 24 hours.",
            },
        ],
        cta: "Get started",
    },
];
