import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/shawnzeng217/" },
  { icon: Twitter, href: "https://twitter.com/@shawnzeng217/" },
  { icon: Instagram, href: "https://www.instagram.com/@shawnzeng/" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shawnzeng/" },
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/3 flex flex-col gap-12 border-l md:pl-12 py-4">
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4 border-b pb-2">Search</h3>
        <div className="flex border rounded overflow-hidden">
          <input type="text" className="w-full px-4 py-2 text-sm focus:outline-none" placeholder="Search for..." />
          <button className="bg-gray-100 px-4 py-2 border-l hover:bg-gray-200 transition-colors">
            Go
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4 border-b pb-2">Follow Blog via Email</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Enter your email address to follow this blog and receive notifications of new posts by email.
        </p>
        <input type="email" className="w-full px-4 py-2 text-sm border rounded mb-4" placeholder="Email Address" />
        <button className="w-full bg-black text-white text-sm py-2 hover:bg-gray-800 transition-colors uppercase tracking-widest font-bold">
          Follow
        </button>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4 border-b pb-2">Social</h3>
        <div className="flex gap-4">
          {socialLinks.map((social, i) => (
            <a key={i} href={social.href} className="text-gray-400 hover:text-black transition-colors" target="_blank">
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4 border-b pb-2">Contact</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail size={16} />
          <span>shawnzeng217@gmail.com</span>
        </div>
      </section>
    </aside>
  );
}
