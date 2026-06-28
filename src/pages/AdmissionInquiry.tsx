import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, Send, CheckCircle2, Building2, Phone, Mail, User, MapPin, Loader2 } from "lucide-react";
import { inquiriesApi } from "@/lib/api";

const PROGRAMMES = [
  "B.B.A",
  "B.B.A (Information Technology Management)",
  "B.B.A-Business Analytics",
  "B.B.A-Digital Marketing",
  "B.Com",
  "B.C.A",
  "M.B.A (Dual Specialization)",
];

export default function AdmissionInquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    city: "",
    program: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormData(prev => ({ ...prev, [name]: value.replace(/\D/g, '') }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (formData.phone.length < 10) {
      alert("Mobile number must be at least 10 digits.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await inquiriesApi.submit({
        type: "UG_PG_Admission",
        ...formData
      });
      if (response.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen pt-16">
      {/* Banner */}
      <div className="bg-primary py-12 border-b border-white/10">
        <div className="section-container">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link>
            <ChevronRight size={14} />
            <span className="text-white">UG & PG Inquiry</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            SEMCOM Admission Inquiry Form
          </h1>
          <p className="text-white/80 max-w-2xl text-lg">
            UG AND PG COURSES 2026-27
          </p>
        </div>
      </div>

      <div className="section-container py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Information */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">About SEMCOM</h2>
              <p className="text-muted leading-relaxed">
                SEMCOM, a college of The Charutar Vidya Mandal (CVM) University, was established in the year 1997 by Charutar Vidya Mandal, with a vision of social engineering, innovation, and value inculcation through education.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-3">Our Vision & Mission</h3>
              <div className="space-y-4">
                <div className="bg-surface p-5 rounded-xl border border-border">
                  <h4 className="font-bold text-secondary mb-1">Our Vision</h4>
                  <p className="text-sm text-muted">'To contribute to the societal enrichment through quality education, innovation and value augmentation.'</p>
                </div>
                <div className="bg-surface p-5 rounded-xl border border-border">
                  <h4 className="font-bold text-secondary mb-1">Our Mission</h4>
                  <p className="text-sm text-muted">'To build up a competitive edge amongst the students by fostering a stimulating learning environment.'</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Programs Offered</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-text mb-2 border-b border-border pb-2">U.G Programs</h4>
                  <ul className="list-disc pl-5 text-sm text-muted space-y-1.5">
                    <li>B.B.A (Information Technology Management)</li>
                    <li>B.B.A</li>
                    <li>B.B.A-Business Analytics</li>
                    <li>B.B.A-Digital Marketing and AI</li>
                    <li>B.C.A</li>
                    <li>B.Com</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-2 border-b border-border pb-2">P.G Programs</h4>
                  <p className="text-sm font-medium text-text mb-2">Master of Business Administration (Dual Specialization)</p>
                  <ul className="list-disc pl-5 text-sm text-muted space-y-1.5">
                    <li>Fintech and Logistics, Supply Chain Management</li>
                    <li>Mkttech and Operation Management</li>
                    <li>HR Analytics and Entrepreneurship & Start ups</li>
                    <li>Business Analytics and Data Science</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-card border border-border p-6 sm:p-10 sticky top-24">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary">Inquiry Form</h2>
                <p className="text-sm text-muted mt-2">Fill out the details below and our admission counselors will contact you shortly.</p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 text-green-800 p-8 rounded-2xl border border-green-200 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Inquiry Submitted Successfully!</h3>
                  <p className="text-green-700">Thank you for your interest in SEMCOM. Our team will get in touch with you soon.</p>
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ email: "", name: "", phone: "", city: "", program: "" });
                    }}
                    className="mt-6 text-sm font-bold text-green-700 hover:text-green-900 underline"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text flex items-center gap-2">
                      <Mail size={16} className="text-muted" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. harshil2937patel@gmail.com"
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text flex items-center gap-2">
                      <User size={16} className="text-muted" />
                      Student Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text flex items-center gap-2">
                      <Phone size={16} className="text-muted" />
                      Mobile No. (WhatsApp Number) <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit number"
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text flex items-center gap-2">
                      <MapPin size={16} className="text-muted" />
                      City <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                  </div>

                  {/* Programme */}
                  <div className="space-y-3 pt-2">
                    <label className="text-sm font-semibold text-text flex items-center gap-2 mb-3">
                      <Building2 size={16} className="text-muted" />
                      Select Programme <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      {PROGRAMMES.map((prog) => (
                        <label 
                          key={prog} 
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                            formData.program === prog 
                              ? "border-secondary bg-secondary/5 text-secondary" 
                              : "border-border bg-surface hover:border-secondary/30 text-text"
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            formData.program === prog ? "border-secondary" : "border-muted"
                          }`}>
                            {formData.program === prog && <div className="w-2 h-2 bg-secondary rounded-full" />}
                          </div>
                          <span className="text-sm font-medium">{prog}</span>
                          <input 
                            type="radio" 
                            name="program" 
                            value={prog}
                            checked={formData.program === prog}
                            onChange={handleChange}
                            className="hidden" 
                            required
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#FACC15] hover:bg-[#EAB308] text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 py-3.5 text-sm shadow-xl transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-muted mt-4">
                    By submitting this form, you agree to allow SEMCOM to contact you regarding admissions.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
