"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Virtual School Online</h1>
        <p className="text-lg text-gray-700">Learn at your own pace with our online courses.</p>
      </div>
      <Image
        src="/images/hero-image.jpg"
        alt="Hero Image"
        width={600}
        height={400}
        className="mt-10 rounded-lg shadow-lg"
      />
    </div>
  );
}
