import { motion } from 'motion/react';
import { 
  Download, 
  Image as ImageIcon, 
  FileCheck, 
  ChevronRight, 
  ShieldCheck, 
  Info,
  ExternalLink,
  Camera,
  Layers,
  Sparkles
} from 'lucide-react';

const mediaAssets = [
  {
    title: "CVMU Official Logo (Horizontal)",
    specs: "333 x 121 px | JPEG | 16 KB",
    desc: "Primary horizontal alignment for web and document headers.",
    preview: "CVM University Logo",
    type: "JPEG"
  },
  {
    title: "CVMU Official Logo (Stacked)",
    specs: "1000 x 1138 px | JPEG | 102 KB",
    desc: "Vertical/Stacked alignment optimized for social media and square layouts.",
    preview: "CVM University Stacked",
    type: "JPEG"
  },
  {
    title: "SEMCOM Logo (Primary Mix)",
    specs: "2361 x 2361 px | JPEG | 1.13 MB",
    desc: "High-resolution primary logo for print and large-scale displays.",
    preview: "SEMCOM Primary",
    type: "JPEG"
  },
  {
    title: "SEMCOM Logo (Vertical Stacked)",
    specs: "2361 x 2361 px | JPEG | 1.14 MB",
    desc: "High-resolution vertical variant for official banners and posters.",
    preview: "SEMCOM Stacked",
    type: "JPEG"
  },
  {
    title: "SEMCOM Transparent PNG (Horizontal)",
    specs: "2361 x 2361 px | PNG | 103 KB",
    desc: "Transparent background variant for overlaying on complex backgrounds.",
    preview: "SEMCOM PNG Horizontal",
    type: "PNG"
  },
  {
    title: "SEMCOM Transparent PNG (Stacked)",
    specs: "2361 x 2361 px | PNG | 108 KB",
    desc: "Secondary transparent variant for versatile digital applications.",
    preview: "SEMCOM PNG Stacked",
    type: "PNG"
  }
];

export default function MediaKit() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-32 px-6 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full border border-white/20 mb-8 backdrop-blur-md">
              <Sparkles size={16} className="text-secondary" />
              <span className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Brand Assets portal</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white italic mb-8 leading-tight">
              SEMCOM <span className="text-secondary underline decoration-4 underline-offset-8">Media Kit</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed border-t border-white/10 pt-8">
              Access official institutional logos and branding assets for academic publications, media reports, and collaborative projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Assets Grid */}
      <section className="py-24 px-6 relative -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaAssets.map((asset, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-[4rem] p-10 shadow-sm hover:shadow-2xl transition-all group flex flex-col border border-gray-100"
              >
                <div className="bg-gray-50 aspect-square rounded-[3rem] mb-8 flex items-center justify-center relative overflow-hidden group-hover:bg-primary transition-colors duration-500">
                  <ImageIcon size={64} className="text-gray-200 group-hover:text-white/20 absolute z-0" />
                  <div className="relative z-10 text-center p-8">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 group-hover:text-white/40 mb-2">Asset Preview</div>
                    <div className="text-xl font-serif font-black italic text-primary group-hover:text-white transition-colors">{asset.preview}</div>
                  </div>
                  {/* File Type Badge */}
                  <div className="absolute top-8 right-8 bg-white px-4 py-1.5 rounded-full text-[10px] font-black text-primary border border-gray-100 shadow-sm group-hover:bg-secondary group-hover:border-secondary transition-colors">
                    {asset.type}
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <h3 className="text-2xl font-serif font-black text-primary italic leading-tight group-hover:text-secondary transition-colors">
                    {asset.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {asset.desc}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                    {asset.specs}
                  </div>
                  <button className="p-4 bg-secondary text-primary rounded-2xl hover:scale-110 transition-transform shadow-lg shadow-secondary/20">
                    <Download size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Usage Protocol</span>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-primary italic leading-tight">Brand <span className="text-secondary underline decoration-4 underline-offset-8">Compliance</span></h2>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, text: "Do not alter the aspect ratio or colors of the logo." },
                { icon: Layers, text: "Maintain a minimum 'clear space' around the logo." },
                { icon: FileCheck, text: "Use vector formats or PNGs for digital overlays." },
                { icon: Info, text: "Contact the PR cell for major external publications." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center group">
                  <div className="p-3 bg-white rounded-xl text-secondary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon size={20} />
                  </div>
                  <p className="text-gray-600 font-medium italic">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-6 pt-4">
              <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary/90 transition-all shadow-xl flex items-center gap-3">
                Full Brand Guide <ExternalLink size={14} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[500px] border-8 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Brand meeting"
              />
            </div>
            {/* Visual Callout */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-10 -left-10 bg-secondary p-12 rounded-[3rem] shadow-2xl flex flex-col items-center border-4 border-white"
            >
              <Camera size={48} className="text-primary mb-4" />
              <div className="text-2xl font-black text-primary italic">PR Cell</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">Official Support</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
