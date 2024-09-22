"use client";
import hero from "../../assets/hero.jpg";
import ShimmerButton from "../magicui/shimmer-button"; // Adjust the import path as needed

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center pt-16 backdrop-blur-lg"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Fitness background"
          loading="lazy"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Transform Your Body, Transform Your Life
        </h1>
        <p className="text-xl mb-8">
          Join our fitness community and achieve your health goals
        </p>
        <div className="flex justify-center"> {/* Center the button */}
          <ShimmerButton
            shimmerColor="#ffffff"
            shimmerSize="0.05em"
            shimmerDuration="3s"
            borderRadius="100px"
            background="rgba(0, 0, 1)"
            className="text-white"
          >
            Start Your Journey
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};
