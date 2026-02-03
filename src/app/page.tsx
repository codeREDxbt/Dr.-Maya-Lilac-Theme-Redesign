import Image from "next/image";
import { SiteNavbar } from "@/components/site-navbar";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/fade-in";
import { FAQAccordion } from "@/components/faq-accordion";
import { ScrollToTop } from "@/components/scroll-to-top";

/*
  Dr. Maya Reynolds — Modern Editorial Homepage
  Content verified from professional profile.
*/

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      {/* 
        Global Background Video 
        Fixed position, z-index -50 to sit behind everything.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-[var(--color-bg)]/30 backdrop-blur-[2px]" />
      </div>

      {/* Navbar */}
      <SiteNavbar />

      {/* Hero Section */}
      <section className="relative h-screen max-h-screen flex items-center px-4 sm:px-8 pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-new-v2.jpg"
            alt="Warm and inviting therapy office space"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content - Centered on mobile, Right-aligned on desktop */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="lg:ml-auto lg:w-1/2">
            <FadeIn
              className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10 bg-white/50 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl border border-white/30"
              delay={0.2}
            >
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight text-[var(--color-text)]">
                Find relief from<br />
                <em className="text-emphasis">anxiety, trauma</em><br />
                & burnout
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-[var(--color-text)]/80 max-w-md leading-relaxed">
                Therapy for adults who feel overwhelmed by stress, anxiety, or the lingering effects of past experiences.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-md"
                  style={{ backgroundColor: "#1A2F23", color: "#FFFFFF" }}
                >
                  Book Free Consultation
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#1A2F23] bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02] shadow-sm"
                >
                  Learn More
                </a>
              </div>

              {/* Location */}
              <p className="text-sm text-[var(--color-text)]/60 font-medium pt-2">
                Santa Monica, CA · In-person & Telehealth
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="section-lg bg-transparent text-[var(--color-bg)] relative overflow-hidden">
        {/* Background Image Removed for Video */}
        {/* Intentionally left blank for video background */}
        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-8 grid lg:grid-cols-[55fr_45fr] gap-16 items-center">

          {/* Text column with Dark Glass Card */}
          <FadeIn className="flex flex-col gap-6 relative z-10">
            <div className="bg-[#1A2F23]/90 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/10">
              <h2 className="text-heading">
                You deserve support that fits.
              </h2>
              <p className="text-body opacity-85 max-w-xl mt-4">
                Many of the people I work with are high-achieving, thoughtful, and self-aware but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
              <p className="text-body opacity-85 max-w-xl mt-4">
                If you&apos;re looking for a therapist who combines practical tools with depth-oriented work and who understands the realities of living and working in a fast-paced environment, I may be a good fit.
              </p>
              <a href="#contact" className="inline-block text-[var(--color-accent)] text-body font-medium mt-6 hover:underline underline-offset-4">
                Get in touch →
              </a>
            </div>
          </FadeIn>

          {/* Image column */}
          <FadeIn className="img-frame aspect-[4/3] rounded-[var(--radius-xl)] relative z-10" delay={0.2}>
            <Image
              src="/images/empathy-section-v3.png"
              alt="Therapist sitting in a comfortable office setting with a warm, inviting atmosphere"
              fill
              className="object-cover object-right"
            />
          </FadeIn>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="section-lg px-8 relative">
        {/* Transparent grid background for texture over video? Optional. */}
        <div className="max-w-[var(--container-max)] mx-auto relative z-10">

          {/* Section header */}
          <FadeIn className="section-header text-center max-w-2xl mx-auto">
            <h2 className="text-heading text-emphasis mb-4">My Specialties</h2>
            <p className="text-subhead">
              I work with adults navigating anxiety, trauma, and the toll of chronic stress.
            </p>
          </FadeIn>

          {/* Cards grid */}
          <FadeInStagger className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Anxiety & Panic",
                description: "Work through constant worry, tension, overthinking, and the feeling that something is always about to go wrong. Learn to regulate your nervous system and find calm.",
                image: "/images/specialty-anxiety-new.png",
              },
              {
                title: "Trauma Recovery",
                description: "Heal from single-incident trauma or complex, long-standing patterns from childhood, relationships, or chronic stress. Safe, paced approach focused on stabilization.",
                image: "/images/specialty-trauma-new.png",
              },
              {
                title: "Burnout & Perfectionism",
                description: "Reconnect with yourself after years of pushing through stress. Develop sustainable ways of living and working, especially for entrepreneurs and professionals.",
                image: "/images/specialty-burnout-new.png",
              },
            ].map((specialty, i) => (
              <FadeInItem key={i} className="card group bg-white/80 backdrop-blur-md">
                <div className="img-frame aspect-[4/3] mb-5">
                  <Image
                    src={specialty.image}
                    alt={specialty.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="text-lg font-serif font-medium mb-2">{specialty.title}</h3>
                <p className="text-small text-[var(--color-text-muted)]">{specialty.description}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section-lg bg-transparent relative overflow-hidden px-8">
        {/* Background Image Removed to show Video */}
        {/* <div className="absolute inset-0 z-0 opacity-100">
          <Image
            src="/images/pain-points-bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div> */}

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto grid lg:grid-cols-[45fr_55fr] gap-16 items-center">

          {/* Image column */}
          <FadeIn className="img-halo">
            <div className="img-frame aspect-[3/4]">
              <Image
                src="/images/pain-points.jpg"
                alt="Two comfortable armchairs in a calm therapy room setting"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Text column */}
          <FadeIn className="flex flex-col gap-6" delay={0.2}>
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-sm">
              <h2 className="text-heading">
                A calm space to heal and evolve on your terms.
              </h2>
              <p className="text-subhead mt-4">If you&apos;re experiencing any of these, there&apos;s hope:</p>
              <ul className="flex flex-col gap-4 text-body mt-4">
                {[
                  "Feeling \"functional\" on the outside while quietly struggling with constant worry and tension",
                  "Difficulty sleeping, tension in your body, always bracing for something to go wrong",
                  "Navigating the impact of earlier life experiences that affect relationships, confidence, or sense of safety",
                  "Feeling disconnected from yourself after years of pushing through stress",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-[var(--color-accent)] mt-1.5 text-lg">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary mt-6 w-fit">
                Work with me
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-lg px-8 relative overflow-hidden">
        {/* Background Image Removed for Video */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div> */}

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto grid lg:grid-cols-[55fr_45fr] gap-16 items-center">

          {/* Text column */}
          <FadeIn className="flex flex-col gap-6">
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-sm">
              <h2 className="text-heading text-emphasis">
                Hi, I&apos;m Dr. Maya.
              </h2>
              <p className="text-body mt-4">
                I&apos;m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>
              <p className="text-body mt-4">
                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.
              </p>
              <p className="text-body text-[var(--color-text-muted)] mt-4">
                I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.
              </p>
              <a
                href="#contact"
                className="inline-block mt-6 px-8 py-4 bg-[#1A2F23] !text-white hover:bg-white hover:!text-[#1A2F23] border-2 border-transparent hover:border-[#1A2F23] text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 tracking-wide uppercase w-fit"
              >
                Let&apos;s Chat
              </a>
            </div>
          </FadeIn>

          {/* Image column */}
          <FadeIn className="img-halo" delay={0.2}>
            <div className="img-frame aspect-[3/4]">
              <Image
                src="/images/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                fill
                className="object-cover object-top"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Office Section */}
      <section id="office" className="section-lg bg-transparent px-8 relative overflow-hidden">
        {/* Background Image Removed for Video */}
        {/* <div className="absolute inset-0 z-0 opacity-100">
          <Image
            src="/images/office-bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div> */}

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto grid lg:grid-cols-[55fr_45fr] gap-16 items-center">

          {/* Text column */}
          <FadeIn className="flex flex-col gap-6">
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-sm">
              <h2 className="text-heading text-emphasis">Our Office</h2>
              <p className="text-body mt-4">
                My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.
              </p>
              <p className="text-body text-[var(--color-text-muted)] mt-4">
                Clients often share that the space itself helps them feel more at ease when they arrive.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Located in Santa Monica", "In-person sessions", "Telehealth available (CA)", "Private, quiet setting"].map((detail, i) => (
                  <span key={i} className="chip bg-white/80">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Image grid */}
          <FadeInStagger className="grid grid-cols-1 gap-6 w-[90%] mx-auto">
            <FadeInItem className="img-frame aspect-[3/2]">
              <Image
                src="/images/office-1.jpg"
                alt="Therapy office seating area with natural light"
                fill
                className="object-cover"
              />
            </FadeInItem>
            <FadeInItem className="img-frame aspect-[3/2]">
              <Image
                src="/images/office-2.jpg"
                alt="Calm therapy space with bookshelf"
                fill
                className="object-cover"
              />
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-lg px-8 relative">
        <div className="max-w-[var(--container-max)] mx-auto relative z-10">

          {/* Section header */}
          <FadeIn className="section-header text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-heading text-emphasis mb-4">Frequently Asked Questions</h2>
            <p className="text-subhead">
              Common questions about starting therapy and working together.
            </p>
          </FadeIn>

          {/* FAQ Accordion */}
          <FAQAccordion
            items={[
              {
                question: "What is a free consultation like?",
                answer: "The free consultation is a brief 15-20 minute phone or video call where we can get to know each other. I'll ask about what brings you to therapy, answer any questions you have about my approach, and we'll see if we feel like a good fit. There's no pressure — it's simply a chance to connect before committing to sessions."
              },
              {
                question: "How long are sessions?",
                answer: "Individual therapy sessions are 50 minutes, which is the standard therapeutic hour. This gives us enough time to dive into meaningful work while also allowing space to process and close each session thoughtfully. For some clients, extended 80-minute sessions are available if needed."
              },
              {
                question: "What should I expect in the first session?",
                answer: "The first session is about building our foundation. I'll ask more detailed questions about your history, current challenges, and goals for therapy. You'll have the chance to share what feels most pressing, and together we'll start to map out a direction. It's normal to feel a mix of relief and nervousness — that's completely okay."
              },
              {
                question: "What's the difference between in-person and telehealth?",
                answer: "In-person sessions take place at my Santa Monica office, which many clients find grounding and helpful for feeling fully present. Telehealth sessions happen via a secure, HIPAA-compliant video platform and offer flexibility for those with busy schedules or who prefer therapy from home. Both options are equally effective — it's about what works best for you."
              },
            ]}
          />

          {/* CTA after FAQ */}
          <FadeIn className="text-center mt-12" delay={0.3}>
            <p className="text-body text-[var(--color-text-muted)] mb-4">
              Have more questions?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:underline underline-offset-4"
            >
              Get in touch →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-lg bg-transparent px-8 text-center relative overflow-hidden">
        {/* Dark Glass Card for Contrast */}
        <FadeIn className="max-w-3xl mx-auto flex flex-col items-center gap-8 bg-[#1A2F23]/90 backdrop-blur-xl p-10 sm:p-14 rounded-3xl shadow-2xl border border-white/10">
          <h2 className="text-heading text-emphasis text-[var(--color-bg)]">
            Ready to take the first step?
          </h2>
          <p className="text-body text-[var(--color-bg)]/90 max-w-xl">
            I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white !text-[#1A2F23] hover:!bg-[#1A2F23] hover:!text-white border-2 border-transparent hover:border-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 tracking-wide uppercase"
          >
            Book a Consultation
          </a>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer id="contact" className="section bg-white/80 backdrop-blur-md px-8">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-lg font-medium mb-4">Dr. Maya Reynolds, PsyD</h4>
              <address className="not-italic text-[var(--color-text-muted)] text-body leading-relaxed">
                123th Street 45 W<br />
                Santa Monica, CA 90401<br /><br />
                <a href="mailto:hello@drmayareynolds.com" className="link-underline">hello@drmayareynolds.com</a>
              </address>
            </div>
            <div>
              <h5 className="font-medium mb-4">Sessions</h5>
              <p className="text-[var(--color-text-muted)] text-body">
                In-Person (Santa Monica)<br />
                Secure Telehealth (California)
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-4">Credentials</h5>
              <ul className="text-[var(--color-text-muted)] text-body space-y-1">
                <li>Licensed Clinical Psychologist</li>
                <li>CBT, EMDR Certified</li>
                <li>Mindfulness-Based Practices</li>
              </ul>
            </div>
          </div>
          <div className="divider mb-8" />
          <p className="text-center text-small text-[var(--color-text-muted)]">
            © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
          <p className="text-center text-[10px] text-[var(--color-text-muted)]/40 mt-2 font-mono uppercase tracking-widest">
            Designed By Vinayak (codeRED)
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}

