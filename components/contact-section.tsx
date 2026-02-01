"use client";

import React from "react"

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Mail, Phone, Github, Linkedin, MapPin, Send, CheckCircle, Copy, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { emailAddress, githubUrl, linkedinUrl, phoneNumber } from "@/lib/profile";

const CONTACT_EMAIL = emailAddress;
const CONTACT_PHONE = phoneNumber;
const WHATSAPP_MESSAGE = "Hi Susanta! I came across your portfolio and would love to discuss a potential opportunity or collaboration. Looking forward to connecting with you!";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`,
    action: "Open Gmail",
    external: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: phoneNumber,
    href: `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    action: "Chat Now",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: githubUrl.split("/").pop(),
    href: githubUrl,
    action: "View profile",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Susanta ku sahoo",
    href: linkedinUrl,
    action: "Connect",
    external: true,
  },
];

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [copied, setCopied] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const composedMessage = `Hi Susanta,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`;
  
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(composedMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("success");
    setShowSuccess(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = CONTACT_EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSendAnother = () => {
    setFormState("idle");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setShowSuccess(false);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute -left-32 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute -right-32 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div ref={ref} className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div
          className={cn(
            "flex items-center gap-4 mb-6 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            Get in Touch
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
        </div>

        {/* Main content */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {"Let's Build Something "}
            <span className="text-primary">Amazing</span> Together
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply connect with fellow tech enthusiasts."}
          </p>
        </div>

        {/* Location badge */}
        <div
          className={cn(
            "flex justify-center mb-12 transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Bhubaneswar, Odisha, India
            </span>
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              {formState === "idle" ? (
                <>
                  <h4 className="text-xl font-semibold text-foreground mb-6">Send me a message</h4>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project collaboration"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        rows={5}
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-xl gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/40"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Message Ready to Send</h4>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Click below to open Gmail with your message pre-filled, or copy the email address.
                  </p>
                  
                  <div className="w-full p-4 rounded-lg bg-background/50 border border-border/50 mb-6 text-left">
                    <p className="text-xs text-muted-foreground mb-1">To: {CONTACT_EMAIL}</p>
                    <p className="text-xs text-muted-foreground mb-1">Subject: {formData.subject}</p>
                    <p className="text-sm text-foreground/80 whitespace-pre-wrap line-clamp-3">{composedMessage}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button
                      className="flex-1 rounded-xl gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                      asChild
                    >
                      <a href={gmailLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Open in Gmail
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 rounded-xl gap-2 border-border/50 hover:bg-secondary/50 bg-transparent"
                      onClick={handleCopyEmail}
                    >
                      <Copy className="w-4 h-4" />
                      {copied ? "Copied!" : "Copy Email"}
                    </Button>
                  </div>
                  
                  <button
                    onClick={handleSendAnother}
                    className="mt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick contact methods */}
          <div
            className={cn(
              "flex flex-col gap-4 transition-all duration-700 delay-400",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h4 className="text-xl font-semibold text-foreground mb-2">Or reach out directly</h4>
            
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-0.5">{method.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {method.value}
                    </p>
                  </div>
                  <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    {method.action}
                  </span>
                </div>
              </a>
            ))}

            {/* Quick action buttons */}
            <div className="mt-4 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground mb-4">
                Prefer a quick call or email? Click below to connect instantly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                  asChild
                >
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`} target="_blank" rel="noopener noreferrer">
                    <Mail className="w-4 h-4" />
                    Email via Gmail
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full gap-2 border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50 text-green-400 bg-transparent"
                  asChild
                >
                  <a href={`https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
