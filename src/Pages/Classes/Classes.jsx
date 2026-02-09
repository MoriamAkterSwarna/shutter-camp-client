import React, { useEffect, useState } from 'react';
import SingleClass from '../SingleClass/SingleClass';

const Classes = () => {
    const [showClasses, setShowClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://shutter-camp-server-nine.vercel.app/classes')
            .then((res) => res.json())
            .then((data) => {
                const classes = data.filter((cls) => cls.status === 'approve');
                setShowClasses(classes);
                setLoading(false);
            });
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-200 py-10 px-2 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-800 mb-2 tracking-tight drop-shadow-lg">
                    Explore Our Classes
                </h2>
                <p className="text-center text-indigo-500 mb-10 text-lg md:text-xl font-medium">
                    Find the perfect class to boost your skills
                </p>
                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <span className="loading loading-spinner loading-lg text-indigo-600"></span>
                    </div>
                ) : showClasses.length === 0 ? (
                    <div className="text-center text-indigo-400 font-semibold text-xl py-20">
                        No classes available at the moment.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {showClasses.map((classItem) => (
                            <div
                                key={classItem._id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-indigo-200 transition-shadow duration-300 p-6 flex flex-col items-center border border-indigo-100 hover:border-purple-300 group"
                            >
                                <SingleClass classItem={classItem} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Classes;