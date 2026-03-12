"use client";

import { useState, ChangeEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="px-6 py-24 scroll-mt-32 sm:px-8 lg:px-12"
      id="contact"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center">
        <div className="w-full rounded-3xl border border-white/10 bg-black/40 p-8 shadow-[0_0_40px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-10">
          <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s talk
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base">
            Share your idea or question. I&apos;ll get back to you soon.
          </p>

          <form
            action="https://formsubmit.co/6c1ae2dfdbb4d118510f1b0a5b39c298"
            method="POST"
            className="mt-10 flex flex-col gap-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New MusicSchool Message" />

            <label className="flex flex-col gap-3">
              <span className="text-sm font-medium text-neutral-200">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-neutral-950/90 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                placeholder="Ex. John Doe"
              />
            </label>

            <label className="flex flex-col gap-3">
              <span className="text-sm font-medium text-neutral-200">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-neutral-950/90 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                placeholder="Ex. johndoe@gmail.com"
              />
            </label>

            <label className="flex flex-col gap-3">
              <span className="text-sm font-medium text-neutral-200">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="min-h-36 w-full resize-y rounded-2xl border border-white/10 bg-neutral-950/90 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                placeholder="Share your thoughts..."
              />
            </label>

            <button
              className="inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 sm:w-fit"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
