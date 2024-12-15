import React from "react";

export const Footer = () => {
  const sosialMedia = [
    { path: "/src/assets/icon-1.svg" },
    { path: "/src/assets/icon-2.svg" },
    { path: "/src/assets/icon-3.svg" },
    { path: "/src/assets/icon-4.svg" },
  ];

  const Bank = [
    {
      Column1: [
        { path: "/src/assets/bca.png" },
        { path: "/src/assets/bni.png" },
        { path: "/src/assets/bri.png" },
        { path: "/src/assets/mandiri.png" },
      ],
      Column2: [
        { path: "/src/assets/bsi.png" },
        { path: "/src/assets/permata.png" },
        { path: "/src/assets/bjb.png" },
      ],
    },
  ];

  const footerAddress = [
    {
      title: "PT. Digital Trading Solusindo",
      content:
        "Jl. Mangga Besar VIII No.12 E, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta, 11150 info@caribarang.id / 0811-1916-3004",
    },
    {
      title:
        "Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementerian Perdagangan Republik Indonesia",
      content: "0853-1111-1010 (WhatsApp)",
    },
  ];

  const FooterLink = [
    {
      Link1: [
        { title: "Tentang Caribarang", link: "#" },
        { title: "Events", link: "#" },
        { title: "Blog", link: "#" },
      ],
      Link2: [
        { title: "Syarat & Ketentuan", link: "#" },
        { title: "Kebijakan Privasi", link: "#" },
        { title: "Caribarang care", link: "#" },
        { title: "Hubungi Kami", link: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t-[1px] mt-12">
      <div className="container mx-auto sm:px-8 lg:px-12 pt-14 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-10">
          {/* Address Section */}
          <div>
            <img
              src="/src/assets/logo.svg"
              alt="Logo Company"
              className=" mb-8 lg:mb-10"
            />
            <h3 className="text-xs lg:text-base font-bold mb-4">
              Layanan Pengaduan Konsumen
            </h3>
            {footerAddress.map((item, key) => (
              <div key={key} className="mb-6 text-xs lg:text-base">
                <h3 className="text-xs lg:text-base font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="font-medium text-[#747474]">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-x-6">
            {FooterLink.map((item, key) => (
              <React.Fragment key={key}>
                <div>
                  <h3 className="text-xs lg:text-base font-bold mb-4">
                    Caribarang
                  </h3>
                  <ul className="space-y-2 text-xs lg:text-base">
                    {item.Link1.map((link, key) => (
                      <li key={key}>
                        <a
                          href={link.link}
                          className="hover:text-primary-0 hover:font-bold transition-all duration-500"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs lg:text-base font-bold mb-4">
                    Panduan dan Bantuan
                  </h3>
                  <ul className="space-y-2 text-xs lg:text-base">
                    {item.Link2.map((link, key) => (
                      <li key={key}>
                        <a
                          href={link.link}
                          className="hover:text-primary-0 hover:font-bold transition-all duration-500"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Social Media & Payment */}
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-xs lg:text-base font-bold mb-4">
                Ikuti Kami
              </h3>
              <div className="flex space-x-4 mb-6">
                {sosialMedia.map((item, key) => (
                  <a key={key} href="#">
                    <img
                      src={item.path}
                      alt={`Social ${key}`}
                      className="cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>
              <img src="/src/assets/kominfo.png" alt="Kominfo Logo" />
            </div>
            <div>
              <h3 className="text-xs lg:text-base font-bold mb-4">
                Metode Pembayaran
              </h3>
              {Bank.map((item, key) => (
                <div key={key} className="flex flex-col gap-4 items-start">
                  {/* Column 1 */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 items-center justify-center">
                    {item.Column1.map((bank, key) => (
                      <img
                        key={key}
                        src={bank.path}
                        alt={`Bank ${key}`}
                        className="w-full max-w-[100px] md:max-w-[120px] object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                      />
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 items-center justify-center">
                    {item.Column2.map((bank, key) => (
                      <img
                        key={key}
                        src={bank.path}
                        alt={`Bank ${key}`}
                        className="w-full max-w-[100px] md:max-w-[120px] object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs md:text-md lg:text-base text-center font-medium text-[#747474]">
          &copy; 2021 - {new Date().getFullYear()} caribarang.id · All Rights
          Reserved · Version 1.17.0
        </div>
      </div>
    </footer>
  );
};
