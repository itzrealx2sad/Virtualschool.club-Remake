import React from 'react';

const Navbar = () => {
  return (
    // The main navigation bar with a black blurred background and bottom border
    // To make the entire page black, you would typically add `bg-black` to a parent div
    // or the <body> tag in your main application's CSS or structure.
    <nav className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-4 border-b border-gray-700 border-solid">
      {/* Container for content, centered and with space between items */}
      <div className="container mx-auto flex justify-between items-center">
        {/* "Virtualschool" title on the left */}
        <a href="#" className="text-xl font-bold font-inter">Virtualschool</a>

        {/* Right-side container for buttons */}
        <div className="flex space-x-4"> {/* Added space-x-4 for spacing between buttons */}
          {/* Sign In Button */}
          <a
            href="#"
            className="px-4 py-2 rounded-md transition-all duration-300 relative overflow-hidden group
                       border border-white text-white bg-black font-inter"
          >
            {/*
              Pseudo-element for the white slash effect on hover.
              - absolute inset-0: Positions the span to cover the entire button area.
              - transform -translate-y-full: Initially moves the slash completely above the button.
              - scale-0: Makes the slash initially invisible.
              - rotate-45: Creates the diagonal angle.
              - transition-all duration-300: Smooth transition for all transformations.
              - origin-bottom-left: Ensures the diagonal rotation and scaling originate from the bottom-left.
              - z-0: Places the slash behind the text content.

              On hover:
              - group-hover:scale-[2]: Scales up the slash to cover the button diagonally.
              - group-hover:translate-y-0: Slides the slash down into its visible position.
              - group-hover:bg-white: Sets the background color of the slash to white.
            */}
            <span className="absolute inset-0 bg-white transform -translate-y-full scale-0 rotate-45 transition-all duration-300 origin-bottom-left group-hover:scale-[2] group-hover:translate-y-0 z-0"></span>
            {/* Text content of the button, placed above the slash effect */}
            <span className="relative z-10">Sign In</span>
          </a>

          {/* Sign Up Button */}
          <a
            href="#"
            className="px-4 py-2 rounded-md transition-all duration-300 relative overflow-hidden group
                       border border-violet-500 text-white bg-black font-inter"
          >
            {/*
              Pseudo-element for the violet slash effect on hover.
              - Similar logic to the Sign In button, but with a violet background for the slash.
            */}
            <span className="absolute inset-0 bg-violet-500 transform -translate-y-full scale-0 rotate-45 transition-all duration-300 origin-bottom-left group-hover:scale-[2] group-hover:translate-y-0 z-0"></span>
            {/* Text content of the button, placed above the slash effect */}
            <span className="relative z-10">Sign Up</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
