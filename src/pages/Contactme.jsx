import { useState } from "react";
import SocialLinks from "../components/SocialLinks";

const Contactme = () => {
    const [form,setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setForm(prev => ({ ...prev, [name]:value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({ name: "", email: "", subject: "", message: ""});
        setSubmitted(true);

        setTimeout(() => setSubmitted(false), 5000);
    }

    return (
        <div className="pt-16 sm:pt-32 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 lg:p-12 shadow-xl">
                {/* Header Title */}
                <div className="mb-10">
                    <h1 className="text-5xl font-bold mb-2 p-2">Contact Me</h1>
                    <div className="w-1/2 h-[2px] bg-blue-500 ml-2" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="flex-1 space-y-4">
                        <h2 className="text-2xl font-semibold">Get in Touch</h2>
                        <p>
                            Whether you want to talk about a project, collaborate, or just say hi,
                            I'd love to hear from you. Fill out the form or use the details below.
                        </p>
                        <div>
                            <p>
                                Email:{" "}
                                <a href="mailto:chillonrigonan@gmail.com" className="text-blue-600 hover:underline">
                                    chillonrigonan@gmail.com
                                </a>
                            </p>
                            <p>
                                Phone:{" "}
                                <a href="tel:+639369536552" className="text-blue-600 hover:underline">
                                    +63 (936) 953 6552
                                </a>
                            </p>
                        </div>

                        {/* Larger SocialLinks */}
                        <div className="text-3xl mt-6">
                            <SocialLinks layout="center" />
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="border rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-700"
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="border rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-700"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                            className="border rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-700"
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="5"
                            required
                            className="border rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-700"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>

            {/* Success Message */}
            {submitted && (
                <div className="text-center mt-8 text-green-600 dark:text-green-400 text-lg font-medium transition-opacity">
                    Your message has been sent successfully!
                </div>
            )}

        </div>
    );
};

export default Contactme;