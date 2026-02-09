import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaUsers, FaDollarSign, FaChair } from "react-icons/fa";

const SinglePopularClasses = ({ popularCls, index }) => {
  const {
    _id,
    cName,
    enrolled,
    image,
    instructorEmail,
    instructorName,
    price,
    seats,
  } = popularCls;

  // Add default values
  const className = cName || "Photography Class";
  const enrolledCount = enrolled || 0;
  const classImage = image || "https://via.placeholder.com/400x300?text=Class";
  const instructor = instructorName || "Instructor";
  const classPrice = price || 0;
  const availableSeats = seats || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group w-full"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full max-w-md mx-auto">
        {/* Image Section */}
        <div className="relative overflow-hidden h-64">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={classImage}
            alt={className}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x300?text=Class";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1), type: "spring" }}
              className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"
            >
              <FaDollarSign className="text-lg" />
              <span>{classPrice}</span>
            </motion.div>
          </div>

          {/* Availability Badge */}
          <div className="absolute top-4 left-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (index * 0.1), type: "spring" }}
              className={`px-4 py-2 rounded-full font-semibold shadow-lg ${
                availableSeats > 5 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}
            >
              {availableSeats > 5 ? 'Available' : 'Limited Seats'}
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
          >
            {className}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (index * 0.1) }}
            className="flex items-center gap-2 text-gray-600 mb-4"
          >
            <FaUser className="text-blue-500" />
            <p className="text-sm">
              <span className="font-semibold">Instructor:</span> {instructor}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            className="grid grid-cols-2 gap-3 mt-4"
          >
            <div className="bg-blue-50 rounded-lg p-3 flex items-center gap-2">
              <div className="bg-blue-500 p-2 rounded-full">
                <FaUsers className="text-white text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Enrolled</p>
                <p className="text-lg font-bold text-gray-800">{enrolledCount}</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 flex items-center gap-2">
              <div className="bg-blue-500 p-2 rounded-full">
                <FaChair className="text-white text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Seats Left</p>
                <p className="text-lg font-bold text-gray-800">{availableSeats}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SinglePopularClasses;
