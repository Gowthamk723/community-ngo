"use client";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogout = async () => {
    // Note: The new UI code structure doesn't show the user's name/role,
    // but the session and logout logic are kept for functionality.
    await signOut({ redirect: false });
    router.push("/");
  };

  // Utility function to handle button clicks based on the new structure
  const handleIdeaSubmission = () => router.push("/IdeaSubmission");
  const handleExploreProjects = () => {
    // Replace with the actual projects page route if one exists, otherwise keep placeholder
    console.log("Exploring projects...");
    // router.push("/projects"); // Example actual route
  };
  const handleDonate = () => {
    // Replace with the actual donate page route if one exists
    console.log("Donating now...");
    // router.push("/donate"); // Example actual route
  };

  // Data for the 'Your Role in the Ecosystem' section (kept from existing code)
  const roles = [
    { title: "NGO", desc: "Non-profit organizations seeking innovative solutions.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSCY0qnIbC8NZgsJM7VpOnzzCyGn3LuxKfuc2Ymt0LBn6R44WmhjA2tuu0SdCf9JlPcYTLnLdA-cX8u774u2dgbG1pDEMzE6DR7YH2MqsWvhl5njhU3GZcZ6YTUVMlQ3uc4PGkUc55aGW0ZHW7y0nBh2KzGrZRMLJDt_BSe3EFiHOazKdm7yRkwxpzK5u2erabYlP8C-tEnwhDTpg3EQZ8fVTu_qoPq1mwHDU4pF7j2XKOaDkrDhfJ75lNRsIRuJ5D9zYlQPNpwpU" },
    { title: "Innovator", desc: "Individuals or teams with innovative ideas for social impact.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdiCgs46nWvxeVo970uoWG4VZOkRqmsXTDXMiPHZokWzhEQjnrb4BvHWB8g29xtDGXvcKrcmJK2aYtLMTcH68ex7CJudkReijdBht-WCmE-OgJV5vwXlA1W1GitUSTfLKeQucFzoXNDAgzX1wHDb5_kXkvLyhmMQHj2bnF5L5rDyBUSefLBV3BfacfpSJOo_pKDQZJZnibYYsAxJc0Jv6Heu8vPBY3W8D2Mlgwx4j2JacbwCL7JKBcC-L5-NFMn_okMlyhbmTjgk8" },
    { title: "Donor", desc: "Philanthropic individuals or organizations looking to fund impactful projects.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqPv7KMDQ-4CuYPawouejCBrINLNNyrA86g6DygeItFrdCuzb2x9dNcahi5gz6M7-j9Me8TeCHJQLo5raI4wsqn5gDNT_IcoanySBosqhipLr2VPMiC_GGDkcDaUexMLrLDrDMHqklLtjrQ9AMaiHCo_BDA0rQKsOAaYkEQF6LMnMVjU7GAlfKwuAGWqHdOpxylZie_FZCIq2YJy2tZAaqP-YusiJ3h7skm9Za7fiQ6mRCPdD94PQen739BHo650DiE2xzFJfog-I" },
    { title: "Mentor", desc: "Experienced professionals offering guidance and support.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-STMsQmVwMubKx7dymSNy0XW-AHVWC01uJs-f_2N7eDtftUZkJ6lSBzywAT_5sBo-LNStNpZBihKFE16g8yKzI2lT41DTu0qUvoO4hFmJXXoKzvflmkXGSaZdWRXDNhA9baIsYe9qXt2R31FydI5rjmbIk1FpYyxVUD-W-BH2upFyJqCqeUwlENC-FXjv4Eo6xuSoF6lGQyNVzgkXaA2QdUh_Vb2ZM6bXr9uOY20JU9NIPx-ryEV7BQCZ8sJpjCfn7Pyla31IGRs" },
    { title: "Community", desc: "A space for collaboration, discussion, and shared learning.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMENTfChMlLgnCajZnKVUl8IpdI57acSg5ARyoExWu6BBLyvDYCGgkT_5cJw-J1XxBomQIlNT7Kwam3RgSzu2SxwrOJyWdnASQL03-T56ig-wqx31gc1FYacaa8ruXB0nAbs1Li6cKPITZTOdIJyvJWCUUo8ugVydqDATvYrryg9nXK1QC9v3R-p7gYMi2xgBBxN-KBK414uDLKnnGZY9fKc5Wcz7km4a4-rqL3VfRhdEtS2bo1fidXUfYjdaIe5luMm7S1CFjzVc" },
  ];

  // Data for the 'Featured Success Stories' section (kept from existing code)
  const successStories = [
    {
      title: "Empowering Communities Through Sustainable Agriculture",
      desc: "A local NGO partnered with innovators to implement a community garden project, providing fresh produce and economic opportunities for residents.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQTwLKrlddYVCVjwJGTbSOG0hQWa4J6W_mwdOvVyC6u3UUwYZcgzke0gShZsYaEhmsxlIXQYnw-BVnkxkLBIYOqKX8PYqQvFNkdT3b9X9X9PQbwU4NDbDXqIm957nQqugvnOYPknEHP3M4710PMvRYXJpzptIP5_9Miof2v1B95bBpbfQmW_JZSc-_U2sY2Sl6TQqmBNxDnCij4FaxSwgsedenHQmyUa9VDpmbkRvIc6m6iQoF5FjMTCLF_coraT93OQglxKt_rrI",
    },
    {
      title: "Bringing Clean Energy to Rural Villages",
      desc: "An innovator developed a cost-effective solar panel system, bringing electricity to a remote village and improving the quality of life.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9pxZuKBeFtk9xs4bWgQMtMlVg7epqQdaMQdlSQQrtwCc1BQ6AZvIIic5n2aJ5yO9EZzAZGIFILgP2AB2rtFPKoqKK9jVW9Wg4CiVYCj7sSEmgkWoRceN0punysT83KdJJFSGkMwgomjrkY3i8YGpTPKhQpCLZkB7HWxYyykwCj6YKWsYBa5CljMzDlvYRYR2h8JrUDdINpGeW0mthzaJCvFfD4zEjrVtX5EXJv9bgcyyYXIZCeiOqjwf9vHP8lbYi-EWgrY_UKVg",
    },
    {
      title: "Transforming Education with Innovative Learning Tools",
      desc: "A mentor guided a team of educators in creating an interactive learning platform, enhancing student engagement and academic performance.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvnMSSUB9bmzGxkh9sKXwkr01xws_4E2hGJ3Zqp1zCHUiOerePq2rF-6M2uZzBb4y6-ud0c2yoHHS6Iq74zn4PA4bAhWegFcPZOBEW7s0uX-0uqbFJUC8MrM_IoMoAReHAL8jyCsq-HkYjz7Mk6GukKayhfh-uwdlggRdMdpz5vF3x35fbNlWiyNmcZdGBF7XZSASFiPs3C6_fgPe48bPsU6pkG3rWwDzuab-VMVx-maDDmgWQ2f3yXQ3V0ZkHLoVu02ZAu99orcw",
    },
  ];

  // Data for the 'Impact Highlights' section (kept from existing code)
  const impactHighlights = [
    { label: "Ideas Submitted", count: 1500, percentage: 75 },
    { label: "Pilots Launched", count: 750, percentage: 50 },
    { label: "Projects Scaled", count: 375, percentage: 25 },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-background-light dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-primary size-7">
                {/* Logo SVG */}
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                FutureProof
              </h2>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Projects</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Ideas</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Community</a>
            </nav>

            <div className="flex items-center gap-4">
              {/* Submit Idea button in header */}
              <button
                onClick={handleIdeaSubmission}
                className="hidden sm:inline-flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
              >
                Submit Idea
              </button>
              
              {/* User Avatar/Logout button */}
              <button
                onClick={handleLogout}
                className="rounded-full"
              >
                <img
                  alt="User avatar"
                  className="size-10 rounded-full border-2 border-transparent hover:border-primary transition"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfTAssQ1w94ed4piS1DT7YJu6AEFjfB3KF8YoSl0KNcKrBf0apvgYxnPgiIw3Mix7Vt8KqvcMkQl2ptJ3bs0vyvoKlaSU4fBnSffwot9lvaJzglmIEIBsZPBDZFxL0QL6p2DjC63M2hHXCfVtO-ooa64jmVjtc2ye_zOr_TYmNkiqDSO1B1r9_veRA7Q-fZxjIX-QVTaASyX5HiQwrHKEL2WypX-Tufdo0KKSlZIco6Uctl6J-gMMkB3vdv4ParEfHVZe3uCBpGqQ" // Placeholder avatar
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPyLS_XgqLh0ks1Kmwt0xIoC72xMIVTwmY-W2aYTbz35ZAjZQ9HpWHpebfbtzZS2ck6JnxTnKE8QMSA4l-iKNeOhM0ATNLtDNk7RTwJeW-fgXoecugNUVaNzOyahVzjk3_vIIqV81_a428JfrUUNvMrtplFcn9qhEQwspF9_YMl_GORVi9F45V3796WnelTOJqLFuXKi4Mn8Sf-l7rLkcF0Qh0C9bdxMGHUbJ31tHNmnDK093WyaATViM-XntCAJh-agFmpNLV5DQ')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
              Turning Ideas into Scalable Social Impact
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
              Join a vibrant ecosystem of NGOs, innovators, donors, and mentors,
              working together to transform groundbreaking ideas into impactful,
              scalable solutions for social change.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleExploreProjects}
                className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/50"
              >
                Explore Projects
              </button>
              <button
                onClick={handleIdeaSubmission}
                className="inline-flex sm:hidden items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/50"
              >
                Submit Idea
              </button>
            </div>
          </div>
        </div>

        {/* Roles Section and Impact Highlights wrapped in a container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Roles Section */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              Your Role in the Ecosystem
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {roles.map((role) => (
                <div key={role.title} className="flex flex-col items-center text-center group">
                  <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <img src={role.img} alt={role.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Highlights Section */}
          <section className="mt-16 sm:mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              Impact Highlights
            </h2>
            <div className="mt-12 space-y-8">
              {impactHighlights.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.count} ({item.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-primary/20 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Success Stories Section */}
          <section className="mt-16 sm:mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              Featured Success Stories
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((s) => (
                <div
                  key={s.title}
                  className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-lg overflow-hidden group"
                >
                  <img
                    alt={s.title}
                    className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    src={s.img}
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mt-16 sm:mt-24 text-center">
            <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Ready to Make a Difference?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Whether you have a groundbreaking idea, wish to fund the next big project, or want to explore inspiring initiatives, your journey starts here.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleIdeaSubmission}
                  className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary/10 dark:focus:ring-offset-primary/20"
                >
                  Submit Idea
                </button>
                <button
                  onClick={handleExploreProjects}
                  className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-background-dark text-primary dark:text-white border border-primary/20 dark:border-primary/40 font-bold shadow-sm hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary/10 dark:focus:ring-offset-primary/20"
                >
                  Explore Projects
                </button>
                <button
                  onClick={handleDonate}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary/10 dark:focus:ring-offset-primary/20"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background-light dark:bg-background-dark border-t border-primary/10 dark:border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="text-primary size-5">
                {/* Logo SVG */}
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} FutureProof. All rights reserved. 
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">
                About
              </a>
              <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">
                Contact
              </a>
              <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}