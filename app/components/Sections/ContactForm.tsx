"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(2, "Country is required"),
  course: z.string().min(2, "Course is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Thank you! Your inquiry has been sent.");
  };

  return (
    <section id="contact" className="py-24 bg-navyMid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-cormorant text-5xl text-white mb-6 uppercase tracking-tightest">Ready to Cross Borders?</h2>
          <p className="font-outfit text-gold tracking-widest mb-12 uppercase text-sm">Book your free 30-minute consultation today.</p>
          <div className="space-y-6 font-outfit text-offWhite/60 text-sm tracking-widest uppercase">
            <p className="flex items-center gap-3">
              <span className="text-gold">📍</span> Auckland, New Zealand
            </p>
            <p className="flex items-center gap-3">
              <span className="text-gold">✉️</span> admissions@beyondborders.nz
            </p>
            <p className="flex items-center gap-3">
              <span className="text-gold">📞</span> +64 9 123 4567
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 md:p-12 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <input {...register("name")} placeholder="FULL NAME" className="bg-transparent border-b border-gold/30 p-3 text-white focus:border-gold outline-none font-outfit text-xs tracking-widest" />
              {errors.name && <span className="text-[10px] text-red-400 uppercase tracking-tighter">{errors.name.message}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <input {...register("email")} placeholder="EMAIL ADDRESS" className="bg-transparent border-b border-gold/30 p-3 text-white focus:border-gold outline-none font-outfit text-xs tracking-widest" />
              {errors.email && <span className="text-[10px] text-red-400 uppercase tracking-tighter">{errors.email.message}</span>}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <input {...register("country")} placeholder="CURRENT COUNTRY" className="bg-transparent border-b border-gold/30 p-3 text-white focus:border-gold outline-none font-outfit text-xs tracking-widest" />
              {errors.country && <span className="text-[10px] text-red-400 uppercase tracking-tighter">{errors.country.message}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <input {...register("course")} placeholder="INTENDED COURSE" className="bg-transparent border-b border-gold/30 p-3 text-white focus:border-gold outline-none font-outfit text-xs tracking-widest" />
              {errors.course && <span className="text-[10px] text-red-400 uppercase tracking-tighter">{errors.course.message}</span>}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <textarea {...register("message")} placeholder="TELL US ABOUT YOUR GOALS" rows={4} className="w-full bg-transparent border-b border-gold/30 p-3 text-white focus:border-gold outline-none font-outfit text-xs tracking-widest" />
            {errors.message && <span className="text-[10px] text-red-400 uppercase tracking-tighter">{errors.message.message}</span>}
          </div>
          <button type="submit" className="w-full bg-gold text-navy py-4 font-bold tracking-[0.3em] hover:bg-white transition-all uppercase">
            Book Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
