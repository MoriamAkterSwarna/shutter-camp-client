import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://shutter-camp-server-nine.vercel.app/users')
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter((inst) => inst.role === 'instructor');
                setInstructors(filtered);
                setLoading(false);
            })
            .catch(() => {
                // fallback mock data
                setInstructors([
                    {
                        _id: '1',
                        name: 'Alex Morgan',
                        email: 'alex@shuttercamp.com',
                        photoURL: 'https://randomuser.me/api/portraits/men/32.jpg',
                        bio: 'Award-winning photographer and passionate educator with 10+ years of experience.'
                    },
                    {
                        _id: '2',
                        name: 'Sophie Lee',
                        email: 'sophie@shuttercamp.com',
                        photoURL: 'https://randomuser.me/api/portraits/women/44.jpg',
                        bio: 'Specialist in portrait and lifestyle photography, known for creative workshops.'
                    },
                    {
                        _id: '3',
                        name: 'David Kim',
                        email: 'david@shuttercamp.com',
                        photoURL: 'https://randomuser.me/api/portraits/men/65.jpg',
                        bio: 'Landscape photographer with a love for teaching and adventure.'
                    },
                ]);
                setLoading(false);
            });
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-200 py-12 px-2 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, type: 'spring' }}
                    className="text-4xl md:text-5xl font-extrabold text-center text-indigo-800 mb-2 tracking-tight drop-shadow-lg"
                >
                    Meet Our Instructors
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-center text-indigo-500 mb-10 text-lg md:text-xl font-medium"
                >
                    Learn from the best in the industry
                </motion.p>
                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <span className="loading loading-spinner loading-lg text-indigo-600"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {instructors.map((ins, idx) => (
                            <motion.div
                                key={ins._id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="relative bg-white rounded-3xl shadow-xl hover:shadow-indigo-200 transition-shadow duration-300 p-8 flex flex-col items-center group border border-indigo-100 hover:border-indigo-300 overflow-hidden"
                            >
                                <div className="absolute -top-8 right-8 w-20 h-20 bg-indigo-100 rounded-full blur-2xl opacity-60 z-0"></div>
                                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-200 group-hover:border-purple-400 transition-all duration-300 mb-4 z-10">
                                    <img
                                        src={ins.photoURL || 'https://i.ibb.co/2kR8B6F/placeholder-profile.png'}
                                        alt={ins.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-indigo-700 mb-1 group-hover:text-purple-900 transition-colors duration-200 z-10">
                                    {ins.name}
                                </h3>
                                <p className="text-indigo-500 font-medium mb-2 z-10">{ins.email}</p>
                                <span className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-xs font-semibold mb-2 z-10 shadow-sm">
                                    Instructor
                                </span>
                                {ins.bio && (
                                    <p className="text-gray-500 text-sm text-center mt-2 z-10">{ins.bio}</p>
                                )}
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-200 via-purple-100 to-indigo-200 opacity-70 rounded-b-3xl"></div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Instructor;