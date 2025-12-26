import SmoothScrollLink from './components/SmoothScrollLink';
import ThemeToggle from './components/ThemeToggle';
import Image from 'next/image';
import ThemeAwareImage from './components/ThemeAwareImage';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">prototypefast.com</div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <SmoothScrollLink
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get Started
            </SmoothScrollLink>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-b from-gray-200 via-gray-100 to-white dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6 relative">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Rapid MVP</span>
            <br />
            Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            I build working prototypes in <span className="font-semibold text-gray-900 dark:text-white">1-2 weeks</span> so you can validate your idea
            without months of development.
          </p>
          <SmoothScrollLink
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Get Started →
          </SmoothScrollLink>
        </div>
      </section>

      {/* What I Do */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">What I Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Fast MVP Development for Founders
          </h3>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-xl">
              You have an idea. You need it built quickly to test with real users.
              I build functional prototypes in <span className="font-semibold text-gray-900 dark:text-white">1-2 weeks</span> using modern development
              tools and AI-assisted coding.
            </p>
            <p className="text-xl">
              This is not production-ready enterprise software. This is a <span className="font-semibold text-gray-900 dark:text-white">working
              MVP</span> you can put in front of users to validate demand.
            </p>
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
              <p className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Perfect for:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <p className="dark:text-gray-300">Non-technical founders testing an idea</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <p className="dark:text-gray-300">Startups that need a prototype before raising funding</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <p className="dark:text-gray-300">Companies validating a new product direction</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <p className="dark:text-gray-300">Anyone who needs to move fast and validate quickly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Recent Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100 dark:border-gray-700 flex flex-col">
            <div className="mb-0 relative h-64 w-full overflow-hidden bg-gray-900">
              <ThemeAwareImage
                lightSrc="/light-cover-letter-generator.png"
                darkSrc="/dark-cover-letter-generator.png"
                alt="Cover Letter Generator - Tailored cover letters in seconds"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Cover Letter Generator</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                A cover letter generator built with Spring Boot and React, featuring user authentication, payment
                processing, AI integration, a credit system and data autofill.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Spring Boot</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Clerk</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">OpenAI API</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">LemonSqueezy</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Resend</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Vercel</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Railway</span>
              </div>
              <a
                href="https://coverlettergenerator.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors mt-auto"
              >
                View Live →
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100 dark:border-gray-700 flex flex-col">
            <div className="mb-0 relative h-64 w-full overflow-hidden bg-gray-900">
              <Image
                src="/quillia.png"
                alt="Quillia - Turn Your Days Into Adventures"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Quillia</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                A gamified journaling application built with Next.js, featuring user authentication, payment processing,
                AI-powered creation tools, data encryption, customizable avatars,
                character slots, stat tracking and a credit system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">PostgreSQL</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">NextAuth.js</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">OpenAI/Gemini API</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Paddle/FastSpring</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Resend</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Vercel</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Neon</span>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors mt-auto"
              >
                View Live →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Discovery Call
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">30 min, free</p>
            <p className="text-gray-700 dark:text-gray-300">
              We discuss your idea, requirements, and timeline.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 rounded-xl p-6 border border-purple-100 dark:border-purple-800">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Proposal & Payment
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">48 hours</p>
            <p className="text-gray-700 dark:text-gray-300">
              I send you a clear scope and timeline. 50% upfront to start.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">1-2 weeks</p>
            <p className="text-gray-700 dark:text-gray-300">
              I build your MVP. You get progress updates every 2-3 days.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 rounded-xl p-6 border border-purple-100 dark:border-purple-800">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
              4
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Delivery & Handoff
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">Final payment</p>
            <p className="text-gray-700 dark:text-gray-300">
              You get the working application, code, and deployment access.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Pricing</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-10">
              <div className="text-5xl font-bold gradient-text mb-2">$2,000 - $3,000</div>
              <p className="text-xl text-gray-600 dark:text-gray-400">per project</p>
            </div>
            
            <div className="mb-8">
              <p className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Price depends on:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700 dark:text-gray-300">Number of features</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700 dark:text-gray-300">Integration requirements</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700 dark:text-gray-300">Complexity of business logic</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700 dark:text-gray-300">Timeline constraints</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-8 border border-blue-100 dark:border-blue-800">
              <p className="text-center text-lg text-gray-700 dark:text-gray-300">
                Most projects: <span className="font-bold text-gray-900 dark:text-white text-xl">$2,000 for 1-2 week delivery</span>.
              </p>
              <p className="text-center text-lg text-gray-700 dark:text-gray-300">
                First-time client discount available for select projects.
              </p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Payment structure:</p>
              <div className="flex gap-4">
                <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center border border-blue-100 dark:border-blue-800">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">50%</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">to start development</p>
                </div>
                <div className="flex-1 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center border border-purple-100 dark:border-purple-800">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">50%</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">on delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 text-center">
                <span className="font-semibold">Refund policy:</span> If I can&apos;t deliver what was scoped, you get a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">What You Get</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border border-green-100 dark:border-green-800">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">✓ Included</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Working, responsive web application deployed and live</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Basic documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Admin access to all services used</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">1 week of bug fixes post-delivery</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">✗ Not Included</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 font-bold mt-1">✗</span>
                <span className="text-gray-700 dark:text-gray-300">Production-ready, enterprise-grade code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 font-bold mt-1">✗</span>
                <span className="text-gray-700 dark:text-gray-300">Infinite revisions and feature changes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 font-bold mt-1">✗</span>
                <span className="text-gray-700 dark:text-gray-300">Ongoing maintenance (can be arranged separately)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 font-bold mt-1">✗</span>
                <span className="text-gray-700 dark:text-gray-300">Mobile apps (web only)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            I use modern, well-documented tools and AI-assisted development to move fast without sacrificing quality.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Next.js', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Stripe', 'Paddle', 'Vercel', 'Clerk', 'NextAuth.js', 'APIs', 'Resend'].map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">FAQ</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Do you use AI to write code?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Yes. I use various AI tools to accelerate development. This lets me
              deliver quality results in 1-2 weeks, instead of 1-2 months.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              What if I need changes after delivery?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Minor bug fixes are included for 1 week. Feature additions can be
              quoted separately.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Can you maintain the project long-term?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I focus on rapid prototyping. For ongoing work, we can discuss an eventual maintenance arrangement.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              What if you can&apos;t deliver what I need?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If I can&apos;t build what we agreed on, you get a full refund. No questions asked.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Do you sign NDAs?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Yes, if required.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Contact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-2xl mb-12 text-gray-700 dark:text-gray-300">Ready to build your MVP?</p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-100 dark:border-gray-700">
            <div className="space-y-6">
              <a
                href="mailto:contact@prototypefast.com"
                className="block w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                📧 contact@prototypefast.com
              </a>
              <div className="text-gray-500 dark:text-gray-400">or</div>
              <a
                href="https://app.cal.eu/prototypefast"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold text-lg hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-200"
              >
                📅 Schedule a Call
              </a>
            </div>
            <p className="mt-8 text-gray-600 dark:text-gray-400">
              Based in Bucharest, Romania.<br />
              Available for projects worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} prototypefast.com. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

