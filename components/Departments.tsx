"use client";

import React from "react";
import Link from "next/link";
import {
  FaBuilding,
  FaSeedling,
  FaHeartbeat,
  FaFileAlt,
  FaBolt,
  FaFemale,
  FaUsers,
} from "react-icons/fa";

import { useLanguage } from "@/contexts/LanguageContext";

const Departments = () => {
  const { t, language } = useLanguage();

  const departments = [
    {
      id: 1,
      nameKey: language === "en" ? "Health Department" : "आरोग्य विभाग",
      icon: FaHeartbeat,
      color: "from-red-400 to-red-600",
      descriptionKey:
        language === "mr"
          ? "आरोग्य सेवा आणि वैद्यकीय सुविधा."
          : "Health services and medical facilities .",
      link: "/departments/health",
    },
    {
      id: 2,
      nameKey: language === "en" ? "Agriculture Department" : "कृषी विभाग",
      icon: FaSeedling,
      color: "from-green-400 to-green-600",
      descriptionKey:
        language === "mr"
          ? "शेती विकास आणि शेतकऱ्यांसाठी सेवा."
          : "Agricultural development and farmer services .",
      link: "/departments/agriculture",
    },
    {
      id: 3,
      nameKey: language === "en" ? "Revenue Department" : "महसूल विभाग",
      icon: FaFileAlt,
      color: "from-yellow-400 to-yellow-600",
      descriptionKey:
        language === "en"
          ? " Managing local revenue and records."
          : " स्थानिक महसूल आणि नोंदीचे व्यवस्थापन.",
      link: "/departments/revenue",
    },
    {
      id: 4,
      nameKey: language === "en" ? "Electricity Department" : "महावितरण विभाग",
      icon: FaBolt,
      color: "from-indigo-400 to-indigo-600",
      descriptionKey:
        language === "en"
          ? "Responsible for electricity supply and maintenance in the village."
          : "गावातील वीज पुरवठा आणि देखभालीसाठी जबाबदार.",
      link: "/departments/electricity",
    },
    {
      id: 5,
      nameKey:
        language === "en" ? "CRP Department" : "महिला बचत सक्षमीकरण विभाग",
      icon: FaUsers,
      color: "from-pink-400 to-pink-600",
      descriptionKey:
        language === "en"
          ? "women’s savings and empowerment programs."
          : "महिलांच्या बचती आणि सक्षमीकरण कार्यक्रम .",
      link: "/departments/crp",
    },
  ];
  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-6 py-4">
          <h2 className="text-2xl font-bold">{t("dept.title")}</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <Link href="/departments" key={dept.id}>
                  <div className="group cursor-pointer">
                    <div
                      className={`bg-gradient-to-br ${dept.color} text-white p-6 rounded-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
                    >
                      <Icon className="text-6xl mb-3" />
                      <h3 className="font-bold text-3xl mb-1">
                        {dept.nameKey}
                      </h3>
                      <p className="text-lg opacity-90">
                        {dept.descriptionKey}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
