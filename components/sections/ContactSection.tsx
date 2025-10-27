"use client";
import React, { useState } from "react";
import HeadingText from "../HeadingText";
import { CustomInput } from "../custom-input";
import { CustomCard } from "../custom-card";
import { CustomTextarea } from "../custom-textarea";
import { CustomButton } from "../custom-button";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";
import { HiOutlinePhone } from "react-icons/hi2";
import { IconType } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface connectDataProps {
  title: string;
  link: string;
  label: string;
  icon: IconType;
}

const connectData: connectDataProps[] = [
  {
    title: "Phone Number",
    label: "085 825 596",
    link: "tel:+85585825596",
    icon: HiOutlinePhone,
  },
  {
    title: "Email",
    label: "cheaoudompanha21@gmail.com",
    link: "mailto:cheaoudompanha21@gmail.com",
    icon: HiOutlineMail,
  },
  {
    title: "Telegram",
    label: "OudomPanha_Chea",
    link: "https://t.me/OudomPanha_Chea",
    icon: FaTelegram,
  },
];

const ContactSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default immediately

    if (!fullName || !email || !message) {
      toast.warning("Please fill in all required fields!");
      return;
    }

    const data = { fullName, email, message, phoneNumber };

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Your message has been sent!");
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setPhoneNumber("");
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "20% 80%",
        end: "40% 20%",
        scrub: 2,
      },
    });

    tl.from(
      "#contact #heading, #contact #description, #contact #contact-form, #contact #contact-data", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });

  return (
    <section id="contact" className="relative bg-white overflow-hidden">
      <div className="container-customized py-18">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <HeadingText
            heading={
              <>
                <span className="text-secondary">Contact</span> {"Me Via"}
              </>
            }
            description="Have a question or a project in mind? Let’s chat, I’d love to help make it happen!"
          />

          {/* Contact Form */}
          <div id="contact-form" className="pt-18">
            <CustomCard>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <CustomInput
                    label="Your Name"
                    name="name"
                    placeholder="Chea Oudompanha"
                    disabled={isSubmitting}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <CustomInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="oudompanha@example.com"
                    disabled={isSubmitting}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <CustomInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="(+885) 000-0000"
                    disabled={isSubmitting}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <CustomInput
                    label="Subject"
                    name="subject"
                    placeholder="How can I help?"
                    disabled={isSubmitting}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <CustomTextarea
                  label="Your Message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={6}
                  disabled={isSubmitting}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <div className="text-center">
                  <CustomButton
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={<FiSend className="w-5 h-5" />}
                  >
                    Send Message
                  </CustomButton>
                </div>
              </form>
            </CustomCard>
          </div>

          <div id="contact-data" className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center mt-18">
            {connectData.map((data, i) => (
              <Link
                href={data.link}
                target="_blank"
                key={i}
                className="text-primary group hover:scale-103 transition-all px-3 gap-2 py-6 flex flex-col items-center justify-center border border-primary rounded-xl w-[80%]"
              >
                <div className="border group-hover:border-secondary transition-all p-1.5 rounded-lg">
                  <data.icon size={28} className="group-hover:text-secondary transition-all" />
                </div>
                <h3 className="text-xl font-bold">{data.title}</h3>
                <p className="text-sm">{data.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
