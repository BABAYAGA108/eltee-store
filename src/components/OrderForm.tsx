import React, { useState, useCallback } from "react";
import { STATS } from "../constants";
import { SectionTag } from "./SectionTag";
import { useReveal } from "../hooks";

export const OrderForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const revealRef = useReveal();

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  }, []);

  const fieldClass =
    "w-full bg-white/5 border border-sand/22 text-sand-pale p-3.5 font-body text-sm font-light form-field";
  const labelClass =
    "block font-body text-[0.6rem] tracking-widest uppercase text-sand/60 mb-1.5";

  return (
    <section
      id="order"
      className="order-rings bg-teal-dark py-32 px-20 grid grid-cols-2 gap-16 items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(45deg,rgba(232,201,154,.025)_0,rgba(232,201,154,.025)_1px,transparent_1px,transparent_42px)]" />

      <div className="relative z-10">
        <SectionTag light>Place Your Order</SectionTag>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-sand-pale leading-tight mb-6">
          Ready to Create
          <br />
          Something
          <br />
          <em className="italic text-sand">Extraordinary?</em>
        </h2>
        <p className="font-body text-base leading-relaxed text-sand-pale/55 mb-10">
          Fill in your details and we'll be in touch within 24 hours to discuss
          your vision, measurements, and timeline.
        </p>
        <div className="flex gap-10 flex-wrap">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-body text-[0.62rem] tracking-widest uppercase text-sand/55 mb-1">
                {s.label}
              </div>
              <div className="font-display text-2xl text-sand-pale">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={revealRef}
        className="reveal relative z-10 bg-white/5 border border-sand/18 p-12"
      >
        {submitted ? (
          <div className="text-center py-12">
            <div className="font-display text-3xl text-sand mb-4">
              ✦ Thank You!
            </div>
            <p className="font-body text-base text-sand-pale/70 leading-relaxed">
              We've received your request and will be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="font-display text-2xl text-sand-pale mb-1">
              Request a Service
            </div>
            <div className="font-body text-xs tracking-wide text-sand/50 mb-8">
              We'll respond within 24 hours
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Amara"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Okafor"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className={labelClass}>Phone / WhatsApp</label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+234 800 000 0000"
                className={fieldClass}
              />
            </div>

            <div className="mb-4">
              <label className={labelClass}>Service Type</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${fieldClass} bg-teal-dark`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Custom Garment</option>
                <option>Alteration / Repair</option>
                <option>Fabric Purchase</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label className={labelClass}>Tell us about your project</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your piece, style, occasion, preferred fabric, timeline…"
                className={`${fieldClass} resize-y`}
              />
            </div>

            {/* Sand button styled inline */}
            <a
              href="#"
              onClick={handleSubmit}
              className="inline-block px-8 py-2.5 font-body text-[0.68rem] tracking-[0.22em] uppercase font-semibold no-underline transition-all duration-300 cursor-pointer border-2 border-sand bg-sand text-teal-dark hover:bg-transparent hover:text-sand"
            >
              Send Request ✦
            </a>
          </form>
        )}
      </div>
    </section>
  );
};
