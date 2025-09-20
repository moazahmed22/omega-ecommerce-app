import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-background bg-foreground px-20 pt-14 pb-4">
        <div className="container mx-auto">
          <h1 className="font-bold text-3xl mb-5">Ωmega</h1>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">Company</h3>
              <p className="text-sm font-medium">About</p>
              <p className="text-sm font-medium">Blog</p>
              <p className="text-sm font-medium">Jobs</p>
              <p className="text-sm font-medium">Contact</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">Support</h3>
              <p className="text-sm font-medium">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="text-sm font-medium">omega@gmail.com</p>
              <p className="text-sm font-medium">+88015-88888-9999</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">Social</h3>
              <p className="text-sm font-medium">Facebook</p>
              <p className="text-sm font-medium">Twitter</p>
              <p className="text-sm font-medium">Instagram</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 flex justify-center items-center">
          {/* copyright */}
          <p className="text-sm text-secondary">
            © Copyright Moaz ahmed {year}. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
