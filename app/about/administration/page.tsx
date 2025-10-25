"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaUserTie,
  FaUsers,
  FaClipboardList,
  FaBalanceScale,
  FaPhoneAlt,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";

export default function AdministrationPage() {
  const { t, language } = useLanguage();

  const electedMembers = [
    // Head Officials
    {
      id: 1,
      MarathiName: "श्री. दिग्विजय शामराव माने",
      EnglishName: "Mr. Digvijay Shyamrao Mane",
      positionKey: "Sarpanch / सरपंच",
      image: "/images/sarpanch.jpeg",
      phone: "+91-9011702323",
      phoneDevnagari: "+९१-९०११७०२३२३",
      email: "",
    },
    {
      id: 2,
      MarathiName: "श्री. निवास बंडू गायकवाड",
      EnglishName: "Mr. Nivas Bandu Gaikwad",
      positionKey: "Up-Sarpanch / उप-सरपंच",
      image: "/images/upsarpanch.jpeg",
      phone: "+91-9764746976",
      phoneDevnagari: "+९१-९७६४७४६९७६",
      email: "",
    },
    {
      id: 3,
      MarathiName: "श्री. अशोक बाजीराव मिसाळ",
      EnglishName: "Mr. Ashok Bajirao Misal",
      positionKey: "Gramsevak / ग्रामसेवक",
      image: "/images/ashok_misal.jpg",
      phone: "+91-9921849463",
      phoneDevnagari: "+९१-९९२१८४९४६३",
      email: "ashokmisal16@gmail.com",
    },

    // Ward Members
    {
      id: 4,
      MarathiName: "श्री. युवराज महादेव गायकवाड",
      EnglishName: "Mr. Yuvraj Mahadev Gaikwad",
      positionKey: "Member / सदस्य",
      image: "/images/Yuvraj_Gaikwad.jpeg",
      phone: "+91-7821932650",
      phoneDevnagari: "+९१-७८२१९३२६५०",
      email: "",
    },
    {
      id: 5,
      MarathiName: "सौ. शुभांगी सचिन गायकवाड",
      EnglishName: "Mrs. Shubhangi Sachin Gaikwad",
      positionKey: "Member / सदस्या",
      image: "/images/Shubhangi_Gaikwad.jpeg",
      phone: "+91-9529677578",
      phoneDevnagari: "+९१-९५२९६७७५७८",
      email: "",
    },
    {
      id: 6,
      MarathiName: "श्री. विलास मारुती माने",
      EnglishName: "Mr. Vilas Maruti Mane",
      positionKey: "Member / सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9975382714",
      phoneDevnagari: "+९१-९९७५३८२७१४",
      email: "",
    },
    {
      id: 7,
      MarathiName: "सौ. वंदना दत्तात्रय गायकवाड",
      EnglishName: "Mrs. Vandana Dattatray Gaikwad",
      positionKey: "Member / सदस्या",
      image: "/images/Vandana_Gaikwad.jpeg",
      phone: "+91-9309890263",
      phoneDevnagari: "+९१-९३०९८९०२६३",
      email: "",
    },
    {
      id: 8,
      MarathiName: "सौ. अनिता अनिल माने",
      EnglishName: "Mrs. Anita Anil Mane",
      positionKey: "Member / सदस्या",
      image: "/images/Anita_Mane.jpeg",
      phone: "+91-7620647376",
      phoneDevnagari: "+९१-७६२०६४७३७६",
      email: "",
    },
    {
      id: 9,
      MarathiName: "सौ. सविता श्रीकांत गायकवाड",
      EnglishName: "Mrs. Savita Shrikant Gaikwad",
      positionKey: "Member / सदस्या",
      image: "/images/Savita_Gaikwad.jpeg",
      phone: "+91-8080957857",
      phoneDevnagari: "+९१-८०८०९५७८५७",
      email: "",
    },
  ];

  // const administrativeStaff = [
  // ];

  const committees = [
    {
      nameKey: "admin.standingCommittee",
      icon: FaClipboardList,
      members: 5,
      responsibilityKey: "admin.standingResp",
    },
    {
      nameKey: "admin.financeCommittee",
      icon: FaBalanceScale,
      members: 4,
      responsibilityKey: "admin.financeResp",
    },
    {
      nameKey: "admin.developmentCommittee",
      icon: FaUsers,
      members: 6,
      responsibilityKey: "admin.developmentResp",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.about.administration")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("admin.subtitle")}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaUserTie className="text-4xl sm:text-5xl text-government-orange mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("admin.aboutAdministration")}
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            {t("admin.adminText1")}
          </p>
        </section>

        {/* Elected Members */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.electedReps")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electedMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-government-blue to-government-green p-4 text-white text-center">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src={member.image}
                      alt={"member.name"}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <FaUserCircle />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {member.positionKey}
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-government-blue mb-2">
                    {language === "mr"
                      ? member.MarathiName
                      : member.EnglishName}
                  </h4>
                  {/* <p className="text-gray-600 text-sm mb-4">{member.ward}</p> */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaPhoneAlt className="text-government-orange" />
                      <span>
                        {language === "en"
                          ? member.phone
                          : member.phoneDevnagari}
                      </span>
                    </div>
                    {/* <div className="flex items-center gap-2 text-sm text-gray-700"> */}
                    {/* <FaEnvelope className="text-government-orange" /> */}
                    {/* <span className="break-all">{member.email}</span> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Administrative Staff */}
        {/* <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.adminStaff")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {administrativeStaff.map((staff, index) => (
              <div
                key={index}
                className="border-l-4 border-government-orange pl-4 py-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-bold text-government-blue mb-2">
                  {language === "en" ? staff.EnglishName : staff.MarathiName}
                </h3>
                <p className="text-government-orange font-semibold mb-1">
                  {staff.position}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {t(`${staff.position}`)}
                </p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaPhoneAlt className="text-government-orange text-xs" />
                    <span>
                      {language === "en" ? staff.phone : staff.phoneDevnagari}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    {/* <FaEnvelope className="text-government-orange text-xs" /> */}
        {/* <span className="break-all">{staff.email}</span> */}
        {/* </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Committees */}
        {/* <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.panchayatCommittees")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {committees.map((committee, index) => {
              const Icon = committee.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="text-4xl text-government-orange mb-4" />
                  <h3 className="text-xl font-bold text-government-blue mb-3">
                    {t(committee.nameKey)}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="text-sm">
                      <span className="font-semibold">
                        {t("admin.members")}:
                      </span>{" "}
                      {committee.members}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">
                        {t("admin.responsibility")}:
                      </span>
                      <br />
                      {t(committee.responsibilityKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* Governance Structure */}
        {/* <section className="bg-[#4A7FA7] text-white rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t("admin.governanceStructure")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("admin.electedBody")}
              </h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>
                  • {t("admin.sarpanch")} - {t("admin.electedHead")}
                </li>
                <li>
                  • {t("admin.upSarpanch")} - {t("admin.deputyHead")}
                </li>
                <li>
                  • {t("admin.wardMember")} - {t("admin.wardMembers16")}
                </li>
                <li>
                  • {t("admin.standingCommittee")} -{" "}
                  {t("admin.standingCommitteeMembers")}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{t("admin.functions")}</h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• {t("admin.function1")}</li>
                <li>• {t("admin.function2")}</li>
                <li>• {t("admin.function3")}</li>
                <li>• {t("admin.function4")}</li>
              </ul>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
