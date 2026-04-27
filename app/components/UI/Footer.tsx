export default function Footer() {
  return (
    <footer className="bg-navy pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-outfit text-xs tracking-widest text-offWhite/60 uppercase">
          <div className="space-y-4">
            <h4 className="text-gold font-bold">Services</h4>
            <p>University Placement</p>
            <p>Visa Consultation</p>
            <p>SOP Writing</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-gold font-bold">Quick Links</h4>
            <p>About Us</p>
            <p>Our Universities</p>
            <p>Success Stories</p>
          </div>
          <div className="col-span-2 text-right">
            <h4 className="text-white text-xl font-cormorant italic tracking-normal normal-case mb-4">"New Zealand's Education Gateway · Est. 2018"</h4>
            <p>Beyond Borders NZ. All Rights Reserved 2026.</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <h2 className="text-[12vw] font-cormorant font-bold text-white/5 whitespace-nowrap leading-none select-none text-center">
          BEYOND BORDERS BEYOND LIMITS
        </h2>
      </div>
    </footer>
  );
}
