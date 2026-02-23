import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { SectionTag } from "./SectionTag";

/* ── brand tokens ──────────────────────────────────────── */
const SAND = "#e8c99a";
const SAND_PALE = "#faf4ea";
const TEAL = "#1a5c52";
const TEAL_DARK = "#133f38";

/* ── types ─────────────────────────────────────────────── */
interface Stat {
  label: string;
  value: string;
}

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  service: string;
  message: string;
}

/* ── static data ────────────────────────────────────────── */
const STATS: Stat[] = [
  { label: "Turnaround Time", value: "7 – 21 Days" },
  { label: "Location", value: "Lagos, Nigeria" },
  { label: "Happy Clients", value: "200+" },
];

/* ── BtnSand ────────────────────────────────────────────── */
const BtnSand: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      type="submit"
      className="font-body cursor-pointer transition-all duration-300 border-2"
      style={{
        background: hov ? "transparent" : SAND,
        color: hov ? SAND : TEAL_DARK,
        borderColor: SAND,
        padding: ".7rem 2rem",
        fontSize: ".68rem",
        letterSpacing: ".22em",
        textTransform: "uppercase",
        fontWeight: 600,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  );
};

/* ── shared field / label class strings ─────────────────── */
const fieldCls =
  "form-field w-full font-body text-[0.85rem] font-light " +
  "py-[0.85rem] px-4 " +
  "bg-white/5 border border-[rgba(232,201,154,0.22)] " +
  "text-[#f2e4cc] outline-none transition-colors duration-300 " +
  "focus:border-[#e8c99a]";

const labelCls =
  "block font-body text-[0.6rem] tracking-[0.22em] uppercase mb-[0.45rem] " +
  "text-[rgba(232,201,154,0.6)]";

/* ── OrderForm ──────────────────────────────────────────── */
export const OrderForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  }, []);

  return (
    <section
      id="order"
      className="
        order-rings relative overflow-hidden
        bg-[#133f38]

        /* spacing — sm → md → lg */
        py-20 px-6
        sm:py-24 sm:px-10
        lg:py-32 lg:px-20

        /* layout — stacked on sm/md, two-col on lg */
        grid grid-cols-1 gap-12
        lg:grid-cols-2 lg:gap-16
        items-center
      "
    >
      {/* ── diagonal texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(45deg,rgba(232,201,154,.025) 0,rgba(232,201,154,.025) 1px,transparent 1px,transparent 42px)",
        }}
      />

      {/* ══ LEFT — copy ══════════════════════════════════════ */}
      <div className="relative z-10">
        <SectionTag light>Place Your Order</SectionTag>

        <h2
          className="
            font-display font-light leading-[1.1] mb-6
            text-[clamp(2.2rem,4vw,3.5rem)]
          "
          style={{ color: SAND_PALE }}
        >
          Ready to Create
          <br />
          Something
          <br />
          <em className="italic" style={{ color: SAND }}>
            Extraordinary?
          </em>
        </h2>

        <p
          className="font-body text-[0.9rem] leading-[1.9] mb-10"
          style={{ color: "rgba(242,228,204,0.55)" }}
        >
          Fill in your details and we'll be in touch within 24 hours to discuss
          your vision, measurements, and timeline.
        </p>

        {/* stats row */}
        <div className="flex flex-wrap gap-8 sm:gap-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className="font-body text-[0.62rem] tracking-[0.2em] uppercase mb-[0.3rem]"
                style={{ color: "rgba(232,201,154,0.55)" }}
              >
                {s.label}
              </div>
              <div
                className="font-display text-[1.3rem]"
                style={{ color: SAND_PALE }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ RIGHT — form card ════════════════════════════════ */}
      <div
        className="
          reveal relative z-10
          bg-white/5 border border-[rgba(232,201,154,0.18)]
          p-8 sm:p-10 lg:p-12
        "
      >
        {submitted ? (
          /* ── thank-you state ── */
          <div className="text-center py-12">
            <div
              className="font-display text-[2rem] mb-4"
              style={{ color: SAND }}
            >
              ✦ Thank You!
            </div>
            <p
              className="font-body text-[0.9rem] leading-[1.8]"
              style={{ color: "rgba(242,228,204,0.7)" }}
            >
              We've received your request and will be in touch within 24 hours.
            </p>
          </div>
        ) : (
          /* ── form ── */
          <form onSubmit={handleSubmit}>
            {/* form heading */}
            <div
              className="font-display text-[1.4rem] mb-[0.4rem]"
              style={{ color: SAND_PALE }}
            >
              Request a Service
            </div>
            <div
              className="font-body text-[0.72rem] tracking-widest mb-8"
              style={{ color: "rgba(232,201,154,0.5)" }}
            >
              We'll respond within 24 hours
            </div>

            {/* name row — stacked on sm, 2-col on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelCls}>First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Amara"
                  className={fieldCls}
                />
              </div>
              <div>
                <label className={labelCls}>Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Okafor"
                  className={fieldCls}
                />
              </div>
            </div>

            {/* phone */}
            <div className="mb-4">
              <label className={labelCls}>Phone / WhatsApp</label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+234 800 000 0000"
                className={fieldCls}
              />
            </div>

            {/* service select */}
            <div className="mb-4">
              <label className={labelCls}>Service Type</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={fieldCls}
                style={{ background: TEAL_DARK }}
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

            {/* message */}
            <div className="mb-6">
              <label className={labelCls}>Tell us about your project</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your piece, style, occasion, preferred fabric, timeline…"
                className={`${fieldCls} resize-y`}
              />
            </div>

            <BtnSand>Send Request ✦</BtnSand>
          </form>
        )}
      </div>
    </section>
  );
};
