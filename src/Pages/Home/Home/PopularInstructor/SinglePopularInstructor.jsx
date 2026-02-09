import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUsers, FaStar, FaGraduationCap } from "react-icons/fa";

const SinglePopularInstructor = ({ popular, index }) => {
  const { _id, name, email, photoURL, students } = popular;
  
  // Add default values in case data is missing
  const instructorName = name || "Instructor";
  const instructorEmail = email || "email@example.com";
  const instructorPhoto = photoURL || "https://via.placeholder.com/400x500?text=Instructor";
  const studentCount = students || 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group w-full"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full max-w-md mx-auto">
        {/* Image Section */}
        <div className="relative overflow-hidden h-80">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={instructorPhoto}
            alt={instructorName}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x500?text=Instructor";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          {/* Floating Badge */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (index * 0.1), type: "spring" }}
            className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"
          >
            <FaStar className="text-lg" />
            <span>Top Rated</span>
          </motion.div>

          {/* Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="text-2xl md:text-3xl font-bold text-white mb-2"
            >
              {instructorName}
            </motion.h3>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="flex items-center gap-2 text-blue-400"
            >
              <FaGraduationCap className="text-xl" />
              <span className="font-semibold">Photography Expert</span>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            className="flex items-center gap-3 mb-4 text-gray-300"
          >
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <FaEnvelope className="text-blue-400" />
            </div>
            <p className="text-sm truncate">{instructorEmail}</p>
          </motion.div>

          {/* Students Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + (index * 0.1) }}
            className="bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <FaUsers className="text-white text-xl" />
              </div>
              <div>
                <p className="text-white/80 text-xs font-medium">Total Students</p>
                <p className="text-white text-2xl font-bold">{studentCount}</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
              className="text-white/40"
            >
              <FaGraduationCap className="text-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SinglePopularInstructor;
