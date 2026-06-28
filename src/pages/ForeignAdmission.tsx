import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, Send, CheckCircle2, Building2, Phone, Mail, User, Globe, Loader2, Download } from "lucide-react";
import { inquiriesApi } from "@/lib/api";

const PROGRAMMES = [
  "B.B.A",
  "B.B.A (Information Technology Management)",
  "B.B.A (Business Analytics)",
  "B.B.A (Digital Marketing & Artificial Intelligence)",
  "B.C.A",
  "B.Com",
  "M.B.A (Dual Specialization)",
];

export default function ForeignAdmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    country: "",
    program: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numbersOnly = value.replace(/\D/g, '');
      if (numbersOnly.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: numbersOnly }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.phone.length !== 10) {
      alert("WhatsApp number must be exactly 10 digits.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await inquiriesApi.submit({
        type: "Foreign_Admission",
        ...formData,
        city: formData.country, // Store country in city column for this type
      });
      if (response.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to request brochure. Please try again.");
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
            <span className="text-white">Foreign Students</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Admission Brochure for Foreign Students
          </h1>
          <p className="text-white/80 max-w-2xl text-lg">
            Request an information package tailored for international applicants.
          </p>
        </div>
      </div>

      <div className="section-container py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Information */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Global Reach, Local Excellence</h2>
              <p className="text-muted leading-relaxed">
                SEMCOM proudly welcomes students from across the globe. We provide a stimulating environment that nurtures diverse perspectives and global networking. Our curriculum is designed to meet international standards and prepare you for the global marketplace.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Why choose SEMCOM?</h3>
              <ul className="space-y-3">
                {[
                  "Globally recognized curriculum",
                  "Dedicated support for international students",
                  "State-of-the-art campus facilities",
                  "Excellent industry placements",
                  "Vibrant multi-cultural community"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 size={18} className="text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary text-white p-6 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">Need Immediate Assistance?</h3>
              <p className="text-sm text-white/80 mb-4">Contact our international student coordinator.</p>
              <div className="space-y-2 text-sm font-medium">
                <a href="mailto:international@semcom.ac.in" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={16} /> international@semcom.ac.in
                </a>
                <a href="tel:+912692235624" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={16} /> +91 2692 235624
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-card border border-border p-6 sm:p-10 sticky top-24">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary">Request Brochure</h2>
                <p className="text-sm text-muted mt-2">Submit your details to receive our comprehensive guide for international applicants via email.</p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/10 text-slate-800 p-8 rounded-2xl border border-accent/30 text-center"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-border">
                    <Download size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Request Submitted!</h3>
                  <p className="text-slate-600">The brochure and admission details will be sent to your email address shortly.</p>
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ email: "", name: "", phone: "", country: "", program: "" });
                    }}
                    className="mt-6 text-sm font-bold text-accent hover:text-accent/80 underline"
                  >
                    Submit another request
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
                      placeholder="e.g. name@domain.com"
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text flex items-center gap-2">
                      <User size={16} className="text-muted" />
                      Full Name <span className="text-red-500">*</span>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text flex items-center gap-2">
                        <Phone size={16} className="text-muted" />
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit WhatsApp number"
                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text flex items-center gap-2">
                        <Globe size={16} className="text-muted" />
                        Country of Origin <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      />
                    </div>
                  </div>

                  {/* Programme */}
                  <div className="space-y-3 pt-2">
                    <label className="text-sm font-semibold text-text flex items-center gap-2 mb-3">
                      <Building2 size={16} className="text-muted" />
                      Program of Interest <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                          <span className="text-[11px] font-medium leading-tight">{prog}</span>
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
                        Requesting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Request Brochure
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
